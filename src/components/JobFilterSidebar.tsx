import { jobTypes } from "@/lib/job-types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import prisma from "@/lib/prisma";

async function filterJobs(formData: FormData) {
    "use server";
}

export default async function JobFilterSidebar() {

    const distinctLocation = (await prisma.job.findMany({
        where: {approved: true},
        select: {location: true},
        distinct: ["location"]
    }).then((locations) =>
        locations.map(({location}) => location).filter(Boolean),
        )) as string[]

    return (
        <aside className='md:w-[260px] p-4 sticky top-0 h-fit bg-background border rounded-lg'>
            <form action={filterJobs}>
                <div className='space-y-4'>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="query">Search</Label>
                        <Input id="query" name="query" placeholder="Title, company, etc..." />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="type">Type</Label>
                        <Select id="type" name="type" defaultValue="">
                            <option value="" >All locations</option>
                                {jobTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>

                                ))}
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Select id="location" name="location" defaultValue="">
                            <option value="" >All locations</option>
                            {distinctLocation.map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>

                            ))}
                        </Select>

                    </div>

                </div>
            </form>
        </aside>
    )
}
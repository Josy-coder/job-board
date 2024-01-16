import { Input } from "./ui/input";
import { Label } from "./ui/label";

async function filterJobs(formData: FormData) {
    "use server";
}

export default function JobFilterSidebar() {
    return (
        <aside className='md:w-[260px] p-4 sticky top-0 h-fit bg-background border rounded-lg'>
            <form action={filterJobs}>
                <div className='space-y-4'>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="query">Search</Label>
                        <Input id="query" name="query" placeholder="Title, company, etc..." />
                    </div>
                </div>
            </form>
        </aside>
    )
}
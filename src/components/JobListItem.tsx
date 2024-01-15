import { Job } from '@prisma/client';
import Image from "next/image";
import companyLogoPlaceholder from "@/assets/logo.svg";
import { Banknote, Briefcase, Globe2, MapPin } from "lucide-react";

interface JobListItemProps {
    job: Job;
}
export default function JobListItem({ job : {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt
}}: JobListItemProps) {
    return (
        <article className='flex gap-3 border rounded-lg p-5 hover:bg-muted/60'>
            <Image
                src={companyLogoUrl || companyLogoPlaceholder}
                alt={`${companyName}`}
                width={100}
                height={100}
                className='rounded-lg self-center'
            />
            <div className='flex-grow space-y-3'>
                <div>
                    <h2 className='text-xl font-medium'>{title}</h2>
                    <p className='text-muted-foreground'>{companyName}</p>
                </div>
                <div className='text-muted-foreground'>
                    <p className='flex items-center gap-1.5 sm:hidden'>
                        <Briefcase size={16} className='shrink-0'/>
                        {type}
                    </p>
                    <p className='flex items-center gap-1.5'>
                        <MapPin size={16} className='shrink-0'/>
                        {locationType}
                    </p>
                    <p className='flex items-center gap-1.5'>
                        <Globe2 size={16} className='shrink-0'/>
                        {location || "Worldwide"}
                    </p>
                    <p className='flex items-center gap-1.5'>
                        <Banknote size={16} className='shrink-0'/>
                        {type}
                    </p>
                    <p className='flex items-center gap-1.5 '>
                        <Briefcase size={16} className='shrink-0'/>
                        {type}
                    </p>
                </div>
            </div>
        </article>
    );
}
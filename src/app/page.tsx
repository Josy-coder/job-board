import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import H1 from "@/components/ui/h1";
import { jobFilterValues } from "@/lib/validation";
import { Metadata } from "next";



interface PageProps {
  searchParams: {
    query?: string,
    type?: string,
    location?: string,
    remote?: string,
  };
}

function getTitle({query, type, location, remote}: jobFilterValues) {
  const titlePrefix = query
  ? `${query} jobs`
  : type
    ? `${type} developer jobs`
    : remote
      ? "Remote Developer Jobs"
      : "All Developer Jobs";

    const titleSuffix = location ? ` in ${location}` : "";

    return `${titlePrefix}${titleSuffix}`
}

export function generateMetadata({
  searchParams: {query, type, location, remote}
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      query,
      type,
      location,
      remote: remote === "true"
    })} | Job Board`
  }

}


export default async function Home({
  searchParams: {query, type, location, remote}
} : PageProps) {
const filterValues: jobFilterValues = {
  query,
  type,
  location,
  remote: remote === "true",
}



  return (
    <main className='m-auto my-10 max-w-5xl space-y-10 px-3'>
      <div className='space-y-5 text-center'>
        <H1>{getTitle(filterValues)}</H1>
        <p className='text-muted-foreground'>
          Find your Dream Job
        </p>
      </div>
      <section className='flex flex-col md:flex-row gap-4 '>
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
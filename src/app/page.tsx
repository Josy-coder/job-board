import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import H1 from "@/components/ui/h1";



interface PageProps {
  searchParams: {
    query?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: {query, type, location, remote}
} : PageProps) {
const filterValues: JobFilterValues = {
  query,
  type,
  location,
  remote: remote === "true",
}

  return (
    <main className='max-w-5xl m-auto px-3 my-10 spacey10'>
      <div className='space-y-5 text-center'>
        <H1>Developer Jobs</H1>
        <p className='text-muted-foreground'>
          Find your Dream Job
        </p>
      </div>
      <section className='flex flex-col md:flex-row gap-4 '>
        <JobFilterSidebar />
        <JobResults />
      </section>
    </main>
  );
}
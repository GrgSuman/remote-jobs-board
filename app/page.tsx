import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import JobListings from "@/components/layouts/JobListings";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <Hero/> */}
      <Hero2/>
      <JobListings/>
    </div>
  );
}


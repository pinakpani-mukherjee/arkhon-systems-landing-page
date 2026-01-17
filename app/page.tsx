import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { PantheonGrid } from "@/components/PantheonGrid"; // The tech grid we built earlier

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Vision />
      <PantheonGrid />
      {/* Additional sections like 'Use Cases' or 'Testimonials' can go here */}
    </div>
  );
}

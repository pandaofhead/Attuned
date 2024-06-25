import About from "@/components/about";
import Contact from "@/components/contact";
import Team from "@/components/team";
import Intro from "@/components/intro";
import Features from "@/components/features";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Features />
      <Team />
      <Contact />
    </main>
  );
}

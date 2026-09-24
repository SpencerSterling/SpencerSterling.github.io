import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col">
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

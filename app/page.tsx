import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 sm:px-8">
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

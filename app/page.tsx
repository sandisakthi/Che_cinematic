import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
                <Gallery />

        <section className="bg-[#160c07] px-6 py-24 text-center md:py-32">
  <div className="mx-auto max-w-4xl">
    <p className="font-serif text-2xl italic leading-relaxed text-white/90 md:text-4xl">
      &ldquo;Years from now, when everything has changed —
      these photographs will take you back.
      <br /><br />
      To the laughter. To the people.
      <br />
      To the moments you didn&apos;t even realise
      were important.&rdquo;
    </p>

    <p className="mt-12 whitespace-nowrap text-[10px] font-medium tracking-[0.15em] text-white/50 md:text-sm md:tracking-[0.3em]">
      CHE CINEMATIC <span className="mx-2">•</span> BY ROHIT
    </p>
  </div>
</section>      </

        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

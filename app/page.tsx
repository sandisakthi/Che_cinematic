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

        <section className="bg-[#111111] px-6 py-24 text-center md:py-32">
          <div className="mx-auto max-w-4xl">
            <p className="font-serif text-2xl leading-relaxed text-white md:text-4xl md:leading-relaxed">
              Years from now, when everything has changed,
              <br className="hidden md:block" />
              these photographs will take you back.
            </p>

            <p className="mt-8 text-sm leading-loose tracking-wide text-white/70 md:text-lg">
              To the laughter. To the people.
              <br />
              To the moments you didn&apos;t even realise
              <br />
              were worth remembering.
            </p>
          </div>
        </section>

        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

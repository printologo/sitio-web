import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Problems } from "./sections/Problems";
import { Services } from "./sections/Services";
import { Benefits } from "./sections/Benefits";
import { HowItWorks } from "./sections/HowItWorks";
import { Products } from "./sections/Products";
import { Portfolio } from "./sections/Portfolio";
import { UseCases } from "./sections/UseCases";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";
import { MobileStickyCta } from "./sections/MobileStickyCta";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <a href="#inicio" className="skip-link">
        Saltar al contenido principal
      </a>

      <Header />

      <main id="contenido-principal">
        <Hero />
        <Stats />
        <Problems />
        <Services />
        <Benefits />
        <HowItWorks />
        <Products />
        <Portfolio />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <WhatsAppButton />
      <MobileStickyCta />
    </>
  );
}

export default App;

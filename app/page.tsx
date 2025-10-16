import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import Cases from "./components/Cases";
import Team from "./components/Team";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Methodology />
      <Cases />
      <Team />
      <ContactForm />
    </>
  );
}

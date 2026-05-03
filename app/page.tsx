import HeroSection from "./components/HeroSection";
import Narrativa from "./components/Narrativa";
import Impacto from "./components/Impacto";
import Postura from "./components/Postura";
import Capacidades from "./components/Capacidades";
import Team from "./components/Team";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Narrativa />
      <Impacto />
      <Postura />
      <Capacidades />
      <Team />
      <ContactForm />
    </>
  );
}

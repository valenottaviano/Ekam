import Head from "next/head";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import MeSection from "../components/MeSection";
import NavBarComponent from "../components/NavBarComponent";
import PerkSection from "../components/PerkSection";
import PortfolioSection from "../components/PortfolioSection";
import WhatsAppComponent from "../components/WhatsAppComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="icon/logo.png" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Desarrollo  y diseño web. Creemos en el poder del buen criterio, asegurandonos de una óptima experiencia de usuario."
        />
        <title>Agencia Ekam | Desarrollo web y Creativo</title>
        <link rel="stylesheet" href="./style/style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
      </Head>
      <WhatsAppComponent />
      <NavBarComponent />
      <HeroSection />
      <MeSection />
      <PortfolioSection />
      <PerkSection />
      <FooterSection />
    </div>
  );
}

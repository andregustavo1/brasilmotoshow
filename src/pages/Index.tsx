
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import MobileService from "@/components/MobileService";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "GSX Diagnósticos Maringá - Diagnóstico e Programação Automotiva";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Clients />
      <MobileService />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

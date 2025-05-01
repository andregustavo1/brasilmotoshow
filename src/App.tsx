import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PatrocineSection from './components/PatrocineSection';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <PatrocineSection />
            <ContactSection />
            <Footer />
          </>
        } />
        {/* Your other routes */}
      </Routes>
      <Toaster />
    </>
  );
};

export default App;

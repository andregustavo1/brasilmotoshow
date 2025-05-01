
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Footer from './components/Footer';
import PatrocineSection from './components/PatrocineSection';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <AboutUs />
            <PatrocineSection />
            <Contact />
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

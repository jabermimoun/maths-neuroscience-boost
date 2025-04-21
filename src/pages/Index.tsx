import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import WhyDifferent from '@/components/WhyDifferent';
import AboutMe from '@/components/AboutMe';
import Method from '@/components/Method';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import Booking from '@/components/Booking';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with the 'fade-in-section' class
    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Add Schema.org data for the organization
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Maths Réussite Academy",
      "description": "Cours particuliers de mathématiques à Bruxelles avec une méthode basée sur les neurosciences",
      "url": "https://profparticuliermaths.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bruxelles",
        "addressCountry": "BE"
      },
      "telephone": "+32488131219",
      "email": "mathsreussiteacademy@hotmail.com",
      "areaServed": "Bruxelles et périphérie",
      "teaches": ["Mathématiques", "Méthodes d'apprentissage", "Préparation aux examens"],
      "knowsAbout": ["Neurosciences de l'apprentissage", "Pédagogie différenciée", "Mathématiques"],
      "sameAs": [
        "https://www.facebook.com/mathsreussiteacademy",
        "https://www.linkedin.com/company/maths-reussite-academy"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <Header />
      <WhyDifferent />
      <AboutMe />
      <Method />
      <Testimonials />
      <Pricing />
      <Blog />
      <Booking />
      <FAQ />
      <Footer />
      
      {/* Floating CTA Button - Updated with tel: link */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a href="tel:+32488131219" className="w-14 h-14 rounded-full bg-vibrant-orange shadow-lg flex items-center justify-center animate-pulse-subtle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9983 21.4142 21.3992C21.0391 21.7999 20.5304 22.04 20 22.01C17.44 21.82 14.9599 20.9398 12.8699 19.44C10.9116 18.056 9.24711 16.333 7.98995 14.33C6.52 12.2 5.64001 9.71 5.46 7.14C5.43112 6.60904 5.67304 6.09998 6.07434 5.72408C6.47564 5.34818 7.00737 5.14109 7.54999 5.14H10.55C11.7166 5.12154 12.6676 6.05822 12.79 7.22C12.8719 8.00069 13.0278 8.77148 13.2599 9.52C13.4697 10.1798 13.2934 10.9022 12.8 11.4L11.39 12.81C12.5451 14.8706 14.3135 16.5524 16.46 17.61L17.87 16.2C18.3688 15.7052 19.096 15.5274 19.76 15.74C20.5086 15.9746 21.2795 16.1322 22.06 16.21C23.2338 16.3307 24.1772 17.2992 24.1389 18.47L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "../sections/Hero";
import { ValueStrip } from "../sections/ValueStrip";
import { Services } from "../sections/Services";
import { WhyUs } from "../sections/WhyUs";
import { Process } from "../sections/Process";
import { Pricing } from "../sections/Pricing";
import { Portfolio } from "../sections/Portfolio";
import { Testimonials } from "../sections/Testimonials";
import { FAQ } from "../sections/FAQ";
import { Contact } from "../sections/Contact";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
  };

  const handleSelectPlan = (_planName: string) => {
    navigate("/contact");
  };

  return (
    <>
      {/* Hero Section */}
      <Hero onGetStarted={handleGetStarted} />

      {/* Trust & Value Proposition Strip */}
      <ValueStrip />

      {/* Services Grid */}
      <Services />

      {/* Why Choose BOOSTING BD */}
      <WhyUs />

      {/* Agency Workflow Process */}
      <Process />

      {/* Pricing Packages */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Case Studies & Methodologies */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Direct Contact & Lead Capture */}
      <Contact />
    </>
  );
};

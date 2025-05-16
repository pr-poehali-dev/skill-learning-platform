import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ForWho from "@/components/ForWho";
import HowItWorks from "@/components/HowItWorks";
// Удалил импорт Testimonials
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ForWho />
        <HowItWorks />
        {/* Убрал компонент Testimonials */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

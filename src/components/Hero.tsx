import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto relative z-10 py-20 md:py-32 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Учитесь и делитесь <br className="hidden md:block" />
          <span className="text-yellow-300">любыми навыками</span>
        </h1>

        <p
          className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          От игры на гитаре до сантехники — каждый может стать как учеником, так
          и наставником. Простая платформа для обмена практическими знаниями.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-base px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            Найти навык
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base px-8 py-6 bg-transparent border-white text-white hover:bg-white/10"
          >
            Стать учителем
          </Button>
        </div>

        {/* Удалил блок статистики с количеством навыков, учителей и учеников */}
      </div>
    </section>
  );
};

export default Hero;

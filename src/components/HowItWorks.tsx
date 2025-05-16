
import React from 'react';
import Icon from '@/components/ui/icon';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative">
      {/* Connecting line */}
      {number < 4 && (
        <div className="absolute top-10 left-10 w-full h-[2px] bg-gray-200 z-0 hidden md:block"></div>
      )}
      
      {/* Step content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon name={icon} className="h-10 w-10 text-primary" />
        </div>
        <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold absolute -top-2 -right-2">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Выберите навык",
      description: "Найдите интересующие вас навыки из широкого каталога категорий",
      icon: "Search"
    },
    {
      number: 2,
      title: "Подберите учителя",
      description: "Просмотрите профили преподавателей, отзывы и выберите подходящего",
      icon: "Users"
    },
    {
      number: 3,
      title: "Начните обучение",
      description: "Занимайтесь по удобному графику в онлайн или офлайн формате",
      icon: "Laptop"
    },
    {
      number: 4,
      title: "Практикуйте и делитесь",
      description: "Применяйте полученные знания и становитесь учителем для других",
      icon: "Share2"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Простой процесс обучения и преподавания для всех пользователей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Step 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

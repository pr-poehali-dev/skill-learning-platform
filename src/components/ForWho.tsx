
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AudienceCardProps {
  icon: string;
  age: string;
  title: string;
  features: string[];
  color: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ icon, age, title, features, color }) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-0`}>
      <div className={`h-2 ${color}`}></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">{age}</p>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <div className={`h-12 w-12 rounded-full ${color.replace('bg-', 'bg-')}/10 flex items-center justify-center`}>
            <Icon name={icon} className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
          </div>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="CheckCircle" className={`h-5 w-5 mt-0.5 ${color.replace('bg-', 'text-')}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ForWho: React.FC = () => {
  const audiences = [
    {
      icon: "Sparkles",
      age: "18-30 лет",
      title: "Молодым для развития",
      color: "bg-purple-600",
      features: [
        "Быстрый старт в новой профессии",
        "Мастер-классы от экспертов",
        "Нетворкинг с единомышленниками",
        "Возможность монетизировать хобби"
      ]
    },
    {
      icon: "Briefcase",
      age: "31-50 лет",
      title: "Взрослым для карьеры и хобби",
      color: "bg-blue-600",
      features: [
        "Повышение квалификации без отрыва от работы",
        "Переквалификация в новой сфере",
        "Реализация давних увлечений",
        "Баланс между обучением и занятостью"
      ]
    },
    {
      icon: "BookOpen",
      age: "50+ лет",
      title: "Старшим для передачи опыта",
      color: "bg-green-600",
      features: [
        "Монетизация накопленного опыта",
        "Общение с заинтересованной аудиторией",
        "Гибкий график проведения занятий",
        "Помощь в цифровизации знаний"
      ]
    }
  ];

  return (
    <section id="for-who" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кому это подойдет</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наша платформа создана для людей всех возрастов, которые хотят учиться или делиться знаниями
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <AudienceCard 
              key={index}
              icon={audience.icon}
              age={audience.age}
              title={audience.title}
              features={audience.features}
              color={audience.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;

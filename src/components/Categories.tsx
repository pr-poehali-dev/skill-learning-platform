
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CategoryProps {
  icon: string;
  title: string;
  description: string;
  count: number;
}

const CategoryCard: React.FC<CategoryProps> = ({ icon, title, description, count }) => {
  return (
    <Card className="category-card">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon name={icon} className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{count} курсов</span>
          <a href="#" className="text-primary hover:underline font-medium flex items-center gap-1">
            Смотреть все
            <Icon name="ArrowRight" className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const Categories: React.FC = () => {
  const categories = [
    {
      icon: "Music",
      title: "Музыка",
      description: "Инструменты, вокал, теория и композиция",
      count: 120
    },
    {
      icon: "Palette",
      title: "Искусство",
      description: "Рисование, живопись, скульптура, графика",
      count: 85
    },
    {
      icon: "Wrench",
      title: "Ремонт",
      description: "Сантехника, электрика, строительство",
      count: 64
    },
    {
      icon: "Utensils",
      title: "Кулинария",
      description: "Домашняя кухня, выпечка, напитки",
      count: 98
    },
    {
      icon: "Code",
      title: "IT и программирование",
      description: "Разработка, дизайн, анализ данных",
      count: 150
    },
    {
      icon: "Languages",
      title: "Языки",
      description: "Иностранные языки, лингвистика",
      count: 110
    }
  ];

  return (
    <section id="categories" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите интересующие навыки</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Изучайте то, что вам действительно нравится, или делитесь своими умениями с другими
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              count={category.count}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            Все категории
            <Icon name="ChevronRight" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;

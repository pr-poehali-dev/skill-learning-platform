
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-montserrat text-primary">НавыкиПро</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-base">
          <a href="#categories" className="text-gray-700 hover:text-primary transition-colors">Навыки</a>
          <a href="#for-who" className="text-gray-700 hover:text-primary transition-colors">Кому подойдет</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">Как это работает</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Начать бесплатно
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

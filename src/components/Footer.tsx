
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-montserrat text-white">НавыкиПро</span>
            </div>
            <p className="mb-4">
              Платформа, где каждый может учиться и делиться любыми навыками
            </p>
            <p className="text-sm">© 2025 НавыкиПро. Все права защищены.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#categories" className="hover:text-primary transition-colors">Категории</a></li>
              <li><a href="#for-who" className="hover:text-primary transition-colors">Кому подойдет</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Как это работает</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Популярные навыки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Игра на гитаре</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Рисование</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Основы сантехники</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Выпечка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Веб-разработка</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Свяжитесь с нами</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            Разработано с ❤️ для всех, кто хочет учиться и делиться знаниями
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Twitter" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Youtube" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

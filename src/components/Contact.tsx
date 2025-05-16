
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Присоединяйтесь к нам</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Получите ранний доступ к нашей платформе и будьте в числе первых пользователей
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="ivan@example.com" 
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">
                  Что вас интересует больше всего?
                </label>
                <select 
                  id="interest"
                  className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Выберите категорию</option>
                  <option value="music">Музыка</option>
                  <option value="art">Искусство</option>
                  <option value="repair">Ремонт</option>
                  <option value="cooking">Кулинария</option>
                  <option value="it">IT и программирование</option>
                  <option value="languages">Языки</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input 
                  id="teacher" 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-600 text-primary focus:ring-primary"
                />
                <label htmlFor="teacher" className="ml-2 block text-sm text-gray-300">
                  Я хочу стать преподавателем
                </label>
              </div>
              
              <Button type="submit" className="w-full py-6 text-base font-medium">
                Получить ранний доступ
              </Button>
            </form>
            
            <div className="flex items-center justify-center mt-8 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

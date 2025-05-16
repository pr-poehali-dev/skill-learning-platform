
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, avatar, rating }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Avatar className="h-12 w-12">
            {avatar ? <AvatarImage src={avatar} alt={name} /> : null}
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
        
        <blockquote className="text-gray-600 mb-4">
          "{quote}"
        </blockquote>
        
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Благодаря НавыкиПро я научился играть на гитаре за 3 месяца. Мой преподаватель был очень терпеливым и поддерживающим.",
      name: "Алексей Петров",
      role: "Студент, 25 лет",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop",
      rating: 5
    },
    {
      quote: "Я смогла монетизировать свой опыт в кулинарии и теперь провожу мастер-классы по выпечке. Очень удобная платформа!",
      name: "Елена Соколова",
      role: "Шеф-кондитер, 52 года",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
      rating: 5
    },
    {
      quote: "Нашел здесь учителя по ремонту бытовой техники. За несколько занятий научился сам чинить многие вещи дома.",
      name: "Игорь Васильев",
      role: "Инженер, 43 года",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
      rating: 4
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы пользователей</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Послушайте истории людей, которые уже используют нашу платформу для обучения и преподавания
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

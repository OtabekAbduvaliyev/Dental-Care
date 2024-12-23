'use client';

import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    id: 'testimonial1',
    image: "/testimonial1.jpg",
    rating: 5
  },
  {
    id: 'testimonial2',
    image: "/testimonial2.jpg",
    rating: 5
  },
  {
    id: 'testimonial3',
    image: "/testimonial3.jpg",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={t(`testimonials.${testimonial.id}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{t(`testimonials.${testimonial.id}.name`)}</h3>
                  <p className="text-gray-600">{t(`testimonials.${testimonial.id}.role`)}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="inline-block text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 italic">&quot;{t(`testimonials.${testimonial.id}.quote`)}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={t(`testimonials.${testimonial.id}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{t(`testimonials.${testimonial.id}.name`)}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t(`testimonials.${testimonial.id}.role`)}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="inline-block text-yellow-400 dark:text-yellow-300 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&quot;{t(`testimonials.${testimonial.id}.quote`)}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
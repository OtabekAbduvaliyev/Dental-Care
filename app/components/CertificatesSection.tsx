'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CertificatesSection() {
  const t = useTranslations('CertificatesSection');

  const certificates = [
    {
      id: 'excellence',
      title: t('certificates.excellence.title'),
      description: t('certificates.excellence.description'),
      highlight: t('certificates.excellence.highlight')
    },
    {
      id: 'technology',
      title: t('certificates.technology.title'),
      description: t('certificates.technology.description'),
      highlight: t('certificates.technology.highlight')
    },
    {
      id: 'trust',
      title: t('certificates.trust.title'),
      description: t('certificates.trust.description'),
      highlight: t('certificates.trust.highlight')
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Certificates and Image Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
        {/* Left side - Certificates */}
        <div className="space-y-8">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('title')}
            </h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500"></div>
          </div>
          
          <div className="space-y-6">
            {certificates.map((item) => (
              <div 
                key={item.id} 
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <span className="inline-block px-4 py-2 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/certificate1.jpg"
                  alt={t('images.cert1')}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/certificate2.jpg"
                  alt={t('images.cert2')}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/certificate3.jpg"
                  alt={t('images.cert3')}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/certificate4.jpg"
                  alt={t('images.cert4')}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-50 dark:bg-gray-800 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  </section>
  );
}
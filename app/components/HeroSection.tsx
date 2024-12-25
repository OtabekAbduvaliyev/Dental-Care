'use client';

import Image from 'next/image';
import { FaClock, FaPhoneAlt, FaRegClock, FaMapMarkerAlt, FaRegSmile, FaStar } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  onScheduleClick: () => void;
}

export default function HeroSection({ onScheduleClick }: HeroSectionProps) {
  const t = useTranslations('Home');

  return (
    <section className="relative py-10 bg-white dark:bg-gray-900 pt-[calc(10%+10px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 mb-6 lg:mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{t('welcomeMessage')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight mb-4 lg:mb-6">
              {t('heroTitle')}{' '}
              <span className="relative whitespace-nowrap block sm:inline mt-2 sm:mt-0">
                <span className="relative z-10">{t('heroHighlight')}</span>
                <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 bg-blue-100/50 dark:bg-blue-900/50 -rotate-1" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 lg:mb-12">
              <button
                onClick={onScheduleClick}
                className="w-full sm:w-auto bg-[#2563EB] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors text-base sm:text-lg"
              >
                {t('bookNow')} <FaClock className="w-4 h-4" />
              </button>
              <a
                href="tel:+998901234567"
                className="w-full sm:w-auto bg-[#F9FAFB] dark:bg-gray-800 text-[#111827] dark:text-gray-200 px-6 py-3 rounded-lg flex items-center justify-center gap-2 no-underline hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-base sm:text-lg"
              >
                <FaPhoneAlt className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
                {t('callNow')}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                  <FaRegClock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span>{t('openHours')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span>{t('location')}</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/gero.jpg"
                alt={t('heroImageAlt')}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -left-4 sm:-left-8 bottom-4 sm:bottom-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <FaRegSmile className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 dark:text-gray-300" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-medium dark:text-white text-sm sm:text-base">{t('statsNumber')}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{t('statsText')}</div>
                </div>
              </div>
            </div>

            {/* Review Badge */}
            <div className="absolute -right-2 sm:-right-4 top-4 sm:top-8 bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 shadow-lg backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium dark:text-white">{t('rating')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
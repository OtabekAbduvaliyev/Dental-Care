'use client';

import { MdHealthAndSafety, MdMedicalServices, MdEmergency, MdPayments } from 'react-icons/md';
import { FaRegSmile, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations('WhyUs');

  const whyUsFeatures = [
    {
      icon: <MdHealthAndSafety size={24} />,
      displayIcon: <MdHealthAndSafety size={40} className="text-blue-600 group-hover:text-blue-700 transition-colors" />,
      title: t('features.expert.title'),
      description: t('features.expert.description'),
      stats: [
        { value: t('features.expert.stats.specialists.value'), label: t('features.expert.stats.specialists.label') },
        { value: t('features.expert.stats.success.value'), label: t('features.expert.stats.success.label') }
      ],
      image: "/images/why-us/patient-first.jpg"
    },
    {
      icon: <MdMedicalServices size={24} />,
      displayIcon: <MdMedicalServices size={40} className="text-blue-600 group-hover:text-blue-700 transition-colors" />,
      title: t('features.technology.title'),
      description: t('features.technology.description'),
      stats: [
        { value: t('features.technology.stats.xray.value'), label: t('features.technology.stats.xray.label') },
        { value: t('features.technology.stats.scanning.value'), label: t('features.technology.stats.scanning.label') }
      ],
      image: "/images/why-us/modern-equipment.jpg"
    },
    {
      icon: <FaRegSmile size={24} />,
      displayIcon: <FaRegSmile size={40} className="text-blue-600 group-hover:text-blue-700 transition-colors" />,
      title: t('features.satisfaction.title'),
      description: t('features.satisfaction.description'),
      stats: [
        { value: t('features.satisfaction.stats.satisfied.value'), label: t('features.satisfaction.stats.satisfied.label') },
        { value: t('features.satisfaction.stats.support.value'), label: t('features.satisfaction.stats.support.label') }
      ],
      image: "/images/why-us/comfortable-care.jpg"
    },
    {
      icon: <MdPayments size={24} />,
      displayIcon: <MdPayments size={40} className="text-blue-600 group-hover:text-blue-700 transition-colors" />,
      title: t('features.affordable.title'),
      description: t('features.affordable.description'),
      stats: [
        { value: t('features.affordable.stats.interest.value'), label: t('features.affordable.stats.interest.label') },
        { value: t('features.affordable.stats.transparent.value'), label: t('features.affordable.stats.transparent.label') }
      ],
      image: "/images/why-us/affordable-care.jpg"
    },
    {
      icon: <MdEmergency size={24} />,
      displayIcon: <MdEmergency size={40} className="text-blue-600 group-hover:text-blue-700 transition-colors" />,
      title: t('features.emergency.title'),
      description: t('features.emergency.description'),
      stats: [
        { value: t('features.emergency.stats.available.value'), label: t('features.emergency.stats.available.label') },
        { value: t('features.emergency.stats.response.value'), label: t('features.emergency.stats.response.label') }
      ],
      image: "/images/why-us/emargency-care.jpg"
    },
    {
      icon: <FaUsers size={24} />,
      displayIcon: <FaUsers size={40} className="text-blue-600 group-hover:text-blue-700 transition-colors" />,
      title: t('features.family.title'),
      description: t('features.family.description'),
      stats: [
        { value: t('features.family.stats.ages.value'), label: t('features.family.stats.ages.label') },
        { value: t('features.family.stats.rating.value'), label: t('features.family.stats.rating.label') }
      ],
      image: "/images/why-us/family-care.jpg"
    }
  ];

  return (
    <section className="py-24 relative" id="whyus">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('sectionTitle')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsFeatures.map((feature, index) => (
            <div key={index} className="relative group h-[400px] rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>

              {/* Icon Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl">
                {feature.displayIcon}
              </div>

              {/* Experience Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-gray-800">
                  {feature.stats[0].value} {feature.stats[0].label}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {feature.description}
                </p>

                {/* Stats Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1">{feature.stats[1].value}</span>
                    </span>
                    <span className="text-sm text-white/60">{feature.stats[1].label}</span>
                  </div>

                  {/* Additional Stat Display */}
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <div className="text-sm font-medium">
                      <span className="text-white/90">{index < 2 ? t('since') : ''} </span>
                      <span className="text-blue-400">{feature.stats[0].value}</span>
                      <span className="text-white/60 ml-1">{feature.stats[0].label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cta.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('cta.description')}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                {t('cta.button')}
              </button>
            </div>
            <div className="flex justify-end">
              <div className="grid grid-cols-2 gap-4">
                {whyUsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
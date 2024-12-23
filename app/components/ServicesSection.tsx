'use client';

import { FaCheckCircle, FaClock, FaRegHospital, FaSmile, FaTooth, FaUserMd, FaHeartbeat, FaTeeth, FaBrain } from "react-icons/fa";
import { MdHealthAndSafety, MdMedicalServices, MdCleaningServices } from "react-icons/md";
import { useTranslations } from 'next-intl';
import { AppointmentData } from '../types/appointment';

interface ServicesSectionProps {
  setSelectedService: (service: string) => void;
  setAppointmentData: React.Dispatch<React.SetStateAction<AppointmentData>>;
  setShowAllServices: (show: boolean) => void;
  showAllServices: boolean;
  setShowModal: (show: boolean) => void;
}

export default function ServicesSection({
  setSelectedService,
  setAppointmentData,
  setShowAllServices,
  showAllServices,
  setShowModal
}: ServicesSectionProps) {
    const t = useTranslations('Services');

    const services = [
        {
          icon: <MdHealthAndSafety size={24} />,
          title: t('services.general.title'),
          description: t('services.general.description'),
          features: [
            t('services.general.features.checkups'),
            t('services.general.features.cleaning'),
            t('services.general.features.cavity')
          ],
          price: t('services.general.price'),
          popular: false
        },
        {
          icon: <FaTooth size={24} />,
          title: t('services.cosmetic.title'),
          description: t('services.cosmetic.description'),
          features: [
            t('services.cosmetic.features.whitening'),
            t('services.cosmetic.features.veneers'),
            t('services.cosmetic.features.design')
          ],
          price: t('services.cosmetic.price'),
          popular: true
        },
        {
          icon: <MdMedicalServices size={24} />,
          title: t('services.orthodontics.title'),
          description: t('services.orthodontics.description'),
          features: [
            t('services.orthodontics.features.invisible'),
            t('services.orthodontics.features.traditional'),
            t('services.orthodontics.features.retainers')
          ],
          price: t('services.orthodontics.price'),
          popular: false
        },
        {
          icon: <FaUserMd size={24} />,
          title: t('services.surgery.title'),
          description: t('services.surgery.description'),
          features: [
            t('services.surgery.features.wisdom'),
            t('services.surgery.features.implants'),
            t('services.surgery.features.root')
          ],
          price: t('services.surgery.price'),
          popular: false
        },
        {
          icon: <FaHeartbeat size={24} />,
          title: t('services.emergency.title'),
          description: t('services.emergency.description'),
          features: [
            t('services.emergency.features.service'),
            t('services.emergency.features.pain'),
            t('services.emergency.features.quick')
          ],
          price: t('services.emergency.price'),
          popular: false
        },
        {
          icon: <FaSmile size={24} />,
          title: t('services.pediatric.title'),
          description: t('services.pediatric.description'),
          features: [
            t('services.pediatric.features.friendly'),
            t('services.pediatric.features.preventive'),
            t('services.pediatric.features.growth')
          ],
          price: t('services.pediatric.price'),
          popular: false
        },
        {
          icon: <FaTeeth size={24} />,
          title: t('services.implants.title'),
          description: t('services.implants.description'),
          features: [
            t('services.implants.features.look'),
            t('services.implants.features.solution'),
            t('services.implants.features.planning')
          ],
          price: t('services.implants.price'),
          popular: true
        },
        {
          icon: <MdCleaningServices size={24} />,
          title: t('services.cleaning.title'),
          description: t('services.cleaning.description'),
          features: [
            t('services.cleaning.features.scaling'),
            t('services.cleaning.features.polishing'),
            t('services.cleaning.features.stain')
          ],
          price: t('services.cleaning.price'),
          popular: false
        },
        {
          icon: <FaBrain size={24} />,
          title: t('services.tmj.title'),
          description: t('services.tmj.description'),
          features: [
            t('services.tmj.features.relief'),
            t('services.tmj.features.therapy'),
            t('services.tmj.features.solutions')
          ],
          price: t('services.tmj.price'),
          popular: false
        }
      ];
    const displayedServices = showAllServices ? services : services.slice(0, 6);
    return <>
          <section className="py-24 bg-white" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">
              {t('sectionTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('sectionSubtitle')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {displayedServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg transition-all duration-200 
                  ${service.popular 
                    ? 'ring-1 ring-blue-100 shadow-sm hover:shadow-md' 
                    : 'hover:shadow-sm'
                  }`}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  {service.popular && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                      {t('popular')}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 min-h-[60px]">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <FaCheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-semibold text-gray-900">
                      {service.price}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaClock className="w-4 h-4 mr-1" />
                      <span>{t('duration')}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200
                    ${service.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setSelectedService(service.title);
                      setAppointmentData(prev => ({ ...prev, service: service.title }));
                      setShowModal(true);
                    }}
                  >
                    {t('bookAppointment')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              {showAllServices ? t('showLess') : t('showMore')}
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                  showAllServices ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-3">
                  <FaUserMd className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{t('trust.experts.title')}</h4>
                <p className="mt-2 text-sm text-gray-600">{t('trust.experts.description')}</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <FaRegHospital className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{t('trust.facility.title')}</h4>
                <p className="mt-2 text-sm text-gray-600">{t('trust.facility.description')}</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <FaSmile className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{t('trust.satisfaction.title')}</h4>
                <p className="mt-2 text-sm text-gray-600">{t('trust.satisfaction.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
}
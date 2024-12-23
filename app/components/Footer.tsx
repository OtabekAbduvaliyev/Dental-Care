'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">{t('brand.name')}</h3>
            <p className="text-gray-600 text-sm">
              {t('brand.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">{t('quickLinks.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t('quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t('quickLinks.services')}
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t('quickLinks.appointment')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {t('quickLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">{t('contactInfo.title')}</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" /> {t('contactInfo.address')}
              </p>
              <p className="flex items-center text-gray-600">
                <FaPhoneAlt className="mr-2" /> {t('contactInfo.phone')}
              </p>
              <p className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2" /> {t('contactInfo.email')}
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">{t('workingHours.title')}</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <FaClock className="mr-2" /> {t('workingHours.weekdays')}
              </p>
              <p className="flex items-center text-gray-600">
                <FaClock className="mr-2" /> {t('workingHours.saturday')}
              </p>
              <p className="flex items-center text-gray-600">
                <FaClock className="mr-2" /> {t('workingHours.sunday')}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600 space-y-2">
            <p>{t('copyright', { year: currentYear })}</p>
            <p className="text-sm">
              <span>{t('credits.madeBy')} </span>
              <a 
                href="https://codevision.uz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                Codevision
              </a>
              <span> {t('credits.suffix')}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

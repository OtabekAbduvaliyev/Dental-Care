'use client';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FaPaperPlane } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
  submitStatus: { success?: boolean; message?: string } | null;
  setSubmitStatus: (status: { success: boolean; message: string } | null) => void;
}

export default function ContactForm({ isSubmitting, setIsSubmitting, submitStatus, setSubmitStatus }: ContactFormProps) {
  const t = useTranslations('ContactForm');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });

  // Reset status message after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitStatus) {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [submitStatus, setSubmitStatus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '');
      
      // Limit to 9 digits
      const limitedDigits = digits.slice(0, 9);
      
      // Format the phone number as: XX XXX XX XX
      let formattedPhone = '';
      if (limitedDigits.length > 0) formattedPhone += limitedDigits.slice(0, 2);
      if (limitedDigits.length > 2) formattedPhone += ' ' + limitedDigits.slice(2, 5);
      if (limitedDigits.length > 5) formattedPhone += ' ' + limitedDigits.slice(5, 7);
      if (limitedDigits.length > 7) formattedPhone += ' ' + limitedDigits.slice(7, 9);

      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formattedPhone = `+998${formData.phone.replace(/\s/g, '')}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formattedPhone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', phone: '', message: '' });
        setSubmitStatus({
          success: true,
          message: t('form.success')
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : t('form.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{t('contactInfo.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">{t('contactInfo.location.label')}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{t('contactInfo.location.address')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <FaPhoneAlt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">{t('contactInfo.phone.label')}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {t('contactInfo.phone.numbers.0')}<br />
                      {t('contactInfo.phone.numbers.1')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <FaRegClock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">{t('contactInfo.hours.label')}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {t('contactInfo.hours.weekdays')}<br />
                      {t('contactInfo.hours.saturday')}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">{t('social.title')}</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300" aria-label={t('social.facebook')}>
                      <FaFacebookF className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300" aria-label={t('social.twitter')}>
                      <FaTwitter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300" aria-label={t('social.instagram')}>
                      <FaInstagram className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{t('form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('form.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder={t('form.name.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('form.phone.label')}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    maxLength={13}
                    className="w-full px-4 py-3 pl-[60px] rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder={t('form.phone.placeholder')}
                  />
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 select-none">+998</span>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('form.message.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder={t('form.message.placeholder')}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? t('form.sending') : t('form.submit')}
                  <FaPaperPlane className={`${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TeamMembers() {
  const t = useTranslations('Team');

  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="team">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">{t('sectionTitle')}</h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-900/30 transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 relative overflow-hidden bg-blue-50 dark:bg-blue-900/20">
                <Image
                  src="/doctor1.jpg"
                  alt={t('members.member1.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{t('members.member1.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{t('members.member1.role')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t('members.member1.description')}</p>
                <div className="flex justify-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member1.specialties.general')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member1.specialties.preventive')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-900/30 transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 relative overflow-hidden bg-blue-50 dark:bg-blue-900/20">
                <Image
                  src="/doctor2.jpg"
                  alt={t('members.member2.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{t('members.member2.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{t('members.member2.role')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t('members.member2.description')}</p>
                <div className="flex justify-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member2.specialties.cosmetic')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member2.specialties.veneers')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-900/30 transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 relative overflow-hidden bg-blue-50 dark:bg-blue-900/20">
                <Image
                  src="/doctor3.jpg"
                  alt={t('members.member3.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{t('members.member3.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{t('members.member3.role')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t('members.member3.description')}</p>
                <div className="flex justify-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member3.specialties.pediatric')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member3.specialties.prevention')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-900/30 transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 relative overflow-hidden bg-blue-50 dark:bg-blue-900/20">
                <Image
                  src="/doctor4.jpg"
                  alt={t('members.member4.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{t('members.member4.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{t('members.member4.role')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t('members.member4.description')}</p>
                <div className="flex justify-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member4.specialties.surgery')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member4.specialties.implants')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-900/30 transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 relative overflow-hidden bg-blue-50 dark:bg-blue-900/20">
                <Image
                  src="/doctor5.jpg"
                  alt={t('members.member5.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{t('members.member5.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{t('members.member5.role')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t('members.member5.description')}</p>
                <div className="flex justify-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member5.specialties.periodontics')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member5.specialties.gumCare')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-900/30 transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 relative overflow-hidden bg-blue-50 dark:bg-blue-900/20">
                <Image
                  src="/doctor6.jpg"
                  alt={t('members.member6.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{t('members.member6.name')}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{t('members.member6.role')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t('members.member6.description')}</p>
                <div className="flex justify-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member6.specialties.endodontics')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {t('members.member6.specialties.rootCanal')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
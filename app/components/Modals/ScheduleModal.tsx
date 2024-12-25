'use client';

import { useTranslations } from 'next-intl';
import { AppointmentData } from '../../types/appointment';

interface ScheduleModalProps {
  showScheduleModal: boolean;
  setShowScheduleModal: (show: boolean) => void;
  appointmentData: AppointmentData;
  setAppointmentData: React.Dispatch<React.SetStateAction<AppointmentData>>;
  isSubmitting: boolean;
  setSubmitStatus: (status: { success: boolean; message: string } | null) => void;
}

export default function ScheduleModal({
  showScheduleModal,
  setShowScheduleModal,
  appointmentData,
  setAppointmentData,
  isSubmitting,
  setSubmitStatus
}: ScheduleModalProps) {
  const t = useTranslations('Index');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPhone = `+998${appointmentData.phone.replace(/\s/g, '')}`;
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...appointmentData,
          phone: formattedPhone,
          service: appointmentData.service || 'General Inquiry'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }

      setSubmitStatus({
        success: true,
        message: t('appointment.success')
      });
      setShowScheduleModal(false);
      setAppointmentData(prev => ({ ...prev, name: '', phone: '', service: '' }));
    } catch {
      setSubmitStatus({
        success: false,
        message: t('appointment.error')
      });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 9) {
      setAppointmentData({ ...appointmentData, phone: value });
    }
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return '';
    const phone = value.replace(/\D/g, '');
    if (phone.length < 2) return phone;
    if (phone.length < 5) return `${phone.slice(0, 2)} ${phone.slice(2)}`;
    if (phone.length < 7) return `${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5)}`;
    return `${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 7)} ${phone.slice(7)}`;
  };

  return (
    <>
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 dark:bg-black/60 opacity-75" onClick={() => setShowScheduleModal(false)}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800"
                >
                  <span className="sr-only">{t('common.close')}</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                    {t('schedule.title')}
                  </h3>
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="schedule-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('schedule.name')}
                      </label>
                      <input
                        type="text"
                        id="schedule-name"
                        required
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                        value={appointmentData.name}
                        onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="schedule-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('schedule.phone')}
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">
                          +998
                        </span>
                        <input
                          type="tel"
                          id="schedule-phone"
                          required
                          className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 pl-16 pr-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                          value={formatPhoneNumber(appointmentData.phone)}
                          onChange={handlePhoneChange}
                          placeholder="90 123 45 67"
                          maxLength={12}
                          pattern="[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
                        />
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        disabled={isSubmitting || !appointmentData.phone || appointmentData.phone.length < 9}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-blue-500 text-base font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800"
                      >
                        {isSubmitting ? t('schedule.scheduling') : t('schedule.submit')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowScheduleModal(false)}
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 sm:mt-0 sm:w-auto sm:text-sm dark:focus:ring-offset-gray-800"
                      >
                        {t('common.cancel')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { AppointmentData } from '../../types/appointment';
import { useEffect } from 'react';

interface AppoitmentModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  selectedService: string | null;
  appointmentData: AppointmentData;
  setAppointmentData: React.Dispatch<React.SetStateAction<AppointmentData>>;
  isSubmitting: boolean;
  setSubmitStatus: (status: { success: boolean; message: string } | null) => void;
}

export default function AppoitmentModal({
  showModal,
  setShowModal,
  selectedService,
  appointmentData,
  setAppointmentData,
  isSubmitting,
  setSubmitStatus
}: AppoitmentModalProps) {
  const t = useTranslations('Index');

  useEffect(() => {
    if (!showModal) {
      // Reset form data when modal is closed, but don't reset status
      setAppointmentData({
        name: '',
        phone: '',
        service: selectedService || '',
        date: null,
        time: '',
        notes: ''
      });
    }
  }, [showModal, setAppointmentData, selectedService]);

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
          service: selectedService,
          name: appointmentData.name,
          phone: formattedPhone,
          date: new Date().toISOString().split('T')[0],
          time: new Date().toLocaleTimeString(),
          notes: ''
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: t('appointment.successMessage')
        });
        setShowModal(false);
        setAppointmentData({
          name: '',
          phone: '',
          service: '',
          date: null,
          time: '',
          notes: ''
        });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        success: false,
        message: t('appointment.errorMessage')
      });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
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
    <div className={`fixed inset-0 z-50 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/40 dark:bg-black/60"></div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('appointmentFor')} {selectedService || t('service')}
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">{t('common.close')}</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="appointment-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('appointment.name')}
              </label>
              <input
                type="text"
                id="appointment-name"
                required
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                value={appointmentData.name}
                onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="appointment-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('appointment.phone')}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">
                  +998
                </span>
                <input
                  type="tel"
                  id="appointment-phone"
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
                {t('appointment.submit')}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 sm:mt-0 sm:w-auto sm:text-sm dark:focus:ring-offset-gray-800"
              >
                {t('appointment.cancel')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
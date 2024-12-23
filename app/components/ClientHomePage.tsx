'use client';

import { AppointmentData } from '../types/appointment';
import HeroSection from './HeroSection';
import WhyUs from './WhyUs';
import Testimonials from './TestimonialsSection';
import Certificates from './CertificatesSection';
import TeamMembers from './TeamMembers';
import ContactForm from './ContactForm';
import AppoitmentModal from './Modals/AppoitmentModal';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';

interface ClientHomePageProps {
  translations: Record<string, string>;
  showAllServices: boolean;
  setShowAllServices: (show: boolean) => void;
  isSubmitting: boolean;
  setIsSubmitting: (submitting: boolean) => void;
  submitStatus: { success?: boolean; message?: string } | null;
  setSubmitStatus: (status: { success?: boolean; message?: string } | null) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  showScheduleModal: boolean;
  setShowScheduleModal: (show: boolean) => void;
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
  appointmentData: AppointmentData;
  setAppointmentData: React.Dispatch<React.SetStateAction<AppointmentData>>;
}

export default function ClientHomePage({
  showAllServices,
  setShowAllServices,
  isSubmitting,
  setIsSubmitting,
  submitStatus,
  setSubmitStatus,
  showModal,
  setShowModal,
  showScheduleModal,
  setShowScheduleModal,
  selectedService,
  setSelectedService,
  appointmentData,
  setAppointmentData,
}: ClientHomePageProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection onScheduleClick={() => setShowScheduleModal(true)} />
      <WhyUs />
      <ServicesSection
        setShowAllServices={setShowAllServices}
        showAllServices={showAllServices}
        setSelectedService={setSelectedService}
        setAppointmentData={setAppointmentData}
        setShowModal={setShowModal}
      />
      <GallerySection />
      <TeamMembers />
      <Certificates />
      <Testimonials />
      <ContactForm 
        submitStatus={submitStatus} 
        isSubmitting={isSubmitting} 
        setIsSubmitting={setIsSubmitting} 
        setSubmitStatus={setSubmitStatus} 
      />

      <AppoitmentModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedService={selectedService}
        appointmentData={appointmentData}
        setAppointmentData={setAppointmentData}
        isSubmitting={isSubmitting}
        setSubmitStatus={setSubmitStatus}
      />
      
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowScheduleModal(false)}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                    Schedule a Visit
                  </h3>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                      <label htmlFor="schedule-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="schedule-name"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={appointmentData.name}
                        onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="schedule-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                          +998
                        </span>
                        <input
                          type="tel"
                          id="schedule-phone"
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-16 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={appointmentData.phone}
                          onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                          placeholder="90 123 45 67"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="schedule-time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
                      <input
                        type="time"
                        id="schedule-time"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={appointmentData.time}
                        onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="schedule-reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
                      <textarea
                        id="schedule-reason"
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={appointmentData.notes}
                        onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
                        placeholder="Please briefly describe your dental concerns or the reason for your visit"
                      ></textarea>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Scheduling...' : 'Schedule Visit'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowScheduleModal(false)}
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {submitStatus && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </main>
  );
}

'use client';

import HeroSection from '../components/HeroSection';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/TestimonialsSection';
import Certificates from '../components/CertificatesSection';
import TeamMembers from '../components/TeamMembers';
import ContactForm from '../components/ContactForm';
import AppoitmentModal from '../components/Modals/AppoitmentModal';
import ScheduleModal from '../components/Modals/ScheduleModal';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import { useState } from 'react';

export default function HomePage() {
  const [showAllServices, setShowAllServices] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    phone: '',
  });

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
        handleAppointmentSubmit={() => {}}
        handleModalPhoneChange={() => {}}
        appointmentData={appointmentData}
        setAppointmentData={setAppointmentData}
        isSubmitting={isSubmitting}
        setSubmitStatus={setSubmitStatus}
        formatDate={() => {}}
      />
      
      <ScheduleModal
        showScheduleModal={showScheduleModal}
        setShowScheduleModal={setShowScheduleModal}
        appointmentData={appointmentData}
        setAppointmentData={setAppointmentData}
        isSubmitting={isSubmitting}
        setSubmitStatus={setSubmitStatus}
      />

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

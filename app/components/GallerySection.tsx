'use client'
import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800',
        width: 800,
        height: 600,
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800',
        width: 800,
        height: 1000,
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800',
        width: 800,
        height: 800,
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800',
        width: 800,
        height: 1200,
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800',
        width: 800,
        height: 600,
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800',
        width: 800,
        height: 900,
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800',
        width: 800,
        height: 700,
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800',
        width: 800,
        height: 1000,
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800',
        width: 800,
        height: 800,
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800',
        width: 800,
        height: 700,
    }
];

const GallerySection = () => {
    const t = useTranslations('GallerySection');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleImageClick = useCallback((id: number) => {
        setSelectedImage(id);
        document.body.style.overflow = 'hidden';
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    }, []);

    const handleNavigate = useCallback((direction: 'prev' | 'next') => {
        if (!selectedImage) return;
        
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
        let newIndex;
        
        if (direction === 'prev') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
        } else {
            newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
        }
        
        setSelectedImage(galleryImages[newIndex].id);
    }, [selectedImage]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') handleCloseModal();
        if (e.key === 'ArrowLeft') handleNavigate('prev');
        if (e.key === 'ArrowRight') handleNavigate('next');
    }, [handleCloseModal, handleNavigate]);

    React.useEffect(() => {
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedImage, handleKeyDown]);

    return (
        <section className="py-16 relative" id="gallery">
            <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t('subtitle')}</p>
                </div>
                
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {galleryImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layout
                                className="aspect-[4/3] relative cursor-zoom-in w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => handleImageClick(image.id)}
                            >
                                <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                    <Image
                                        src={image.src}
                                        alt={t(`images.${image.id}.alt`)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02ODM6RkZGODNQdXl9drG1un+Ki4yQkJCQkJCQkJCQkJD/2wBDARUXFyAeIB4gHh4gICAgKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Minimalist Image Preview Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 dark:bg-black/98"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Close button */}
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 text-white/70 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors z-50"
                                    aria-label="Close preview"
                                >
                                    <FaTimes size={24} />
                                </button>

                                {/* Navigation Buttons */}
                                <div className="hidden sm:block">
                                    <button
                                        onClick={() => handleNavigate('prev')}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
                                        aria-label="Previous image"
                                    >
                                        <FaArrowLeft size={24} />
                                    </button>
                                    <button
                                        onClick={() => handleNavigate('next')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
                                        aria-label="Next image"
                                    >
                                        <FaArrowRight size={24} />
                                    </button>
                                </div>

                                {/* Mobile Navigation Buttons */}
                                <div className="sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 z-50">
                                    <motion.button
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        onClick={() => handleNavigate('prev')}
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white/90 hover:text-white hover:bg-white/20 transition-all"
                                        aria-label="Previous image"
                                    >
                                        <FaArrowLeft size={20} />
                                    </motion.button>
                                    <motion.button
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        onClick={() => handleNavigate('next')}
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white/90 hover:text-white hover:bg-white/20 transition-all"
                                        aria-label="Next image"
                                    >
                                        <FaArrowRight size={20} />
                                    </motion.button>
                                </div>

                                {/* Image Container */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="relative w-[800px] mx-auto bg-white/5 dark:bg-gray-900/30 rounded-2xl p-2 backdrop-blur-sm modal-container"
                                >
                                    <div className="relative w-full h-[600px] modal-image-container">
                                        <Image
                                            src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                                            alt={t(`images.${selectedImage}.alt`)}
                                            fill
                                            className="object-cover rounded-xl"
                                            quality={100}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/50 to-transparent dark:from-black/70 rounded-b-xl">
                                            <p className="text-white/90 dark:text-white text-sm font-medium">
                                                {t(`images.${selectedImage}.alt`)}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Mobile Responsive Adjustment */}
                                <style jsx global>{`
                                    @media (max-width: 850px) {
                                        .modal-container {
                                            width: 90vw !important;
                                            height: auto !important;
                                        }
                                        .modal-image-container {
                                            height: 70vh !important;
                                        }
                                    }
                                `}</style>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default GallerySection

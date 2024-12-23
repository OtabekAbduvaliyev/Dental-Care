'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

// Sample gallery data - replace with your actual images
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
]

const GallerySection = () => {
    const t = useTranslations('GallerySection');

    return (
        <section className="py-16 relative" id="gallery">
            <div className="absolute inset-0 bg-gray-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
                    <p className="text-lg text-gray-600">{t('subtitle')}</p>
                </div>
                
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryImages.map((image) => (
                        <motion.div
                            key={image.id}
                            className="break-inside-avoid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={image.src}
                                    alt={t(`images.${image.id}.alt`)}
                                    width={image.width}
                                    height={image.height}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GallerySection

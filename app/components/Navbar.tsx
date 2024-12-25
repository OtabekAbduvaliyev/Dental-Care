'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Check if we're at the top
      setIsAtTop(window.scrollY <= 0);
      
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false);
      } else { // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'uz';
  const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  const otherLocale = currentLocale === 'uz' ? 'ru' : 'uz';

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.includes('#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  }, []);

  return (
    <nav className={`fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300 
      ${show ? 'translate-y-0' : '-translate-y-full'}
      ${!isAtTop ? 'shadow-sm dark:shadow-gray-800/20' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              DentCare
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex space-x-1">
              <Link
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={handleLinkClick}
              >
                {t('services')}
              </Link>
              <Link
                href="#whyus"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={handleLinkClick}
              >
                {t('whyUs')}
              </Link>
              <Link
                href="#team"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={handleLinkClick}
              >
                {t('team')}
              </Link>
              <Link
                href="#gallery"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={handleLinkClick}
              >
                {t('gallery')}
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={handleLinkClick}
              >
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Language Selector and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 flex items-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <BsSun className="w-5 h-5" />
              ) : (
                <BsMoon className="w-5 h-5" />
              )}
            </button>
            <Link 
              href={`/${otherLocale}${pathnameWithoutLocale}`}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 rounded-md"
            >
              <MdLanguage className="w-5 h-5" />
              <span>{currentLocale === 'uz' ? 'РУ' : 'UZ'}</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none transition-all duration-200"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
              onClick={handleLinkClick}
            >
              {t('services')}
            </Link>
            <Link
              href="#whyus"
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
              onClick={handleLinkClick}
            >
              {t('whyUs')}
            </Link>
            <Link
              href="#team"
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
              onClick={handleLinkClick}
            >
              {t('team')}
            </Link>
            <Link
              href="#gallery"
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
              onClick={handleLinkClick}
            >
              {t('gallery')}
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
              onClick={handleLinkClick}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

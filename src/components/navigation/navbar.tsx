'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
    className?: string;
}

interface NavigationItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
}

export function Navbar({ className }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const servicesMenuItems = [
        { name: 'Training', href: '/services/training' },
        { name: 'Consulting', href: '/services/consulting' },
        { name: 'Solutions', href: '/services/solutions' },
    ];

    const navigation: NavigationItem[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Contact', href: '/contact' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesDropdownOpen(false);
            }
        };

        if (isServicesDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isServicesDropdownOpen]);

    return (
        <header className={cn('sticky top-0 z-50 w-full border-b bg-white', className)}>
            {/* Desktop Header */}
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 ">
                            <Image
                                src="/JPG/Artboard 3@2x-100.jpg"
                                alt="Cedar Edge Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => {
                            if (item.hasDropdown) {
                                return (
                                    <div key={item.name} className="relative" ref={dropdownRef}>
                                        <button
                                            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {item.name}
                                            <ChevronDown className={cn('ml-1 h-4 w-4 transition-transform duration-200', isServicesDropdownOpen && 'rotate-180')} />
                                        </button>
                                        {isServicesDropdownOpen && (
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                                                {servicesMenuItems.map((serviceItem) => (
                                                    <Link
                                                        key={serviceItem.name}
                                                        href={serviceItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                                                        onClick={() => setIsServicesDropdownOpen(false)}
                                                    >
                                                        {serviceItem.name}
                                                    </Link>
                                                ))}
                                                <Link
                                                    href="/services"
                                                    className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200 border-t border-gray-200 mt-1"
                                                    onClick={() => setIsServicesDropdownOpen(false)}
                                                >
                                                    View All Services
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/contact">
                            <Button size="sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg
                                className={cn('h-6 w-6', isMobileMenuOpen ? 'hidden' : 'block')}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* Close Icon */}
                            <svg
                                className={cn('h-6 w-6', isMobileMenuOpen ? 'block' : 'hidden')}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={cn('md:hidden', isMobileMenuOpen ? 'block' : 'hidden')}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                    {navigation.map((item) => {
                        if (item.hasDropdown) {
                            return (
                                <div key={item.name}>
                                    <button
                                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        {item.name}
                                        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', isServicesDropdownOpen && 'rotate-180')} />
                                    </button>
                                    {isServicesDropdownOpen && (
                                        <div className="pl-4 mt-1 space-y-1">
                                            {servicesMenuItems.map((serviceItem) => (
                                                <Link
                                                    key={serviceItem.name}
                                                    href={serviceItem.href}
                                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                                    onClick={() => {
                                                        setIsServicesDropdownOpen(false);
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    {serviceItem.name}
                                                </Link>
                                            ))}
                                            <Link
                                                href="/services"
                                                className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                                                onClick={() => {
                                                    setIsServicesDropdownOpen(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                View All Services
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    {/* Mobile CTA */}
                    <div className="border-t pt-4 mt-4">
                        <Link href="/contact" className="block">
                            <Button className="w-full justify-start" size="sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}


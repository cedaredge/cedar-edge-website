'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Have questions about our courses or need help getting started? We&apos;re here to help you on your learning journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center text-sm text-gray-500">
                                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                                <span className="font-medium">info@cedaredge.in</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Phone className="w-5 h-5 mr-2 text-green-600" />
                                <span className="font-medium">+91 7702017597</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                                <span className="font-medium">Andhra Pradesh, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                                <p className="text-gray-600 mb-8">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours. We&apos;re here to help with any questions about our courses, enrollment, or technical support.
                                </p>

                                {isSubmitted ? (
                                    <Card className="border-green-200 bg-green-50">
                                        <CardContent className="p-6">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Send className="w-8 h-8 text-white" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                                                <p className="text-green-700">
                                                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Name *
                                                </label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Your full name"
                                                    className="w-full"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email *
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="your.email@example.com"
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                placeholder="What's this about?"
                                                className="w-full"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us more about your inquiry..."
                                                className="w-full resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 transition-all duration-300 hover:shadow-lg"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center">
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Sending...
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Send Message
                                                </div>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                <p className="text-gray-600 mb-8">
                                    We&apos;re always happy to hear from our students and prospective learners. Here are the different ways you can reach us.
                                </p>

                                <div className="space-y-6">
                                    {/* Address */}
                                    <Card className="border-0 shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                                                    <MapPin className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                                                    <p className="text-gray-600">
                                                        123 Tech Park, Sheelanagar<br />
                                                        Visakhapatnam, Andhra Pradesh 530012<br />
                                                        India
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Phone */}
                                    <Card className="border-0 shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                                                    <Phone className="w-6 h-6 text-green-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                                                    <p className="text-gray-600">
                                                        <a href="tel:+917702017597" className="hover:text-green-600 transition-colors">
                                                            +91 7702017597
                                                        </a>
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Mon-Fri: 9:00 AM - 6:00 PM IST
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Email */}
                                    <Card className="border-0 shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                                                    <Mail className="w-6 h-6 text-purple-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                                                    <p className="text-gray-600">
                                                        <a href="mailto:info@cedaredge.in" className="hover:text-purple-600 transition-colors">
                                                            info@cedaredge.in
                                                        </a>
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        We respond within 24 hours
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Social Media */}
                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                                            aria-label="Twitter"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                                            aria-label="Instagram"
                                        >
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                                            aria-label="YouTube"
                                        >
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Access Membership */}
            <section className="py-16 bg-linear-to-br from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">All Access Membership</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Get unlimited access to all our courses, exclusive content, and premium features with our monthly membership plan.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                            <div className="text-5xl font-bold mb-2">₹799</div>
                            <div className="text-lg opacity-90 mb-6">per month</div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Unlimited Access</h4>
                                        <p className="text-sm opacity-80">All courses and future releases</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Premium Support</h4>
                                        <p className="text-sm opacity-80">Priority help from instructors</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Exclusive Content</h4>
                                        <p className="text-sm opacity-80">Members-only workshops & resources</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                            Subscribe & Save
                        </Button>
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Learning Paths</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Structured learning journeys designed to take you from beginner to expert in your chosen field.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                            <p className="text-gray-600 mb-4">Master modern web technologies from HTML to React</p>
                            <div className="text-2xl font-bold text-blue-600">₹24,999</div>
                            <div className="text-sm text-gray-500 line-through">₹32,000</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Development</h3>
                            <p className="text-gray-600 mb-4">Build cross-platform mobile apps with React Native</p>
                            <div className="text-2xl font-bold text-green-600">₹19,999</div>
                            <div className="text-sm text-gray-500 line-through">₹28,000</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning</h3>
                            <p className="text-gray-600 mb-4">Learn AI and ML with Python and TensorFlow</p>
                            <div className="text-2xl font-bold text-purple-600">₹32,999</div>
                            <div className="text-sm text-gray-500 line-through">₹45,000</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Data Science</h3>
                            <p className="text-gray-600 mb-4">Analyze data and build predictive models</p>
                            <div className="text-2xl font-bold text-orange-600">₹28,999</div>
                            <div className="text-sm text-gray-500 line-through">₹38,000</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-sm text-gray-600">
                        © 2025 Sedar Edge LMS. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

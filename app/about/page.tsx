'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Award, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Image from "next/image";

interface Instructor {
    id: string;
    name: string;
    title: string;
    specialty: string;
    avatar: string;
    social: {
        facebook?: string;
        twitter?: string;
        youtube?: string;
    };
}

const instructors: Instructor[] = [
    {
        id: '1',
        name: 'Dr. Sarah Johnson',
        title: 'Senior Web Development Instructor',
        specialty: 'Full Stack Development',
        avatar: '/JPG/Artboard 3@2x-100.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        id: '2',
        name: 'Mike Chen',
        title: 'Frontend Development Specialist',
        specialty: 'React & JavaScript',
        avatar: '/JPG/Artboard 4@2x-100.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        id: '3',
        name: 'Dr. Maria Garcia',
        title: 'Machine Learning Expert',
        specialty: 'AI & Data Science',
        avatar: '/JPG/Artboard 5@2x-100.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            youtube: '#'
        }
    },
    {
        id: '4',
        name: 'Jagadeesh Reddy',
        title: 'Mobile Development Lead',
        specialty: 'React Native & Flutter',
        avatar: '/JPG/Artboard 6@2x-100.jpg',
        social: {
            facebook: '#',
            twitter: '#',
            youtube: '#'
        }
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            About Cedar Edge LMS
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We are passionate about democratizing education and empowering learners worldwide with cutting-edge technology skills. Our mission is to bridge the gap between traditional education and industry demands.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center text-sm text-gray-500">
                                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                                <span className="font-medium">50+ Courses</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Users className="w-5 h-5 mr-2 text-green-600" />
                                <span className="font-medium">15,000+ Students</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Award className="w-5 h-5 mr-2 text-purple-600" />
                                <span className="font-medium">Industry Recognized</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Story */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Founded in 2025, Cedar Edge LMS was born from a simple yet powerful vision: to make quality technology education accessible to everyone, regardless of their background or location. Our journey began when our founder, Harish, recognized the growing gap between traditional education and industry requirements.
                                </p>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Today, we&apos;ve helped thousands of students transform their careers and achieve their dreams in the tech industry. Our commitment to excellence and student success drives everything we do.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-xl">
                                    <p className="text-gray-700 italic mb-4">
                                        &ldquo;Education is the most powerful tool to change the world. At Cedar Edge, we believe that everyone deserves access to world-class technology education that prepares them for the future.&rdquo;
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                            HG
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Harish Gumpana</h4>
                                            <p className="text-sm text-gray-600">Founder & CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <Image src="/JPG/ceo.jpeg" alt="Harish Gumpana" width={500} height={500} className="rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-linear-to-br from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let Numbers Talk</h2>
                        <p className="text-xl opacity-90">Our impact in numbers</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl lg:text-6xl font-bold mb-2">50+</div>
                            <div className="text-lg opacity-90">Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl lg:text-6xl font-bold mb-2">25+</div>
                            <div className="text-lg opacity-90">Instructors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl lg:text-6xl font-bold mb-2">15,000+</div>
                            <div className="text-lg opacity-90">Students</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Vision */}
                            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    To become the leading platform for technology education in India, empowering millions of learners to acquire in-demand skills and build successful careers in the digital economy.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    We envision a world where quality education is accessible to everyone, regardless of their socio-economic background, and where learning is continuous, engaging, and directly applicable to real-world challenges.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    To democratize technology education by providing comprehensive, industry-relevant courses taught by expert instructors, supported by cutting-edge learning technology and personalized mentorship.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">Industry-relevant curriculum</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">Expert instructor guidance</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">Lifetime learning support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet The Instructors */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet The Instructors</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our team of industry experts brings years of real-world experience and passion for teaching to every course.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {instructors.map((instructor) => (
                            <Card key={instructor.id} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                                        {instructor.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-2">{instructor.title}</p>
                                    <Badge variant="outline" className="mb-4">{instructor.specialty}</Badge>
                                    <div className="flex justify-center space-x-3">
                                        <a href={instructor.social.facebook} className="text-gray-400 hover:text-blue-600 transition-colors">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href={instructor.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href={instructor.social.youtube} className="text-gray-400 hover:text-red-600 transition-colors">
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
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

            {/* Contact Info */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to start your learning journey? We&apos;re here to help you every step of the way.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                                <p className="text-gray-600">
                                    123 Tech Park, Sheelanagar, Natayyapalem 5<br />
                                    Visakhapatnam, Andhra Pradesh 530012<br />
                                    India
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Phone className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-600">+91 77020 17597</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-600">info@cedaredge.in</p>
                            </div>
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

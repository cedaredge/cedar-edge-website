'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 'training',
        title: 'Training',
        description: 'Comprehensive training programs designed to upskill your team and individuals in cutting-edge technologies.',
        icon: GraduationCap,
        color: 'bg-blue-500',
        features: [
            'Industry-relevant curriculum',
            'Expert instructors',
            'Hands-on projects',
            'Certification programs',
            'Flexible schedules'
        ],
        href: '/services/training'
    },
    {
        id: 'consulting',
        title: 'Consulting',
        description: 'Strategic technology consulting to help your business leverage the latest tools and methodologies.',
        icon: Briefcase,
        color: 'bg-green-500',
        features: [
            'Technology assessment',
            'Architecture design',
            'Best practices guidance',
            'Implementation support',
            'Ongoing mentorship'
        ],
        href: '/services/consulting'
    },
    {
        id: 'solutions',
        title: 'Solutions',
        description: 'Custom software solutions tailored to your business needs, from concept to deployment.',
        icon: Lightbulb,
        color: 'bg-purple-500',
        features: [
            'Custom development',
            'System integration',
            'Cloud solutions',
            'Mobile applications',
            'Maintenance & support'
        ],
        href: '/services/solutions'
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We offer comprehensive training, strategic consulting, and custom solutions to help you achieve your technology goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <CardHeader className="pb-4">
                                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl mb-2 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <div className="space-y-3 mb-6">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={service.href}>
                                        <Button className="w-full group-hover:bg-blue-600 transition-colors">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-linear-to-br from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Cedar Edge?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-4xl font-bold mb-2">10+</div>
                                <div className="text-lg opacity-90">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">500+</div>
                                <div className="text-lg opacity-90">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">1000+</div>
                                <div className="text-lg opacity-90">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-sm text-gray-600">
                        © 2025 Cedar Edge. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}


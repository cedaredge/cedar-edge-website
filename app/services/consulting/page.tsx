'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target, TrendingUp, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const consultingServices = [
    {
        id: '1',
        title: 'Technology Assessment',
        description: 'Comprehensive evaluation of your current technology stack and recommendations for improvement.',
        deliverables: ['Technology audit report', 'Gap analysis', 'Roadmap recommendations']
    },
    {
        id: '2',
        title: 'Architecture Design',
        description: 'Design scalable and maintainable system architectures tailored to your business needs.',
        deliverables: ['System architecture diagrams', 'Technical specifications', 'Implementation plan']
    },
    {
        id: '3',
        title: 'Digital Transformation',
        description: 'Guide your organization through digital transformation initiatives.',
        deliverables: ['Transformation strategy', 'Change management plan', 'Implementation support']
    },
    {
        id: '4',
        title: 'Cloud Migration',
        description: 'Seamless migration of your infrastructure and applications to the cloud.',
        deliverables: ['Migration strategy', 'Cost optimization', 'Security assessment']
    }
];

export default function ConsultingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Services
                        </Link>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Briefcase className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Consulting Services
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Strategic technology consulting to help your business leverage the latest tools and methodologies. We provide expert guidance to drive innovation and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Consulting */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Consulting?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Target className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Strategic Focus</h3>
                                    <p className="text-sm text-gray-600">Solutions aligned with your business objectives</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Proven Results</h3>
                                    <p className="text-sm text-gray-600">Track record of successful implementations</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Expert Team</h3>
                                    <p className="text-sm text-gray-600">Experienced consultants with industry expertise</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Services */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Consulting Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {consultingServices.map((service) => (
                                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Deliverables:</h4>
                                            {service.deliverables.map((deliverable, index) => (
                                                <div key={index} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{deliverable}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Consulting Process</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Discovery & Analysis</h3>
                                    <p className="text-gray-600">We start by understanding your business, challenges, and goals through comprehensive analysis.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Strategy Development</h3>
                                    <p className="text-gray-600">We develop a tailored strategy that aligns with your objectives and resources.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Implementation Support</h3>
                                    <p className="text-gray-600">We provide hands-on support during implementation to ensure successful execution.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Ongoing Optimization</h3>
                                    <p className="text-gray-600">We continue to monitor and optimize solutions for maximum impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-linear-to-br from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's discuss how our consulting services can help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                    Schedule Consultation
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                    View All Services
                                </Button>
                            </Link>
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


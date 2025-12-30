'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code, Smartphone, Cloud, Database, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const solutions = [
    {
        id: '1',
        title: 'Custom Web Applications',
        description: 'Build scalable web applications tailored to your business needs.',
        icon: Code,
        color: 'bg-blue-500',
        features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development', 'Deployment']
    },
    {
        id: '2',
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        icon: Smartphone,
        color: 'bg-green-500',
        features: ['React Native', 'Flutter', 'Native Development', 'App Store Deployment', 'Push Notifications']
    },
    {
        id: '3',
        title: 'Cloud Solutions',
        description: 'Migrate to the cloud or build cloud-native applications.',
        icon: Cloud,
        color: 'bg-purple-500',
        features: ['AWS/Azure/GCP', 'Serverless Architecture', 'Microservices', 'DevOps', 'Monitoring']
    },
    {
        id: '4',
        title: 'System Integration',
        description: 'Integrate your existing systems with new technologies.',
        icon: Database,
        color: 'bg-orange-500',
        features: ['API Integration', 'Data Migration', 'Legacy Modernization', 'Third-party Integrations', 'ETL Processes']
    }
];

export default function SolutionsPage() {
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
                            <div className="w-20 h-20 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Lightbulb className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Custom Solutions
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Custom software solutions tailored to your business needs, from concept to deployment. We build scalable, maintainable, and high-performance applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {solutions.map((solution) => (
                                <Card key={solution.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className={`w-16 h-16 ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                                            <solution.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                                        <CardDescription>{solution.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Technologies & Services:</h4>
                                            {solution.features.map((feature, index) => (
                                                <div key={index} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{feature}</span>
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

            {/* Development Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                                <h3 className="font-semibold mb-2">Discovery</h3>
                                <p className="text-sm text-gray-600">Understanding requirements and goals</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                                <h3 className="font-semibold mb-2">Design</h3>
                                <p className="text-sm text-gray-600">Creating architecture and UI/UX</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                                <h3 className="font-semibold mb-2">Development</h3>
                                <p className="text-sm text-gray-600">Building and testing the solution</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                                <h3 className="font-semibold mb-2">Deployment</h3>
                                <p className="text-sm text-gray-600">Launch and ongoing support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Solutions?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <h3 className="font-semibold mb-2">Scalable Architecture</h3>
                                    <p className="text-sm text-gray-600">Built to grow with your business needs</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <h3 className="font-semibold mb-2">Modern Technologies</h3>
                                    <p className="text-sm text-gray-600">Using the latest tools and best practices</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <h3 className="font-semibold mb-2">Ongoing Support</h3>
                                    <p className="text-sm text-gray-600">Maintenance and updates included</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-linear-to-br from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build Your Solution?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's discuss your project and create a custom solution that fits your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                    Start Your Project
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


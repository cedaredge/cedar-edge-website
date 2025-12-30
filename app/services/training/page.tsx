'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, Users, Award, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const trainingPrograms = [
    {
        id: '1',
        title: 'Web Development Bootcamp',
        duration: '12 weeks',
        level: 'Beginner to Advanced',
        students: 500,
        price: 24999,
        topics: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    },
    {
        id: '2',
        title: 'Data Science & Analytics',
        duration: '16 weeks',
        level: 'Intermediate',
        students: 320,
        price: 32999,
        topics: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Visualization']
    },
    {
        id: '3',
        title: 'Cloud Computing & DevOps',
        duration: '10 weeks',
        level: 'Intermediate',
        students: 280,
        price: 29999,
        topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code']
    },
    {
        id: '4',
        title: 'Mobile App Development',
        duration: '14 weeks',
        level: 'Beginner to Advanced',
        students: 400,
        price: 27999,
        topics: ['React Native', 'Flutter', 'iOS', 'Android', 'App Store Deployment']
    }
];

export default function TrainingPage() {
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
                            <div className="w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <GraduationCap className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Training Programs
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Comprehensive training programs designed to upskill your team and individuals in cutting-edge technologies. Learn from industry experts with hands-on projects and real-world applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Expert Instructors</h3>
                                    <p className="text-sm text-gray-600">Learn from industry professionals with years of experience</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Flexible Schedules</h3>
                                    <p className="text-sm text-gray-600">Choose from weekend, evening, or intensive bootcamp formats</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Certification</h3>
                                    <p className="text-sm text-gray-600">Receive industry-recognized certificates upon completion</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Hands-on Projects</h3>
                                    <p className="text-sm text-gray-600">Build real-world projects to showcase your skills</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Programs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Programs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {trainingPrograms.map((program) => (
                                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <Badge variant="outline">{program.level}</Badge>
                                            <Badge className="bg-green-600">₹{program.price}</Badge>
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Clock className="w-4 h-4 mr-2" />
                                                Duration: {program.duration}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Users className="w-4 h-4 mr-2" />
                                                {program.students} students enrolled
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold mb-2">Topics Covered:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {program.topics.map((topic) => (
                                                        <Badge key={topic} variant="secondary" className="text-xs">
                                                            {topic}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <Button className="w-full">Enroll Now</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-linear-to-br from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Contact us to learn more about our training programs or to schedule a consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                    Get in Touch
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


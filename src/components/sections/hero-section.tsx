import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, Star } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                <Play className="w-3 h-3 mr-1" />
                                Featured Course
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Complete Python Masterclass for Web Development
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Master Python from fundamentals to advanced web development. Build real-world projects,
                                learn Django, Flask, and modern Python frameworks. Perfect for beginners and experienced developers.
                            </p>
                        </div>

                        {/* Course Stats */}
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-blue-600" />
                                <span className="text-sm text-gray-600">24h 30m</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-blue-600" />
                                <span className="text-sm text-gray-600">2,847 students</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <span className="text-sm text-gray-600">4.9 (1,234 reviews)</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="px-8 py-3">
                                Start Course
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-3">
                                View All Courses
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Course Preview Card */}
                    <div className="relative">
                        <Card className="overflow-hidden shadow-2xl">
                            <div className="aspect-video relative bg-gray-100 overflow-hidden">
                                <Image
                                    src="/PNG/python.png"
                                    alt="Complete Python Masterclass for Web Development"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                        <Play className="w-12 h-12 text-white fill-current ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-red-600 hover:bg-red-700">
                                        Live
                                    </Badge>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-lg">Course Preview</h3>
                                        <p className="text-gray-600 text-sm">Introduction to Python Programming</p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Progress</span>
                                            <span className="text-blue-600 font-medium">0%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full w-0"></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-600">Duration:</span>
                                            <p className="font-medium">24h 30m</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Level:</span>
                                            <p className="font-medium">Beginner to Advanced</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Language:</span>
                                            <p className="font-medium">English</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Certificate:</span>
                                            <p className="font-medium text-green-600">Included</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}


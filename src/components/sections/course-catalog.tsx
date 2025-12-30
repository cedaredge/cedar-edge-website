import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight, Code, Palette, Database, Smartphone } from 'lucide-react';
import Image from 'next/image';

interface Course {
    id: string;
    title: string;
    description: string;
    category: string;
    level: string;
    duration: string;
    students: number;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    instructor: string;
}

const courses: Course[] = [
    {
        id: '1',
        title: 'Getting Started With Python 3 for Beginners',
        description: 'Learn Python fundamentals from scratch with hands-on projects and real-world examples.',
        category: 'Backend Development',
        level: 'Beginner',
        duration: '8h 45m',
        students: 1543,
        rating: 4.8,
        reviews: 324,
        price: 7999,
        image: '/PNG/python.png',
        instructor: 'Sarah Johnson'
    },
    {
        id: '2',
        title: 'HTML 5 Web Component Fundamentals',
        description: 'Master modern HTML5 features and web components for building reusable UI elements.',
        category: 'Frontend Development',
        level: 'Beginner',
        duration: '2h 24m',
        students: 892,
        rating: 4.6,
        reviews: 156,
        price: 999,
        image: '/PNG/html.png',
        instructor: 'Mike Chen'
    },
    {
        id: '3',
        title: 'Mastering CSS 3 Flexbox With Real World Projects',
        description: 'Deep dive into CSS Flexbox with practical projects and modern layout techniques.',
        category: 'Frontend Development',
        level: 'Beginner',
        duration: '3h 18m',
        students: 1205,
        rating: 4.7,
        reviews: 278,
        price: 1999,
        image: '/PNG/css3.png',
        instructor: 'Emily Davis'
    },
    {
        id: '4',
        title: 'Full Stack Web Development with React Hooks and Redux',
        description: 'Build complete web applications using React, Redux, and modern JavaScript patterns.',
        category: 'Full Stack Development',
        level: 'Intermediate',
        duration: '4h 36m',
        students: 756,
        rating: 4.9,
        reviews: 189,
        price: 9999,
        image: '/PNG/react-hooks.png',
        instructor: 'Alex Rodriguez'
    },
    {
        id: '5',
        title: 'SAP CPI Integration for Beginners',
        description: 'Learn SAP Cloud Platform Integration (CPI) with hands-on iFlows, adapters, and end-to-end scenarios.',
        category: 'Full Stack Development',
        level: 'Intermediate',
        duration: '10h 30m',
        students: 524,
        rating: 4.9,
        reviews: 142,
        price: 12999,
        image: '/PNG/sap-cpi.png',
        instructor: 'David Miller'
    },
    {
        id: '6',
        title: 'SAP Security & Authorization Concepts',
        description: 'Master SAP Security with role design, user administration, and GRC access control fundamentals.',
        category: 'Full Stack Development',
        level: 'Intermediate',
        duration: '9h 15m',
        students: 473,
        rating: 4.8,
        reviews: 118,
        price: 11999,
        image: '/PNG/sap-security.png',
        instructor: 'Laura Thompson'
    },
    {
        id: '7',
        title: 'Digital Marketing Essentials for Beginners',
        description: 'Learn SEO, Google Ads, Social Media Marketing, and more with practical strategies and tools.',
        category: 'Professional Skills',
        level: 'Beginner',
        duration: '5h 10m',
        students: 815,
        rating: 4.7,
        reviews: 203,
        price: 1999,
        image: '/PNG/digital-marketing.png',
        instructor: 'Suresh B'
    },
    {
        id: '8',
        title: 'HR Tools and Recruitment Management Training',
        description: 'Understand HRMS, payroll, recruitment tools, and performance tracking with live examples.',
        category: 'Professional Skills',
        level: 'Beginner',
        duration: '4h 45m',
        students: 612,
        rating: 4.6,
        reviews: 157,
        price: 1499,
        image: '/PNG/hr-tools.png',
        instructor: 'Rohini'
    },
];

const categories = [
    { name: 'Frontend Development', icon: Palette, color: 'bg-blue-500' },
    { name: 'Backend Development', icon: Code, color: 'bg-green-500' },
    { name: 'Full Stack Development', icon: Database, color: 'bg-purple-500' },
    { name: 'Mobile Development', icon: Smartphone, color: 'bg-orange-500' }
];

export function CourseCatalog() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Explore Our Course Categories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our comprehensive collection of courses designed to help you master modern technologies
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {categories.map((category) => (
                        <Card key={category.name} className="group hover:shadow-lg transition-shadow cursor-pointer">
                            <CardContent className="p-6 text-center">
                                <div className={`w-16 h-16 mx-auto mb-4 ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <category.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                                <p className="text-gray-600 text-sm">
                                    {courses.filter(course => course.category === category.name).length} courses available
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Featured Courses */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-gray-900">Featured Courses</h3>
                        <Button variant="outline" className="flex items-center">
                            View All Courses
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {courses.map((course) => (
                            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="aspect-video relative overflow-hidden bg-gray-100">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="secondary">{course.level}</Badge>
                                    </div>
                                    <div className="absolute bottom-4 right-4">
                                        <Badge className="bg-green-600 hover:bg-green-700">
                                            ₹{course.price}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between mb-2">
                                        <Badge variant="outline" className="text-xs">
                                            {course.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                                        {course.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {course.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <div className="space-y-3">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {course.duration}
                                        </div>

                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center text-gray-600">
                                                <Users className="w-4 h-4 mr-2" />
                                                {course.students.toLocaleString()}
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                                                {course.rating} ({course.reviews})
                                            </div>
                                        </div>

                                        <div className="text-sm text-gray-600">
                                            Instructor: {course.instructor}
                                        </div>

                                        <Button className="w-full group-hover:bg-blue-600 transition-colors">
                                            Enroll Now
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


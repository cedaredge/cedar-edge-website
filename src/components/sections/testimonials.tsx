import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Vasanth',
        role: 'Frontend Developer',
        content: 'The Python course was absolutely fantastic! The instructor explained complex concepts in a way that was easy to understand. I went from beginner to building real projects in just a few months.',
        rating: 5,
        avatar: '/JPG/Artboard 3@2x-100.jpg'
    },
    {
        id: '2',
        name: 'Vysnavi M',
        role: 'Software Engineer',
        content: 'Cedar Edge LMS has transformed my career. The hands-on approach and real-world projects helped me land my dream job at a tech startup. Highly recommended!',
        rating: 5,
        avatar: '/JPG/Artboard 4@2x-100.jpg'
    },
    {
        id: '3',
        name: 'Devaki Oleti',
        role: 'Full Stack Developer',
        content: 'The quality of instruction is outstanding. The courses are well-structured, and the community support is incredible. I\'ve learned more here than in my entire college degree.',
        rating: 5,
        avatar: '/JPG/Artboard 3 copy@2x-100.jpg'
    },
    {
        id: '4',
        name: 'Vamshi M',
        role: 'Mobile Developer',
        content: 'The React and Redux course gave me the skills I needed to advance in my career. The practical projects and code reviews were invaluable for my learning journey.',
        rating: 5,
        avatar: '/JPG/Artboard 4 copy@2x-100.jpg'
    },
    {
        id: '5',
        name: 'Goutham M',
        role: 'Data Scientist',
        content: 'As someone transitioning from a non-tech background, Cedar Edge made learning to code accessible and enjoyable. The step-by-step approach built my confidence.',
        rating: 5,
        avatar: '/JPG/Artboard 3@2x-100.jpg'
    },
    {
        id: '6',
        name: 'David Chen',
        role: 'DevOps Engineer',
        content: 'The comprehensive curriculum and expert instructors helped me master modern development practices. The certificates are well-recognized in the industry.',
        rating: 5,
        avatar: '/JPG/Artboard 4@2x-100.jpg'
    }
];

export function Testimonials() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Thousands of Students
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See what our students say about their learning experience with Cedar Edge LMS
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 h-full flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-4">
                                    <Quote className="w-8 h-8 text-blue-600" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 mb-6 grow leading-relaxed">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15,000+</div>
                        <div className="text-gray-600">Students Enrolled</div>
                    </div>
                    <div>
                        <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div>
                        <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">500+</div>
                        <div className="text-gray-600">Courses Available</div>
                    </div>
                    <div>
                        <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">95%</div>
                        <div className="text-gray-600">Job Placement Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
}


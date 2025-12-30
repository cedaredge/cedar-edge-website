import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Code,
    Smartphone,
    Brain,
    BarChart3,
    ArrowRight,
    Clock,
    Users,
    Star
} from 'lucide-react';

interface LearningPath {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string; }>;
    color: string;
    duration: string;
    courses: number;
    students: number;
    difficulty: string;
    topics: string[];
    price: number;
}

const learningPaths: LearningPath[] = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks.',
        icon: Code,
        color: 'bg-blue-500',
        duration: '120 hours',
        courses: 24,
        students: 5420,
        difficulty: 'Beginner to Advanced',
        topics: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
        price: 24999
    },
    {
        id: '2',
        title: 'Mobile Development',
        description: 'Build native and cross-platform mobile applications for iOS and Android.',
        icon: Smartphone,
        color: 'bg-green-500',
        duration: '80 hours',
        courses: 16,
        students: 3240,
        difficulty: 'Intermediate',
        topics: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
        price: 19999
    },
    {
        id: '3',
        title: 'Machine Learning',
        description: 'Dive into artificial intelligence and machine learning with Python and popular libraries.',
        icon: Brain,
        color: 'bg-purple-500',
        duration: '100 hours',
        courses: 20,
        students: 2180,
        difficulty: 'Advanced',
        topics: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
        price: 32999
    },
    {
        id: '4',
        title: 'Data Science',
        description: 'Learn data analysis, visualization, and statistical modeling for business insights.',
        icon: BarChart3,
        color: 'bg-orange-500',
        duration: '90 hours',
        courses: 18,
        students: 2890,
        difficulty: 'Intermediate',
        topics: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Statistics'],
        price: 28999
    }
];

export function LearningPaths() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Choose Your Learning Path
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Structured learning paths designed to take you from beginner to expert in your chosen field
                    </p>
                </div>

                {/* Learning Paths Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {learningPaths.map((path) => (
                        <Card key={path.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-16 h-16 ${path.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <path.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <Badge className="bg-green-600 hover:bg-green-700">
                                        ₹{path.price}
                                    </Badge>
                                </div>

                                <CardTitle className="text-2xl mb-2 group-hover:text-blue-600 transition-colors">
                                    {path.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600 leading-relaxed">
                                    {path.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                {/* Path Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Clock className="w-4 h-4 text-gray-600 mr-1" />
                                        </div>
                                        <div className="text-sm font-semibold text-gray-900">{path.duration}</div>
                                        <div className="text-xs text-gray-600">Duration</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Code className="w-4 h-4 text-gray-600 mr-1" />
                                        </div>
                                        <div className="text-sm font-semibold text-gray-900">{path.courses}</div>
                                        <div className="text-xs text-gray-600">Courses</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Users className="w-4 h-4 text-gray-600 mr-1" />
                                        </div>
                                        <div className="text-sm font-semibold text-gray-900">{path.students.toLocaleString()}</div>
                                        <div className="text-xs text-gray-600">Students</div>
                                    </div>
                                </div>

                                {/* Difficulty */}
                                <div className="mb-4">
                                    <span className="text-sm text-gray-600">Difficulty: </span>
                                    <Badge variant="outline">{path.difficulty}</Badge>
                                </div>

                                {/* Topics */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">What you&apos;ll learn:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {path.topics.map((topic) => (
                                            <Badge key={topic} variant="secondary" className="text-xs">
                                                {topic}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                                    Start Learning Path
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* All Access Membership */}
                <Card className="bg-linear-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
                    <CardContent className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">All Access Membership</h3>
                                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                                    Get unlimited access to all courses, learning paths, and premium features.
                                    Perfect for serious learners who want to explore multiple technologies.
                                </p>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-blue-100">
                                        <Star className="w-5 h-5 mr-3" />
                                        Unlimited access to 500+ courses
                                    </div>
                                    <div className="flex items-center text-blue-100">
                                        <Star className="w-5 h-5 mr-3" />
                                        All learning paths included
                                    </div>
                                    <div className="flex items-center text-blue-100">
                                        <Star className="w-5 h-5 mr-3" />
                                        Live Q&A sessions with instructors
                                    </div>
                                    <div className="flex items-center text-blue-100">
                                        <Star className="w-5 h-5 mr-3" />
                                        Certificate of completion
                                    </div>
                                </div>
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                    Subscribe & Save
                                </Button>
                            </div>
                            <div className="text-center">
                                <div className="text-6xl font-bold mb-2">₹799</div>
                                <div className="text-blue-100 mb-4">per Annum</div>
                                <div className="text-sm text-blue-200">
                                    Cancel anytime • 7-day free trial
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}


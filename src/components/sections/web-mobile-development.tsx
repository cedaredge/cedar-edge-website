import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Smartphone, Code, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: '1',
    title: 'Web Application Development',
    description: 'Build responsive, scalable web applications using modern frameworks like React, Next.js, and Node.js. From single-page apps to enterprise solutions.',
    icon: Globe,
    color: 'bg-blue-500',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    image: '/PNG/react-hooks.png',
  },
  {
    id: '2',
    title: 'Mobile Application Development',
    description: 'Create cross-platform and native mobile apps for iOS and Android. We use React Native and Flutter for efficient, high-performance applications.',
    icon: Smartphone,
    color: 'bg-green-500',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
    image: '/PNG/Artboard 5@2x.png',
  },
  {
    id: '3',
    title: 'Full Stack Solutions',
    description: 'End-to-end development with HTML5, CSS3, and backend integration. Complete solutions from UI/UX to database design and API development.',
    icon: Code,
    color: 'bg-purple-500',
    technologies: ['HTML5', 'CSS3', 'Python', 'REST APIs'],
    image: '/PNG/python.png',
  },
];

export function WebMobileDevelopment() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Web & Mobile Application Development
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into powerful digital experiences. We build modern web and mobile applications tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

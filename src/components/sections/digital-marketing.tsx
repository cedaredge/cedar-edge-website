import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Search, Megaphone, BarChart3, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: '1',
    title: 'SEO & Content Strategy',
    description: 'Improve your search visibility with data-driven SEO strategies. Keyword research, on-page optimization, and content that ranks.',
    icon: Search,
    features: ['Keyword Research', 'Technical SEO', 'Content Optimization'],
  },
  {
    id: '2',
    title: 'Social Media Marketing',
    description: 'Engage your audience across platforms. We create compelling content strategies for Facebook, Instagram, LinkedIn, and more.',
    icon: Megaphone,
    features: ['Social Strategy', 'Content Calendar', 'Community Management'],
  },
  {
    id: '3',
    title: 'Pay-Per-Click & Analytics',
    description: 'Maximize ROI with Google Ads, meta campaigns, and analytics. We track, optimize, and scale your paid advertising efforts.',
    icon: BarChart3,
    features: ['Google Ads', 'Meta Ads', 'Conversion Tracking'],
  },
];

export function DigitalMarketing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              <TrendingUp className="w-3 h-3 mr-1" />
              Grow Your Business
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Digital Marketing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Reach your target audience and drive growth with comprehensive digital marketing solutions. From SEO to paid advertising, we help businesses thrive online.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="mt-4">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/PNG/digital-marketing.png"
                  alt="Digital Marketing Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                    Data-driven campaigns
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                    Transparent reporting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                    Measurable results
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

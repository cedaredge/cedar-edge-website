import { WebMobileDevelopment, DigitalMarketing } from "@/components/sections";
// import { HeroSection, CourseCatalog, Testimonials, LearningPaths } from "@/components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Course Catalog */}
      {/* <CourseCatalog /> */}

      {/* Student Testimonials */}
      {/* <Testimonials /> */}

      {/* Learning Paths */}
      {/* <LearningPaths /> */}

      {/* Web & Mobile Application Development */}
      <WebMobileDevelopment />

      {/* Digital Marketing */}
      <DigitalMarketing />

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



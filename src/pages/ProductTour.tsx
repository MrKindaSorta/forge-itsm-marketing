import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { signupTracker } from '@/lib/signupTracker';

// Import product screenshots
import DashboardImg from '@/assets/Images/Dashboard.png';
import TicketDashboardImg from '@/assets/Images/Ticket Dashboard.png';
import PortalImg from '@/assets/Images/Portal.png';
import ReportsImg from '@/assets/Images/Reports.png';

interface Screenshot {
  src: string;
  title: string;
  description: string;
}

const screenshots: Screenshot[] = [
  {
    src: DashboardImg,
    title: 'Free ITSM software dashboard showing IT ticketing system interface',
    description: 'Monitor all tickets, SLAs, and team performance at a glance with real-time metrics and status indicators.'
  },
  {
    src: TicketDashboardImg,
    title: 'Simple help desk software ticket management view with filtering',
    description: 'Powerful filtering, bulk actions, and real-time updates. Manage your entire ticket queue efficiently.'
  },
  {
    src: PortalImg,
    title: 'Free IT ticketing software user portal for end users',
    description: 'Clean self-service interface for end users to submit and track tickets without complexity.'
  },
  {
    src: ReportsImg,
    title: 'Free ITSM platform analytics dashboard with reports',
    description: 'Comprehensive insights into your IT support performance with detailed charts and metrics.'
  }
];

export default function ProductTour() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + screenshots.length) % screenshots.length);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % screenshots.length);
    }
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Product Tour - See Our Simple ITSM Interface in Action | Forge ITSM"
        description="See why Forge ITSM is the easiest ticketing system for small business. View screenshots of our simple help desk, affordable pricing, and clean interface that agents actually enjoy using."
        keywords="easy ticketing system demo, simple ITSM screenshots, cheap ITSM interface, affordable help desk tour, simple help desk software demo"
        canonical="https://forge-itsm.com/product-tour"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experience Forge ITSM
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour through our intuitive interface designed for both IT professionals and end users.
          </p>
          <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Product Tour - Hero CTA')}>
            <Button size="xl" className="gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Screenshots Grid */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
              <p className="text-lg text-muted-foreground">
                Click any image to view full-screen
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {screenshots.map((screenshot, index) => (
                <Card
                  key={index}
                  className="glass-card overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300 group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={screenshot.src}
                      alt={screenshot.title}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                    <p className="text-muted-foreground">{screenshot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Image Counter */}
            {selectedImageIndex !== null && (
              <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                {selectedImageIndex + 1} of {screenshots.length}
              </div>
            )}

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Main Image */}
            {selectedImageIndex !== null && (
              <div className="flex flex-col items-center justify-center w-full h-full p-8">
                <img
                  src={screenshots[selectedImageIndex].src}
                  alt={screenshots[selectedImageIndex].title}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {screenshots[selectedImageIndex].title}
                  </h3>
                  <p className="text-white/80 max-w-2xl">
                    {screenshots[selectedImageIndex].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your IT Support?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Get started free today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Product Tour - Bottom CTA')}>
              <Button size="xl" variant="secondary" className="gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="xl" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

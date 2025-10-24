import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SubdomainLoginModal from '@/components/SubdomainLoginModal';

export default function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">F</span>
            </div>
            <span className="font-bold text-xl">Forge ITSM</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <SubdomainLoginModal>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </SubdomainLoginModal>
            <Link to="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SubdomainLoginModal from '@/components/SubdomainLoginModal';

export default function Navigation() {
  return (
    <nav className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow">
              <span className="text-primary-foreground font-bold">F</span>
            </div>
            <span className="font-bold text-xl group-hover:text-primary transition-colors">Forge ITSM</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/product-tour" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Product Tour
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <SubdomainLoginModal>
              <Button variant="ghost" size="sm" className="hover:bg-muted">
                Sign In
              </Button>
            </SubdomainLoginModal>
            <Link to="/signup">
              <Button size="sm" className="shadow-md hover:shadow-lg transition-shadow">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

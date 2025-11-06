import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubdomainLoginModal from '@/components/SubdomainLoginModal';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-background border-l border-border shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-4 space-y-1">
              <Link
                to="/features"
                className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link
                to="/product-tour"
                className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Product Tour
              </Link>
              <Link
                to="/pricing"
                className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-background space-y-3">
              <SubdomainLoginModal>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Sign In
                </Button>
              </SubdomainLoginModal>
              <Link to="/signup" onClick={closeMenu}>
                <Button className="w-full shadow-md">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

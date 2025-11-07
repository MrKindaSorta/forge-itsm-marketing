import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubdomainLoginModal from '@/components/SubdomainLoginModal';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsMounted(false);
    // Delay state change to allow exit animation
    setTimeout(() => setIsOpen(false), 300);
  };

  // Trigger mount animation
  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsMounted(true);
        });
      });
    }
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Single Toggle Button - Always present in nav bar */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay - Only renders when open */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop with transition */}
          <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
              isMounted ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
          />

          {/* Menu Panel with slide-in transition */}
          <div
            className={`fixed top-0 right-0 h-full w-[280px]
              pt-[env(safe-area-inset-top)]
              pb-[env(safe-area-inset-bottom)]
              pr-[env(safe-area-inset-right)]
              flex flex-col
              bg-background border-l border-border shadow-2xl
              transition-transform duration-300 ease-out ${
              isMounted ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Header - Fixed at top */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-border">
              <span className="font-bold text-lg">Menu</span>
            </div>

            {/* Navigation Links - Scrollable middle section */}
            <nav className="flex-1 overflow-y-auto min-h-0 p-4 space-y-1">
              <Link
                to="/features"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link
                to="/product-tour"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Product Tour
              </Link>
              <Link
                to="/pricing"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>

            {/* Action Buttons - Fixed at bottom with safe area */}
            <div className="flex-shrink-0 p-4 border-t border-border bg-background space-y-3">
              <SubdomainLoginModal>
                <Button variant="outline" className="w-full">
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

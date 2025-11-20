import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import SubdomainLoginModal from '@/components/SubdomainLoginModal';
import { signupTracker } from '@/lib/signupTracker';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [mobileLoginModalOpen, setMobileLoginModalOpen] = useState(false);

  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/product-tour', label: 'Product Tour' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="text-primary-foreground font-bold">F</span>
            </motion.div>
            <span className="font-bold text-xl group-hover:text-primary transition-colors">Forge ITSM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <SubdomainLoginModal>
              <Button variant="ghost" size="sm" className="hover:bg-muted">
                Sign In
              </Button>
            </SubdomainLoginModal>
            <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Navigation - Desktop')}>
              <Button size="sm" className="shadow-md hover:shadow-lg transition-shadow">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-muted">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="flex flex-col gap-3 pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      size="default"
                      className="w-full"
                      onClick={() => {
                        setOpen(false);
                        setMobileLoginModalOpen(true);
                      }}
                    >
                      Sign In
                    </Button>
                    <Link to="/signup" onClick={() => { setOpen(false); signupTracker.trackButtonClick('Navigation - Mobile'); }}>
                      <Button size="default" className="w-full shadow-md hover:shadow-lg transition-shadow">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Login Modal - Rendered outside Sheet to avoid unmounting issues */}
      <SubdomainLoginModal
        open={mobileLoginModalOpen}
        onOpenChange={setMobileLoginModalOpen}
      >
        <span style={{ display: 'none' }} />
      </SubdomainLoginModal>
    </nav>
  );
}

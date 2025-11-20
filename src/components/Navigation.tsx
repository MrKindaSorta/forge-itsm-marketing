import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Image, DollarSign, Users, Mail } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for nav shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/features', label: 'Features', icon: Zap },
    { to: '/product-tour', label: 'Product Tour', icon: Image },
    { to: '/pricing', label: 'Pricing', icon: DollarSign },
    { to: '/about', label: 'About', icon: Users },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      className="border-b border-border/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 relative overflow-hidden"
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'hsla(222, 47%, 11%, 0.95)' : 'hsla(222, 47%, 11%, 0.8)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient border on top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="container mx-auto px-4 transition-all duration-300"
        animate={{
          paddingTop: scrolled ? '0.5rem' : '1rem',
          paddingBottom: scrolled ? '0.5rem' : '1rem',
        }}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
              <span className="text-primary-foreground font-bold relative z-10">F</span>

              {/* Pulsing glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.3)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 10px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="font-bold text-xl group-hover:text-primary transition-colors">Forge ITSM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                >
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    {link.label}
                  </div>

                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary"
                    initial={{ width: isActive ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />

                  {/* Glow effect on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-md -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <SubdomainLoginModal>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="hover:bg-muted">
                  Sign In
                </Button>
              </motion.div>
            </SubdomainLoginModal>
            <Link to="/signup" onClick={() => signupTracker.trackButtonClick('Navigation - Desktop')}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button size="sm" className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{ backgroundSize: '200% 100%' }}
                  />

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />

                  <span className="relative z-10">Get Started</span>
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-muted relative">
                  <motion.div
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
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
                    {navLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.div
                          key={link.to}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Link
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-lg hover:bg-muted/50 group"
                          >
                            <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile Action Buttons */}
                  <motion.div
                    className="flex flex-col gap-3 pt-6 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 + 0.1, duration: 0.3 }}
                  >
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
                      <Button size="default" className="w-full shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group">
                        {/* Animated gradient background for mobile CTA */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary"
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          style={{ backgroundSize: '200% 100%' }}
                        />
                        <span className="relative z-10">Get Started</span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>

      {/* Mobile Login Modal - Rendered outside Sheet to avoid unmounting issues */}
      <SubdomainLoginModal
        open={mobileLoginModalOpen}
        onOpenChange={setMobileLoginModalOpen}
      >
        <span style={{ display: 'none' }} />
      </SubdomainLoginModal>
    </motion.nav>
  );
}

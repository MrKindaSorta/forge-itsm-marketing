import { Link } from 'react-router-dom';
import { Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold">F</span>
              </div>
              <span className="font-bold">Forge ITSM</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern IT ticketing for teams who refuse to overpay.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://forge-itsm.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-muted-foreground">Follow Us</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/forge-underground"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-200"
                  aria-label="Visit our LinkedIn page"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/Forge-Underground/61583029971747/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-200"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Forge ITSM. Built with care by a solo developer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

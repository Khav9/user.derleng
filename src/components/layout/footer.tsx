import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">Derleng</span>
                <span className="text-xs text-background/70 leading-none">
                  Exploring Your World
                </span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted partner for unforgettable journeys through Cambodia
              and Southeast Asia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-[#f97251] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-[#f97251] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-[#f97251] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#home"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#tours"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Popular Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Angkor Wat Temple Tour
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Phnom Penh City Tour
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Mekong River Cruise
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  Cambodia & Vietnam
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Phnom Penh, Cambodia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+855123456789"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  +855 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="mailto:info@travelcambodia.com"
                  className="text-sm text-background/70 hover:text-[#f97251] transition-colors"
                >
                  info@derleng.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Derleng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

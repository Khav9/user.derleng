import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const {t} = useTranslation();

  const navLinks = [
    { to: "/", label: "home" },
    { to: "/travel-style", label: "travel-style" },
    { to: "/tours", label: "tours" },
    { to: "/hotel", label: "hotels" },
    { to: "/about", label: "about-us" },
    { to: "/contact", label: "contact" },

  ];

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-[#f97251] font-semibold"
      : "text-foreground hover:text-[#f97251]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-foreground leading-none">
                Derleng
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground leading-none">
                {t("exploreing-your-world")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 md:gap-6 lg:gap-8 space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-md font-medium transition-colors ${isActive(
                  link.to
                )}`}
              >
                {t(`menu.${link.label}`)}
              </Link>
            ))}
            {/* change language */}
            {/* if current En please show Khmer */}
            {/* if current Km please show English */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium py-2 transition-colors ${isActive(
                    link.to
                  )}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
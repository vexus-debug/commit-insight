import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/tlec-logo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/eye-clinic", label: "The Lens Eye Clinic" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TLEC Logo" className="h-14 w-auto rounded" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-primary leading-tight">TLEC (Re)Hab</p>
            <p className="text-xs text-muted-foreground leading-tight">Foundation for the Blind</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

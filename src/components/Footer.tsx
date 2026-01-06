
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-2">
                Contact us for a free quote
              </h3>
              <p className="text-primary-foreground/80">
                We guarantee a response within 24 hours to discuss your heating and cooling needs.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
              <Link to="/contact">
                Get a quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl">CC</span>
              </div>
              <div className="font-serif text-2xl">ComfortCare</div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Professional HVAC services you can trust. Keeping homes comfortable with reliable heating and cooling solutions for over 15 years.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-background/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors">Services & Support</Link></li>
              <li><Link to="/products" className="text-background/70 hover:text-primary transition-colors">Products & Accessories</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors">HVAC Installation</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors">Repair and Maintenance</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors">Heating System Installation</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors">Emergency Support</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors">Indoor Air Quality</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/70">(555) 123-HVAC</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/70">info@comfortcarehvac.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-background/70">
                  <div>Mon-Fri: 7AM-6PM</div>
                  <div>Sat: 8AM-4PM</div>
                  <div className="text-primary">24/7 Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 ComfortCare HVAC Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

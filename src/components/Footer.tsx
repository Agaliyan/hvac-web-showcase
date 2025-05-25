
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl">ComfortCare</div>
                <div className="text-sm text-secondary-200 -mt-1">HVAC Services</div>
              </div>
            </div>
            <p className="text-secondary-200 mb-4">
              Professional HVAC services you can trust. Keeping your home comfortable year-round with reliable heating and cooling solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-secondary-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-secondary-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-secondary-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-secondary-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-secondary-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-secondary-200">(555) 123-HVAC</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-secondary-200">info@comfortcarehvac.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div className="text-secondary-200">
                  <div>Mon-Fri: 7AM-6PM</div>
                  <div>Sat: 8AM-4PM</div>
                  <div>24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-secondary-200 mb-4">
              Get maintenance tips and special offers delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-secondary-600 border-secondary-500 text-white placeholder:text-secondary-300"
              />
              <Button className="w-full bg-accent hover:bg-accent-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-600 mt-8 pt-8 text-center">
          <p className="text-secondary-200">
            © 2024 ComfortCare HVAC Services. All rights reserved. | 
            <span className="ml-1">Licensed & Insured | ENERGY STAR Partner</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

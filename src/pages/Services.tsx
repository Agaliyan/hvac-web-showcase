
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Phone,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Air Conditioning Services",
      description: "Complete AC repair, installation, and maintenance to keep you cool all summer long.",
      features: ["Emergency Repairs", "New Installations", "Regular Maintenance", "Duct Cleaning"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      badge: "Most Popular"
    },
    {
      title: "Heating System Services",
      description: "Professional furnace and heating system services for reliable warmth during cold months.",
      features: ["Furnace Repair", "Heat Pump Installation", "Boiler Services", "Thermostat Upgrade"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      badge: "24/7 Available"
    },
    {
      title: "Indoor Air Quality",
      description: "Improve your home's air quality with professional filtration and purification systems.",
      features: ["Air Purifiers", "Humidity Control", "Filter Replacement", "Duct Sanitization"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
      badge: "Health Focused"
    },
    {
      title: "Preventive Maintenance",
      description: "Keep your HVAC system running efficiently with our comprehensive maintenance plans.",
      features: ["Bi-Annual Tune-ups", "Priority Service", "Discounted Repairs", "Extended Warranties"],
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80",
      badge: "Save Money"
    },
    {
      title: "Commercial HVAC",
      description: "Professional HVAC services for businesses, offices, and commercial properties.",
      features: ["System Design", "Installation", "Maintenance Contracts", "Energy Audits"],
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80",
      badge: "Business Solutions"
    }
  ];

  const faqs = [
    {
      question: "How often should I service my HVAC system?",
      answer: "We recommend having your HVAC system serviced twice a year - once in spring for your cooling system and once in fall for your heating system. Regular maintenance helps prevent breakdowns, improves efficiency, and extends the life of your equipment."
    },
    {
      question: "What are signs that my HVAC system needs repair?",
      answer: "Common signs include unusual noises, inconsistent temperatures, higher energy bills, poor air quality, frequent cycling on/off, and weak airflow. If you notice any of these issues, it's best to schedule a diagnostic service call."
    },
    {
      question: "How long does a typical HVAC installation take?",
      answer: "Most residential HVAC installations take 1-3 days, depending on the complexity of the system and any necessary modifications to existing ductwork. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes! We offer flexible financing options to help make your HVAC investment more affordable. We work with several financing partners to provide competitive rates and terms that fit your budget."
    },
    {
      question: "What brands do you work with?",
      answer: "We work with all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, and more. We'll recommend the best system for your specific needs, budget, and home requirements."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-6">
            HVAC Services & Support
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Comprehensive heating, cooling, and air quality services to keep your home comfortable year-round.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-600">
            <Link to="/contact">Schedule Service Today</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From emergency repairs to new installations, we provide complete HVAC solutions for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {service.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 bg-primary hover:bg-primary-700">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-20 bg-red-50 border-l-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <h2 className="font-heading font-bold text-4xl text-red-700">
                  Emergency HVAC Support
                </h2>
              </div>
              <p className="text-lg text-secondary-700 mb-6">
                HVAC emergencies don't wait for business hours. That's why we offer 24/7 emergency service 
                to get your system back up and running when you need it most.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-secondary-700">Available 24 hours a day, 7 days a week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-secondary-700">Fast response times - usually within 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-secondary-700">Upfront pricing with no hidden fees</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (555) 123-HVAC
                </Button>
                <Button asChild variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  <Link to="/contact">Request Emergency Service</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
                Common HVAC Emergencies
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Complete system breakdown during extreme weather</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Gas leaks or carbon monoxide concerns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Electrical issues with HVAC components</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Water leaks from HVAC equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Strange noises or burning smells</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Get answers to common questions about our HVAC services and maintenance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-600 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Flexible Financing Options
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't let budget concerns delay necessary HVAC repairs or upgrades. We offer flexible financing 
            solutions to help you get the comfort you need today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl mb-3">0% Interest</h3>
              <p className="opacity-90">Available for qualifying purchases with approved credit</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl mb-3">Low Monthly Payments</h3>
              <p className="opacity-90">Spread the cost over time with affordable payment plans</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl mb-3">Quick Approval</h3>
              <p className="opacity-90">Fast and easy application process with instant decisions</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-white text-accent hover:bg-secondary-100">
            <Link to="/contact">Learn About Financing</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

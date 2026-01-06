
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { 
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  Wrench,
  Settings,
  Wind,
  Thermometer,
  Building2,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Air Conditioning Services",
      description: "Complete AC repair, installation, and maintenance to keep you cool all summer long.",
      features: ["Emergency Repairs", "New Installations", "Regular Maintenance", "Duct Cleaning"],
      icon: Wind
    },
    {
      title: "Heating System Services",
      description: "Professional furnace and heating system services for reliable warmth during cold months.",
      features: ["Furnace Repair", "Heat Pump Installation", "Boiler Services", "Thermostat Upgrade"],
      icon: Thermometer
    },
    {
      title: "Indoor Air Quality",
      description: "Improve your home's air quality with professional filtration and purification systems.",
      features: ["Air Purifiers", "Humidity Control", "Filter Replacement", "Duct Sanitization"],
      icon: Wind
    },
    {
      title: "Preventive Maintenance",
      description: "Keep your HVAC system running efficiently with our comprehensive maintenance plans.",
      features: ["Bi-Annual Tune-ups", "Priority Service", "Discounted Repairs", "Extended Warranties"],
      icon: Settings
    },
    {
      title: "Commercial HVAC",
      description: "Professional HVAC services for businesses, offices, and commercial properties.",
      features: ["System Design", "Installation", "Maintenance Contracts", "Energy Audits"],
      icon: Building2
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              HVAC Services & Support
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive heating, cooling, and air quality services to keep your home comfortable year-round with expert technicians you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link to="/contact">Schedule Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8">
                <Link to="/contact">Get a quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From emergency repairs to new installations, we provide complete HVAC solutions for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-background border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-8 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground">
                  Emergency HVAC Support
                </h2>
              </div>
              <p className="text-lg text-primary-foreground/80 mb-8">
                HVAC emergencies don't wait for business hours. That's why we offer 24/7 emergency service 
                to get your system back up and running when you need it most.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground">Available 24 hours a day, 7 days a week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground">Fast response times - usually within 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground">Upfront pricing with no hidden fees</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (555) 123-HVAC
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
                  <Link to="/contact">Request Emergency Service</Link>
                </Button>
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-3xl">
              <h3 className="font-serif text-2xl text-primary-foreground mb-6">
                Common HVAC Emergencies
              </h3>
              <ul className="space-y-4">
                {[
                  "Complete system breakdown during extreme weather",
                  "Gas leaks or carbon monoxide concerns",
                  "Electrical issues with HVAC components",
                  "Water leaks from HVAC equipment",
                  "Strange noises or burning smells"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our HVAC services and maintenance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-2xl border border-border px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Flexible Financing Options
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Don't let budget concerns delay necessary HVAC repairs or upgrades. We offer flexible financing 
            solutions to help you get the comfort you need today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-serif text-2xl mb-3">0% Interest</h3>
              <p className="opacity-90">Available for qualifying purchases with approved credit</p>
            </div>
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-serif text-2xl mb-3">Low Monthly Payments</h3>
              <p className="opacity-90">Spread the cost over time with affordable payment plans</p>
            </div>
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-serif text-2xl mb-3">Quick Approval</h3>
              <p className="opacity-90">Fast and easy application process with instant decisions</p>
            </div>
          </div>
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <Link to="/contact">Learn About Financing</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

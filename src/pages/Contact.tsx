
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle,
  Star,
  Zap,
  ArrowRight
} from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your needs.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(555) 123-HVAC",
      subtitle: "24/7 Emergency Service"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@comfortcarehvac.com",
      subtitle: "Response within 4 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "1234 Main Street, Suite 100",
      subtitle: "Your City, State 12345"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-6PM",
      subtitle: "Sat: 8AM-4PM, Sun: On-call"
    }
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: "Free Estimates",
      description: "No obligation quotes for all services"
    },
    {
      icon: Star,
      title: "Licensed & Insured",
      description: "Fully certified and protected"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Same-day service available"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-medium mb-4">Get Your Free Quote Today</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Contact ComfortCare
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to improve your home's comfort? Get in touch with our expert team for a free consultation 
              and discover how we can help you save money while staying comfortable.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <Card className="bg-background border-border rounded-3xl shadow-xl">
                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="font-serif text-3xl text-foreground">
                      Get Your Free Quote
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      Fill out the form below and we'll contact you within 24 hours to discuss your HVAC needs.
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-foreground mb-2 block">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Enter your full name"
                            className="rounded-xl border-border bg-card h-12"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-foreground mb-2 block">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="(555) 123-4567"
                            className="rounded-xl border-border bg-card h-12"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground mb-2 block">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your.email@example.com"
                          className="rounded-xl border-border bg-card h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-foreground mb-2 block">Service Needed</Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                          <SelectTrigger className="rounded-xl border-border bg-card h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                            <SelectItem value="ac-repair">Air Conditioning Repair</SelectItem>
                            <SelectItem value="heating-repair">Heating System Repair</SelectItem>
                            <SelectItem value="installation">New Installation</SelectItem>
                            <SelectItem value="maintenance">Maintenance Service</SelectItem>
                            <SelectItem value="air-quality">Air Quality Solutions</SelectItem>
                            <SelectItem value="emergency">Emergency Service</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground mb-2 block">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Tell us about your HVAC needs, current issues, or any questions you have..."
                          className="rounded-xl border-border bg-card min-h-[140px] resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg">
                        Get My Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to receive communications from ComfortCare HVAC. 
                        We respect your privacy and will never share your information.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <RevealOnScroll delay={200}>
                <Card className="bg-background border-border rounded-2xl shadow-lg">
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="font-serif text-2xl text-foreground">
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <Card className="bg-secondary border-secondary rounded-2xl shadow-lg text-secondary-foreground">
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="font-serif text-2xl">
                      Why Choose ComfortCare?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-5">
                    {reasons.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <reason.icon className="h-5 w-5 mt-0.5 text-primary" />
                        <div>
                          <h4 className="font-semibold">{reason.title}</h4>
                          <p className="text-sm opacity-90">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-4">
              Visit Our Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Stop by our office to discuss your HVAC needs in person or schedule a home visit.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <Card className="bg-card border-border rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                {/* Placeholder for Google Maps */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620836526139!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Google Maps"
                ></iframe>
                
                {/* Overlay with contact info */}
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border">
                  <h4 className="font-serif text-xl text-foreground mb-2">ComfortCare HVAC</h4>
                  <p className="text-sm text-muted-foreground mb-1">1234 Main Street, Suite 100</p>
                  <p className="text-sm text-muted-foreground mb-2">Your City, State 12345</p>
                  <p className="text-sm font-medium text-primary">(555) 123-HVAC</p>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Need Emergency Service?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              HVAC emergencies happen at the worst times. That's why we offer 24/7 emergency service 
              to get your system back up and running when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 h-14 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-HVAC
              </Button>
              <div className="text-lg font-medium opacity-90">
                Available 24/7 for emergencies
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Contact;

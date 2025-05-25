
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

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
      subtitle: "24/7 Emergency Service",
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@comfortcarehvac.com",
      subtitle: "Response within 4 hours",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "1234 Main Street, Suite 100",
      subtitle: "Your City, State 12345",
      color: "text-orange-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-6PM",
      subtitle: "Sat: 8AM-4PM, Sun: On-call",
      color: "text-secondary-600"
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
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-white text-lg px-6 py-2">
            Get Your Free Quote Today
          </Badge>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-6">
            Contact ComfortCare
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Ready to improve your home's comfort? Get in touch with our expert team for a free consultation 
            and discover how we can help you save money while staying comfortable.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-heading text-primary">
                    Get Your Free Quote
                  </CardTitle>
                  <p className="text-secondary-600">
                    Fill out the form below and we'll contact you within 24 hours to discuss your HVAC needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
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
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your HVAC needs, current issues, or any questions you have..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-600">
                      Get My Free Quote
                    </Button>

                    <p className="text-sm text-secondary-500 text-center">
                      By submitting this form, you agree to receive communications from ComfortCare HVAC. 
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-primary">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-secondary-50 flex items-center justify-center ${info.color}`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">{info.title}</h3>
                        <p className="text-secondary-700 font-medium">{info.details}</p>
                        <p className="text-sm text-secondary-500">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-accent text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">
                    Why Choose ComfortCare?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <reason.icon className="h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">{reason.title}</h4>
                        <p className="text-sm opacity-90">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-secondary-600">
              Stop by our office to discuss your HVAC needs in person or schedule a home visit.
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <div className="aspect-video bg-secondary-200 flex items-center justify-center relative">
              {/* Placeholder for Google Maps */}
              <div className="text-center">
                <MapPin className="h-16 w-16 text-secondary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-600 mb-2">Interactive Map</h3>
                <p className="text-secondary-500">
                  1234 Main Street, Suite 100<br />
                  Your City, State 12345
                </p>
              </div>
              
              {/* Overlay with contact info */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <h4 className="font-semibold text-primary mb-2">ComfortCare HVAC</h4>
                <p className="text-sm text-secondary-600 mb-1">1234 Main Street, Suite 100</p>
                <p className="text-sm text-secondary-600 mb-2">Your City, State 12345</p>
                <p className="text-sm font-medium text-accent">(555) 123-HVAC</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Need Emergency Service?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            HVAC emergencies happen at the worst times. That's why we offer 24/7 emergency service 
            to get your system back up and running when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-secondary-100 text-lg px-8 py-4">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-HVAC
            </Button>
            <div className="text-lg font-medium">
              Available 24/7 for emergencies
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  ArrowDown
} from 'lucide-react';

const Home = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock support when you need it most"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully certified technicians and comprehensive coverage"
    },
    {
      icon: Users,
      title: "Expert Technicians",
      description: "15+ years of experience in HVAC installation and repair"
    },
    {
      icon: Award,
      title: "Energy Efficient Solutions",
      description: "ENERGY STAR certified products and eco-friendly options"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      text: "ComfortCare saved our summer! Our AC broke during a heatwave and they had us cool again within hours. Professional, fast, and reasonably priced.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      location: "Suburbs",
      text: "Best HVAC company in the area. They installed our new furnace and the service was exceptional. Very knowledgeable and clean work.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      location: "Westside",
      text: "I've been using ComfortCare for maintenance for 3 years. Always on time, fair pricing, and they explain everything clearly. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 animate-parallax"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent text-white text-lg px-6 py-2">
              Serving Your Community Since 2009
            </Badge>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary mb-6 leading-tight">
              Stay Cool, Stay Warm,<br />
              <span className="text-accent">Stay Comfortable</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Professional HVAC services you can trust. From emergency repairs to new installations, 
              we keep your home at the perfect temperature year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-lg px-8 py-4">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Why Choose ComfortCare?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We're committed to providing exceptional HVAC services with a focus on reliability, 
              quality, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-accent group animate-slide-in-right">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-100 transition-colors">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                Your Trusted HVAC Partner
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                For over 15 years, ComfortCare has been the leading HVAC service provider in our community. 
                We specialize in residential and commercial heating, cooling, and air quality solutions that 
                deliver comfort, efficiency, and peace of mind.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-secondary-700">EPA Certified & Licensed Technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-secondary-700">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-secondary-700">Financing Options Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-secondary-700">ENERGY STAR Partner</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-700">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80"
                alt="HVAC Technician at Work"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border max-w-xs">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-secondary-700 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied customers who trust ComfortCare 
              for their heating and cooling needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-secondary-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-secondary-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Gallery */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Take a look at some of our recent installations and the comfortable homes we've helped create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
                title: "Modern Home Installation",
                description: "Complete HVAC system for new construction"
              },
              { 
                image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80",
                title: "Energy Efficient Upgrade",
                description: "High-efficiency heat pump installation"
              },
              { 
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
                title: "Commercial Project",
                description: "Office building climate control system"
              },
              { 
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80",
                title: "Smart Thermostat Setup",
                description: "WiFi-enabled temperature control"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">{project.title}</h4>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready for Comfort?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't wait for your HVAC system to break down. Contact us today for a free consultation 
            and keep your home comfortable all year round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-lg px-8 py-4">
              <Link to="/contact">Schedule Service</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Settings, 
  Home as HomeIcon,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Clock,
  Shield,
  Users,
  Award
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: "HVAC Installation",
      description: "Our installation services go beyond simply putting in new equipment. We perform a thorough analysis of your property to determine the most suitable system."
    },
    {
      icon: Settings,
      title: "Repair and Maintenance",
      description: "Expert repair services for all HVAC brands and comprehensive maintenance plans to keep your system running efficiently year-round."
    },
    {
      icon: HomeIcon,
      title: "Heating System Installation",
      description: "Professional heating system installations tailored to your home's specific needs, ensuring optimal comfort and energy efficiency."
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      title: "AC installation at main building: 2nd floor",
      description: "Complete commercial HVAC installation"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Yearly servicing on HVAC appliances",
      description: "Preventive maintenance program"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Full renovation of heating systems",
      description: "Complete system upgrade and modernization"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      text: "We were very satisfied with the entire experience. The team was extremely punctual and the quality exceeded our expectations, especially given their competitive pricing."
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      text: "Talk about fast and hassle-free! Our commercial HVAC was installed in record time. Would recommend and will definitely be using their services again."
    },
    {
      name: "Emily Davis",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      text: "Excellent service from start to finish. The technicians were knowledgeable and professional. Our energy bills have dropped significantly since the new installation."
    }
  ];

  const articles = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      tag: "Tips",
      title: "How Ventilation, Air Conditioning & Heating is Crucial in Every Home",
      description: "The importance of a well-maintained heating system in colder climates cannot be overstated."
    },
    {
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
      tag: "Guides",
      title: "Complete Guide to Energy-Efficient HVAC Systems",
      description: "Learn how to reduce your energy bills while maintaining optimal comfort."
    }
  ];

  const partners = [
    "ASGARDIA", "Caven", "| Code.io", "hexa", "velocity"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Delivering quality home HVAC solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                We offer top-quality HVAC solutions specialized in creating reliable and efficient climate control systems, ensuring your comfort and efficiency in every space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  <Link to="/services">Our services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8">
                  <Link to="/contact">Get a quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                  alt="HVAC Professional"
                  className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-lg border border-border z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {partners.map((partner, index) => (
              <span key={index} className="font-medium text-lg text-foreground/60">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Expert home HVAC services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer full-service plans for both residential and commercial properties to keep your system running effectively, reducing unexpected repairs.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/services">
                See services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-card border-border hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Decades of expert HVAC solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over 15 years of industry experience, our team of NATE-certified technicians ensures professional quality and efficiency, updating your home's comfort with industry-leading products and expertise.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Certified and trained technicians</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Energy-efficient solutions that save money</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">24/7 emergency service available</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  <Link to="/about">About us</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
                alt="HVAC Installation"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Our recent projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore some of our recent work where we've delivered top-quality HVAC solutions to residential and commercial clients.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/about">
                All projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Hear what our customers have to say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We pride ourselves on delivering exceptional service and results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-border rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Browse our articles
            </h2>
            <Button asChild variant="outline" className="mt-6 md:mt-0 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/about">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="group bg-card border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <span className="text-sm text-primary font-medium mb-3">{article.tag}</span>
                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {article.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Award,
  Users,
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight
} from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll';

const About = () => {
  const teamMembers = [
    {
      name: "Michael Thompson",
      title: "Lead HVAC Technician & Owner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "With over 20 years in the HVAC industry, Mike founded ComfortCare with a mission to provide honest, reliable service."
    },
    {
      name: "Sarah Johnson",
      title: "Customer Service Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Sarah ensures every customer receives exceptional service from first call to project completion."
    },
    {
      name: "David Rodriguez",
      title: "Installation Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "David leads our installation team with precision and expertise, ensuring every project meets the highest standards."
    }
  ];

  const certifications = [
    {
      title: "ENERGY STAR Partner",
      description: "Committed to helping customers save energy and reduce environmental impact",
      icon: Award
    },
    {
      title: "BBB Accredited Business",
      description: "A+ rating with the Better Business Bureau for exceptional customer service",
      icon: Star
    },
    {
      title: "Licensed & Bonded",
      description: "Fully licensed, bonded, and insured for your protection and peace of mind",
      icon: Shield
    },
    {
      title: "NATE Certified",
      description: "North American Technician Excellence certification ensures skilled technicians",
      icon: CheckCircle
    }
  ];

  const milestones = [
    { year: "2009", event: "ComfortCare HVAC Services founded" },
    { year: "2012", event: "Became ENERGY STAR Partner" },
    { year: "2015", event: "Reached 1,000+ satisfied customers" },
    { year: "2018", event: "Expanded to commercial services" },
    { year: "2021", event: "Achieved BBB A+ rating" },
    { year: "2024", event: "15 years of trusted service" }
  ];

  const projects = [
    {
      title: "Residential New Construction",
      description: "Complete HVAC system design and installation for 150-home development",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      details: "Energy-efficient heat pumps with smart thermostats"
    },
    {
      title: "Commercial Office Building",
      description: "Upgraded 50,000 sq ft office building with energy-efficient rooftop units",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      details: "40% reduction in energy costs achieved"
    },
    {
      title: "Historic Home Restoration",
      description: "Carefully installed modern HVAC while preserving historic character",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      details: "Custom ductwork design for minimal visual impact"
    },
    {
      title: "Smart Home Integration",
      description: "Whole-home automation with advanced climate control systems",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
      details: "Full smart home ecosystem integration"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-medium mb-4">15+ Years of Excellence</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              About ComfortCare HVAC
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted local HVAC partner, dedicated to keeping your home comfortable while providing 
              exceptional service and energy-efficient solutions.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2009, ComfortCare HVAC Services began with a simple mission: to provide honest, 
                reliable heating and cooling services to our community. What started as a small family business 
                has grown into the area's most trusted HVAC company.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that every home deserves comfort, efficiency, and peace of mind. That's why we've 
                built our reputation on quality workmanship, transparent pricing, and exceptional customer service.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-background rounded-2xl">
                  <div className="font-serif text-4xl text-primary mb-2">2,500+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-background rounded-2xl">
                  <div className="font-serif text-4xl text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
              <Button asChild size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </RevealOnScroll>
            <RevealOnScroll delay={200} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
                alt="ComfortCare Team"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">Emergency Service</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're guided by core values that ensure every customer receives the highest quality service and support.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <RevealOnScroll delay={100}>
              <Card className="bg-card border-border rounded-2xl text-center p-8 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Integrity</h3>
                  <p className="text-muted-foreground">
                    We believe in honest communication, transparent pricing, and doing what's right for our customers.
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <Card className="bg-card border-border rounded-2xl text-center p-8 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Excellence</h3>
                  <p className="text-muted-foreground">
                    We're committed to the highest standards of workmanship and continuous improvement.
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <Card className="bg-card border-border rounded-2xl text-center p-8 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Community</h3>
                  <p className="text-muted-foreground">
                    We're your neighbors, and we care about our community. We support local charities and give back.
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>

          {/* Timeline */}
          <RevealOnScroll delay={400} className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <h3 className="font-serif text-3xl text-foreground mb-10 text-center">Our Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-serif text-lg">
                    {milestone.year}
                  </div>
                  <p className="text-foreground text-sm">{milestone.event}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing you with the best HVAC service possible.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <Card className="bg-background border-border rounded-2xl text-center overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.title}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Certifications & Affiliations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest industry standards through ongoing training and certifications.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <Card className="bg-card border-border rounded-2xl text-center p-8 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <cert.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Recent Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                See examples of our quality workmanship and commitment to customer satisfaction.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <Card className="group bg-background border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-sm text-primary font-medium">{project.details}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Ready to Experience the ComfortCare Difference?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied customers who trust ComfortCare for their heating and cooling needs. 
              Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default About;

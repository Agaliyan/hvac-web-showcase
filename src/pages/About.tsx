
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Award,
  Users,
  CheckCircle,
  Clock,
  Shield,
  Star
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Michael Thompson",
      title: "Lead HVAC Technician & Owner",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
      bio: "With over 20 years in the HVAC industry, Mike founded ComfortCare with a mission to provide honest, reliable service. He holds master certifications from all major manufacturers.",
      certifications: ["EPA Certified", "NATE Certified", "Master Technician"]
    },
    {
      name: "Sarah Johnson",
      title: "Customer Service Manager",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80",
      bio: "Sarah ensures every customer receives exceptional service from first call to project completion. Her attention to detail and friendly approach make every interaction positive.",
      certifications: ["Customer Service Excellence", "Project Management", "Energy Efficiency Specialist"]
    },
    {
      name: "David Rodriguez",
      title: "Installation Specialist",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=400&q=80",
      bio: "David leads our installation team with precision and expertise. His 15 years of experience ensure every installation is completed to the highest standards.",
      certifications: ["Licensed Contractor", "Safety Certified", "Smart Home Integration"]
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
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      details: "Energy-efficient heat pumps with smart thermostats"
    },
    {
      title: "Commercial Office Building",
      description: "Upgraded 50,000 sq ft office building with energy-efficient rooftop units",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      details: "40% reduction in energy costs achieved"
    },
    {
      title: "Historic Home Restoration",
      description: "Carefully installed modern HVAC while preserving historic character",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
      details: "Custom ductwork design for minimal visual impact"
    },
    {
      title: "Smart Home Integration",
      description: "Whole-home automation with advanced climate control systems",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80",
      details: "Full smart home ecosystem integration"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-white text-lg px-6 py-2">
            15+ Years of Excellence
          </Badge>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-6">
            About ComfortCare HVAC
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Your trusted local HVAC partner, dedicated to keeping your home comfortable while providing 
            exceptional service and energy-efficient solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Founded in 2009, ComfortCare HVAC Services began with a simple mission: to provide honest, 
                reliable heating and cooling services to our community. What started as a small family business 
                has grown into the area's most trusted HVAC company.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                We believe that every home deserves comfort, efficiency, and peace of mind. That's why we've 
                built our reputation on quality workmanship, transparent pricing, and exceptional customer service. 
                Our team treats every home like it's our own.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
                  <div className="text-secondary-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-secondary-600">Satisfaction Rate</div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-700">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
                alt="ComfortCare Team"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-accent" />
                  <div>
                    <div className="font-bold text-primary">24/7</div>
                    <div className="text-sm text-secondary-600">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We're guided by core values that ensure every customer receives the highest quality service and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Integrity</h3>
                <p className="text-secondary-600">
                  We believe in honest communication, transparent pricing, and doing what's right for our customers, 
                  not what's profitable for us.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Excellence</h3>
                <p className="text-secondary-600">
                  We're committed to the highest standards of workmanship and continuous improvement to deliver 
                  exceptional results every time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Community</h3>
                <p className="text-secondary-600">
                  We're your neighbors, and we care about our community. We support local charities and 
                  give back whenever possible.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="font-heading font-semibold text-2xl text-primary mb-8 text-center">Our Journey</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1 p-4 bg-secondary-50 rounded-lg">
                    <p className="text-secondary-700 font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing you with the best HVAC service possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{member.title}</p>
                  <p className="text-secondary-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.certifications.map((cert, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Certifications & Affiliations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We maintain the highest industry standards through ongoing training and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-secondary-600">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See examples of our quality workmanship and commitment to customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-3">{project.description}</p>
                  <p className="text-sm text-accent font-medium">{project.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Experience the ComfortCare Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust ComfortCare for their heating and cooling needs. 
            Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-600">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

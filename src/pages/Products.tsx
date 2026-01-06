
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { 
  CheckCircle,
  Star,
  Zap,
  Shield,
  Thermometer,
  Wind,
  Cpu,
  Droplets,
  ArrowRight
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "High-Efficiency Air Conditioners",
      description: "Energy-efficient cooling systems that save money while keeping you comfortable.",
      features: ["SEER 16-22 Rating", "ENERGY STAR Certified", "10-Year Warranty", "Variable Speed"],
      icon: Wind,
      starting_price: "$2,499"
    },
    {
      title: "Smart Heat Pumps",
      description: "Versatile systems that provide both heating and cooling with smart technology integration.",
      features: ["WiFi Enabled", "Dual Fuel Option", "Ultra-Quiet Operation", "Advanced Controls"],
      icon: Thermometer,
      starting_price: "$3,299"
    },
    {
      title: "Gas Furnaces",
      description: "Reliable and efficient heating solutions for maximum comfort during cold months.",
      features: ["90%+ AFUE Rating", "Modulating Gas Valve", "Lifetime Heat Exchanger", "Quiet Operation"],
      icon: Zap,
      starting_price: "$1,899"
    },
    {
      title: "Smart Thermostats",
      description: "Intelligent temperature control that learns your schedule and saves energy automatically.",
      features: ["Learning Technology", "Remote Control", "Energy Reports", "Voice Control"],
      icon: Cpu,
      starting_price: "$199"
    },
    {
      title: "Air Purification Systems",
      description: "Advanced filtration technology to improve indoor air quality and health.",
      features: ["HEPA Filtration", "UV Light Technology", "Whole-Home Coverage", "Low Maintenance"],
      icon: Wind,
      starting_price: "$799"
    },
    {
      title: "Ductless Mini-Splits",
      description: "Flexible zoned cooling and heating solutions perfect for additions or renovations.",
      features: ["Zone Control", "Easy Installation", "Whisper Quiet", "Energy Efficient"],
      icon: Droplets,
      starting_price: "$1,599"
    }
  ];

  const accessories = [
    {
      title: "High-Performance Air Filters",
      description: "Premium filters that capture allergens, dust, and pollutants for cleaner air.",
      icon: Shield,
      features: ["MERV 8-16 Options", "Allergen Reduction", "Extended Life", "Easy Installation"]
    },
    {
      title: "Programmable Thermostats",
      description: "Basic programmable controls for energy savings and comfort scheduling.",
      icon: Thermometer,
      features: ["7-Day Programming", "Energy Saving", "Large Display", "Battery Backup"]
    },
    {
      title: "Humidifiers & Dehumidifiers",
      description: "Whole-home humidity control for optimal comfort and health.",
      icon: Droplets,
      features: ["Automatic Control", "Whole-Home Coverage", "Low Maintenance", "Health Benefits"]
    },
    {
      title: "Smart Home Integration",
      description: "Connect your HVAC system to popular smart home platforms.",
      icon: Cpu,
      features: ["Alexa Compatible", "Google Assistant", "Apple HomeKit", "Remote Monitoring"]
    }
  ];

  const comparisonData = [
    {
      feature: "Energy Efficiency",
      basic: "SEER 14-16",
      premium: "SEER 18-20",
      luxury: "SEER 20-22"
    },
    {
      feature: "Warranty Coverage",
      basic: "5-Year Parts",
      premium: "10-Year Parts",
      luxury: "12-Year Parts + Labor"
    },
    {
      feature: "Noise Level",
      basic: "Standard",
      premium: "Quiet Operation",
      luxury: "Ultra-Quiet"
    },
    {
      feature: "Smart Features",
      basic: "Basic Controls",
      premium: "WiFi Enabled",
      luxury: "Full Smart Integration"
    },
    {
      feature: "Installation",
      basic: "Standard",
      premium: "Enhanced",
      luxury: "White Glove Service"
    },
    {
      feature: "Price Range",
      basic: "$1,500 - $3,000",
      premium: "$3,000 - $5,500",
      luxury: "$5,500 - $8,000+"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              HVAC Products & Accessories
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Premium heating and cooling equipment from trusted brands, professionally installed and backed by comprehensive warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link to="/contact">Get Product Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Our Product Lineup
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully selected range of energy-efficient HVAC equipment designed for long-lasting comfort and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group bg-background border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <product.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      From {product.starting_price}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button variant="outline" className="rounded-full border-border text-foreground hover:bg-muted">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Compare Our Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find the perfect HVAC system for your needs and budget with our easy comparison guide.
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-lg overflow-hidden border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="text-secondary-foreground font-semibold text-base py-6">Features</TableHead>
                  <TableHead className="text-secondary-foreground font-semibold text-base text-center py-6">Basic Series</TableHead>
                  <TableHead className="text-secondary-foreground font-semibold text-base text-center py-6">Premium Series</TableHead>
                  <TableHead className="text-secondary-foreground font-semibold text-base text-center py-6">Luxury Series</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium text-foreground py-5">{row.feature}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-5">{row.basic}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-5">{row.premium}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-5">{row.luxury}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Accessories & Add-ons
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance your HVAC system with smart accessories and air quality solutions for maximum comfort and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessories.map((accessory, index) => (
              <Card key={index} className="group bg-background border-border rounded-2xl text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <accessory.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    {accessory.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">{accessory.description}</p>
                  <ul className="space-y-2">
                    {accessory.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Financing Available
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Don't let upfront costs prevent you from upgrading to a more efficient HVAC system. 
                We offer flexible financing options to help you get the comfort you deserve.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>0% APR for qualified buyers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Low monthly payments available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Quick and easy approval process</span>
                </div>
              </div>
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link to="/contact">Apply for Financing</Link>
              </Button>
            </div>
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="font-serif text-2xl mb-6">Why Upgrade Now?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Save 20-40% on energy bills with high-efficiency equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Improve indoor air quality and comfort</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Increase your home's value and appeal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Enjoy smart home integration and convenience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

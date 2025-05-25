
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { 
  CheckCircle,
  Star,
  Award,
  Zap,
  Shield,
  Thermometer
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "High-Efficiency Air Conditioners",
      description: "Energy-efficient cooling systems that save money while keeping you comfortable.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      features: ["SEER 16-22 Rating", "ENERGY STAR Certified", "10-Year Warranty", "Variable Speed"],
      badge: "Most Efficient",
      starting_price: "$2,499"
    },
    {
      title: "Smart Heat Pumps",
      description: "Versatile systems that provide both heating and cooling with smart technology integration.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      features: ["WiFi Enabled", "Dual Fuel Option", "Ultra-Quiet Operation", "Advanced Controls"],
      badge: "Smart Home Ready",
      starting_price: "$3,299"
    },
    {
      title: "Gas Furnaces",
      description: "Reliable and efficient heating solutions for maximum comfort during cold months.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
      features: ["90%+ AFUE Rating", "Modulating Gas Valve", "Lifetime Heat Exchanger", "Quiet Operation"],
      badge: "Best Value",
      starting_price: "$1,899"
    },
    {
      title: "Smart Thermostats",
      description: "Intelligent temperature control that learns your schedule and saves energy automatically.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80",
      features: ["Learning Technology", "Remote Control", "Energy Reports", "Voice Control"],
      badge: "Top Rated",
      starting_price: "$199"
    },
    {
      title: "Air Purification Systems",
      description: "Advanced filtration technology to improve indoor air quality and health.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80",
      features: ["HEPA Filtration", "UV Light Technology", "Whole-Home Coverage", "Low Maintenance"],
      badge: "Health Focus",
      starting_price: "$799"
    },
    {
      title: "Ductless Mini-Splits",
      description: "Flexible zoned cooling and heating solutions perfect for additions or renovations.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      features: ["Zone Control", "Easy Installation", "Whisper Quiet", "Energy Efficient"],
      badge: "Flexible Solution",
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
      icon: Zap,
      features: ["Automatic Control", "Whole-Home Coverage", "Low Maintenance", "Health Benefits"]
    },
    {
      title: "Smart Home Integration",
      description: "Connect your HVAC system to popular smart home platforms.",
      icon: Award,
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
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-6">
            HVAC Products & Accessories
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Premium heating and cooling equipment from trusted brands, professionally installed and backed by comprehensive warranties.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent-600">
            <Link to="/contact">Get Product Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Our Product Lineup
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Choose from our carefully selected range of energy-efficient HVAC equipment designed for long-lasting comfort and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {product.badge}
                  </Badge>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="font-semibold text-primary">Starting at {product.starting_price}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{product.title}</CardTitle>
                  <p className="text-secondary-600">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-2">
                    <Button asChild className="flex-1 bg-primary hover:bg-primary-700">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Compare Our Systems
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Find the perfect HVAC system for your needs and budget with our easy comparison guide.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary text-white">
                  <TableHead className="text-white font-semibold">Features</TableHead>
                  <TableHead className="text-white font-semibold text-center">Basic Series</TableHead>
                  <TableHead className="text-white font-semibold text-center">Premium Series</TableHead>
                  <TableHead className="text-white font-semibold text-center">Luxury Series</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-secondary-50">
                    <TableCell className="font-semibold text-primary">{row.feature}</TableCell>
                    <TableCell className="text-center">{row.basic}</TableCell>
                    <TableCell className="text-center">{row.premium}</TableCell>
                    <TableCell className="text-center">{row.luxury}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-600">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Accessories & Add-ons
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Enhance your HVAC system with smart accessories and air quality solutions for maximum comfort and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessories.map((accessory, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-100 transition-colors">
                    <accessory.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                    {accessory.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">{accessory.description}</p>
                  <ul className="space-y-2 text-sm">
                    {accessory.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-accent" />
                        <span className="text-secondary-700">{feature}</span>
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
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Financing Available
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Don't let upfront costs prevent you from upgrading to a more efficient HVAC system. 
                We offer flexible financing options to help you get the comfort you deserve.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>0% APR for qualified buyers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Low monthly payments available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Quick and easy approval process</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600">
                <Link to="/contact">Apply for Financing</Link>
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-heading font-semibold text-2xl mb-4">Why Upgrade Now?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span>Save 20-40% on energy bills with high-efficiency equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span>Improve indoor air quality and comfort</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span>Increase your home's value and appeal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
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

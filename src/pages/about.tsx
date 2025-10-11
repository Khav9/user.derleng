import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe, 
  Award, 
  Heart, 
  Shield,
  ArrowRight,
  Phone,
  CheckCircle
} from "lucide-react";

export function AboutPage() {
  const stats = [
    { number: "10K+", label: "Happy Travelers", icon: Users },
    { number: "500+", label: "Tours Completed", icon: Globe },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Satisfaction Rate", icon: Heart }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe travel, dedicated to creating unforgettable experiences that connect you with authentic cultures."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety is our priority. We maintain the highest standards and work with verified local partners."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Our team consists of local experts who know Cambodia intimately and share hidden gems you won't find in guidebooks."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We're committed to responsible travel that supports local communities and preserves Cambodia's natural beauty."
    }
  ];

  const team = [
    {
      name: "Saroeun Khav",
      role: "Founder & CEO",
      image: "/khav.jpg",
      bio: "Born and raised in Phnom Penh, Khav has been sharing the beauty of Cambodia with travelers for over 15 years."
    },
    {
      name: "Choub Siem",
      role: "Head of Operations",
      image: "/siem.jpg",
      bio: "With extensive experience in hospitality, Siem ensures every detail of your journey is perfectly executed."
    },
    {
      name: "Payang Sanok",
      role: "Lead Tour Guide",
      image: "/nok.jpg",
      bio: "A certified Angkor expert, Sanok brings ancient Khmer history to life with captivating storytelling."
    },
    {
      name: "Socheath",
      role: "Customer Experience",
      image: "/cheath.jpeg",
      bio: "Dedicated to making your trip seamless, Socheath provides 24/7 support throughout your journey."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-500/5 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 px-4 py-2 text-sm">
              Our Story
            </Badge>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Discover Our <span className="text-blue-500">Journey</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              For over 15 years, Derleng Travel has been crafting authentic Cambodian experiences 
              that connect travelers with the heart and soul of this beautiful kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://cdn.shopify.com/s/files/1/1752/1735/files/A_Team_at_Work.jpg?v=1664590186"
                  alt="Our team in Cambodia"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <Badge variant="outline" className="border-blue-500 text-blue-500 px-4 py-2">
                Our Beginning
              </Badge>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900">
                From Local Passion to Global Recognition
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2009 by Sophal Chen, Derleng Travel began as a small family-run operation 
                in Phnom Penh. What started as a passion for sharing Cambodia's rich culture and 
                breathtaking landscapes with friends has grown into a trusted travel agency serving 
                thousands of international visitors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be one of Cambodia's most recommended tour operators, 
                known for our authentic experiences, local expertise, and unwavering commitment 
                to sustainable tourism.
              </p>

              <div className="space-y-3">
                {[
                  "100% Cambodian-owned and operated",
                  "Award-winning tour experiences",
                  "24/7 customer support",
                  "Sustainable tourism practices",
                  "Local community support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/contact">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 rounded-xl">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              These principles guide everything we do, ensuring exceptional experiences 
              for our travelers and positive impact for our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              Our passionate team of local experts is dedicated to creating unforgettable 
              experiences and sharing the true spirit of Cambodia with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Cambodia?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Let us create your perfect Cambodian adventure. Contact us today to start 
              planning your unforgettable journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tours">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-6 rounded-xl"
                >
                  Explore Tours
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-blue-500 hover:bg-white hover:text-blue-500 px-8 py-6 rounded-xl"
                >
                  Contact Us
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Star,
  Filter,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Snowflake,
  Waves,
  Eye,
  Heart
} from "lucide-react";

// Mock data for hotels
const hotels = [
  {
    id: 1,
    name: "Raffles Grand Hotel d'Angkor",
    location: "Siem Reap",
    price: 320,
    rating: 4.8,
    reviews: 1247,
    image: "https://m.ahstatic.com/is/image/accorhotels/aja_p_6405-30?qlt=82&wid=575&ts=1713801628227&dpr=on,2.625",
    amenities: ["wifi", "pool", "spa", "restaurant", "gym"],
    featured: true,
    discount: 15
  },
  {
    id: 2,
    name: "Sofitel Phnom Penh Phokeethra",
    location: "Phnom Penh",
    price: 180,
    rating: 4.6,
    reviews: 892,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/711841086.jpg?k=c818a27ddcc1105a15d119c220c30c83d98ba881bbb8d2989ae3f6ea04859652&o=&hp=1",
    amenities: ["wifi", "pool", "restaurant", "gym", "ac"],
    featured: false,
    discount: 10
  },
  {
    id: 3,
    name: "Sokha Beach Resort",
    location: "Sihanoukville",
    price: 150,
    rating: 4.4,
    reviews: 567,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/96085585.jpg?k=1542fee04fc563a20d8d3b1f4e267f2d4569a41f0d4ee4343219b4f98481ab26&o=&hp=1",
    amenities: ["wifi", "pool", "beach", "restaurant", "spa"],
    featured: true,
    discount: 20
  },
  {
    id: 4,
    name: "Belmond La Résidence d'Angkor",
    location: "Siem Reap",
    price: 280,
    rating: 4.9,
    reviews: 934,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/13/a9/86/3b/belmond-la-residence.jpg",
    amenities: ["wifi", "pool", "spa", "restaurant", "ac"],
    featured: false,
    discount: 0
  },
  {
    id: 5,
    name: "Plantation Urban Resort & Spa",
    location: "Phnom Penh",
    price: 120,
    rating: 4.3,
    reviews: 423,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/90/02/90/the-plantation.jpg?w=900&h=500&s=1",
    amenities: ["wifi", "pool", "spa", "restaurant", "gym"],
    featured: false,
    discount: 5
  },
  {
    id: 6,
    name: "Knai Bang Chatt Hotel",
    location: "Kep",
    price: 200,
    rating: 4.7,
    reviews: 312,
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/214868212.jpg?k=d1cbfc024ac25b2f68d4cd8aff13edd3b10b1e0d04e0e87e640df3f10ab6f4f3&o=",
    amenities: ["wifi", "pool", "beach", "restaurant", "ac"],
    featured: true,
    discount: 25
  }
];

const locations = ["All", "Siem Reap", "Phnom Penh", "Sihanoukville", "Kep"];
const priceRanges = [
  { label: "Any", min: 0, max: 1000 },
  { label: "$0 - $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "$300+", min: 300, max: 1000 }
];

const amenities = [
  { icon: Wifi, label: "WiFi", value: "wifi" },
  { icon: Waves, label: "Pool", value: "pool" },
  { icon: Utensils, label: "Restaurant", value: "restaurant" },
  { icon: Dumbbell, label: "Gym", value: "gym" },
  { icon: Snowflake, label: "AC", value: "ac" },
  { icon: Car, label: "Parking", value: "parking" }
];

export function Hotel() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredHotels = hotels
    .filter(hotel => {
      // Location filter
      if (selectedLocation !== "All" && hotel.location !== selectedLocation) {
        return false;
      }
      // Price range filter
      if (hotel.price < selectedPriceRange.min || hotel.price > selectedPriceRange.max) {
        return false;
      }
      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every(amenity =>
          hotel.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://m.ahstatic.com/is/image/accorhotels/aja_p_6405-30?qlt=82&wid=575&ts=1713801628227&dpr=on,2.625"
            alt="Hotel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
        </div>
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-white/10 text-white px-4 py-2 text-sm backdrop-blur-sm">
              Luxury Stays
            </Badge>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Find Your Perfect <span className="text-primary">Stay</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Discover handpicked luxury hotels and resorts across Cambodia.
              Experience world-class amenities and authentic Cambodian hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Quick Search */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search hotels by name, location, or amenities..."
                  className="pl-12 pr-4 py-3 rounded-xl border-gray-300 focus:border-primary"
                />
              </div>
            </div>

            {/* Filter Toggle for Mobile */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Expanded Filters */}
          <div className={`mt-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Location
                </label>
                <div className="flex flex-wrap gap-2">
                  {locations.map(location => (
                    <Button
                      key={location}
                      variant={selectedLocation === location ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLocation(location)}
                      className={`rounded-lg ${selectedLocation === location
                        ? 'bg-primary text-white'
                        : 'border-gray-300'
                        }`}
                    >
                      {location}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(range => (
                    <Button
                      key={range.label}
                      variant={selectedPriceRange.label === range.label ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPriceRange(range)}
                      className={`rounded-lg ${selectedPriceRange.label === range.label
                        ? 'bg-primary text-white'
                        : 'border-gray-300'
                        }`}
                    >
                      {range.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Amenities
                </label>
                <div className="flex flex-wrap gap-2">
                  {amenities.map(({ icon: Icon, label, value }) => (
                    <Button
                      key={value}
                      variant={selectedAmenities.includes(value) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleAmenity(value)}
                      className={`rounded-lg flex items-center gap-2 ${selectedAmenities.includes(value)
                        ? 'bg-primary text-white'
                        : 'border-gray-300'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredHotels.length}</span> of{" "}
              <span className="font-semibold">{hotels.length}</span> hotels
            </p>
          </div>

          {/* Hotels Grid */}
          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No hotels found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to find more options.
              </p>
              <Button
                onClick={() => {
                  setSelectedLocation("All");
                  setSelectedPriceRange(priceRanges[0]);
                  setSelectedAmenities([]);
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Hotel Card Component
function HotelCard({ hotel }: { hotel: typeof hotels[0] }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {hotel.featured && (
            <Badge className="bg-blue-500 hover:bg-blue-600 border-0 text-white">
              Featured
            </Badge>
          )}
          {hotel.discount > 0 && (
            <Badge className="bg-green-500 hover:bg-green-600 border-0 text-white">
              -{hotel.discount}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="bg-white/90 backdrop-blur-sm hover:bg-white w-10 h-10 rounded-full"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
            />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="bg-white/90 backdrop-blur-sm hover:bg-white w-10 h-10 rounded-full"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-baseline gap-1 text-white">
            {hotel.discount > 0 && (
              <span className="text-sm line-through opacity-80">
                ${hotel.price}
              </span>
            )}
            <span className="text-2xl font-bold">
              ${hotel.discount > 0 ? Math.round(hotel.price * (1 - hotel.discount / 100)) : hotel.price}
            </span>
            <span className="text-sm opacity-80">/night</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
            {hotel.name}
          </h3>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{hotel.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">{hotel.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({hotel.reviews} reviews)</span>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-3 mb-6">
          {hotel.amenities.slice(0, 4).map(amenity => {
            const amenityConfig = amenities.find(a => a.value === amenity);
            if (!amenityConfig) return null;
            const Icon = amenityConfig.icon;
            return (
              <div key={amenity} className="flex items-center gap-1 text-gray-500">
                <Icon className="w-4 h-4" />
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Link to={`/hotels/${hotel.id}`} className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl">
              View Details
            </Button>
          </Link>
          <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary/10">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
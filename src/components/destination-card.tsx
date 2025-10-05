import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DestinationCardProps {
  image: string
  title: string
  total: number
  link?: string
  country?: string
  featured?: boolean
}

export function DestinationCard({ 
  image, 
  title, 
  total, 
  link = "#", 
  country = "Cambodia",
  featured = false 
}: DestinationCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl cursor-pointer">
      <div className="relative w-full h-80 overflow-hidden">
        {/* Background Image */}
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Featured Badge */}
        {featured && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 text-white shadow-lg z-10">
            Featured
          </Badge>
        )}

        {/* Tours Badge - Modern Design */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-4 py-1 z-10">
          <p className="text-sm font-bold flex items-center space-x-1 text-gray-900">
            <span className="text-lg">{total.toLocaleString()}</span>
            <span className="text-xs text-gray-600 font-medium">Tours</span>
          </p>
        </div>

        {/* Country Badge */}
        <div className="absolute top-16 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5 z-10">
          <p className="text-xs font-medium text-white flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {country}
          </p>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          {/* Main Title */}
          <h3 className="text-2xl font-bold text-white mb-3 transition-transform duration-500 group-hover:translate-y-0">
            {title}
          </h3>

          {/* Bottom Content */}
          <div className="flex items-end justify-between">
            {/* Description */}
            <div className="flex-1">
              <p className="text-white/90 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                Discover {total}+ amazing tours and experiences in this beautiful destination
              </p>
              
              {/* CTA Button */}
              <Link 
                to={link} 
                className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200"
              >
                Explore Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Quick Info Bar - Shows on mobile always */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 md:hidden">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-white/80 text-sm">{country}</p>
          <p className="text-white font-semibold text-sm">{total}+ Tours</p>
        </div>
      </div>
    </Card>
  )
}
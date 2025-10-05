import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

interface DestinationCardProps {
  image: string
  title: string
  total: number
  link?: string
}

export function DestinationCard({ image, title, total, link = "#" }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden group relative transition-shadow rounded-none">
      <div className="relative w-full h-64 overflow-hidden">
        {/* Background Image */}
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Tours badge */}
        <div className="absolute top-4 right-4 bg-[#f97251] px-3 py-1.5 rounded-md shadow-lg">
          <p className="text-sm font-bold flex items-center space-x-1 text-white">
            <span>{total.toLocaleString()}</span>
            <span className="text-xs">Tours</span>
          </p>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-100 flex items-center justify-center">
          {/* Title + Button container */}
          <div className="flex flex-col items-center text-center transition-all duration-700 ease-in-out transform translate-y-20 group-hover:translate-y-0">
            <p className="text-white text-2xl font-bold mb-3">{title}</p>

            {/* Button fades in on hover */}
            <Link to={link} className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white hover:text-[#f85c34] hover:underline rounded-full px-6">
                View More
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

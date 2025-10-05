import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

interface TourCardProps {
  image: string
  title: string
  price: number
  duration: string
  locations: string[]
}

export function TourCard({ image, title, price, duration, locations }: TourCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow group py-0 h-120">
      {/* Fix height shift on hover */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-md shadow-lg">
          <p className="text-sm font-bold">
            <span className="text-xs text-muted-foreground">From </span>
            <span className="text-primary">${price.toLocaleString()}</span>
          </p>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{duration}</span>
          </div>

          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{locations.join(" - ")}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link to="/tours" className="w-full">
          <Button className="w-full bg-[#f97251] hover:bg-[#f97251]/90 text-primary-foreground cursor-pointer">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

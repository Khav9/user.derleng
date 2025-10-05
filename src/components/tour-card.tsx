import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

interface TourCardProps {
  image: string
  title: string
  price: number
  duration: string
  locations: string[]
}

export function TourCard({ image, title, price, duration, locations }: TourCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-lg">
          <p className="text-sm font-bold">
            <span className="text-xs text-muted-foreground">From </span>
            <span className="text-primary">${price.toLocaleString()}</span>
          </p>
        </div>
      </div>

      <CardContent className="p-5 space-y-4">
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
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Details</Button>
      </CardFooter>
    </Card>
  )
}

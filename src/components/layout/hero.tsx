import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/angkor-wat-temple-at-sunset-cambodia.jpg" alt="Angkor Wat Temple" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <p className="text-white/90 text-sm md:text-base font-medium tracking-wide">Your Gateway to Cambodia</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
              Cambodia Travel
            </h1>
            <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-pretty">
              Discover the ancient temples, vibrant culture, and breathtaking landscapes of Southeast Asia's hidden gem
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Search className="w-4 h-4 mr-2" />
              Explore Tours
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

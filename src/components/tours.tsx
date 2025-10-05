import { TourCard } from "@/components/tour-card"

export function Tours() {
  const tours = [
    {
      image: "/angkor-wat-reflection-pond.jpg",
      title: "Best of Laos and Cambodia Tour Package",
      price: 1448,
      duration: "12 Days 11 Nights",
      locations: ["Luang Prabang", "Siem Reap", "Phnom Penh", "Sihanoukville"],
    },
    {
      image: "/mekong-river-cruise-cambodia.jpg",
      title: "Luxury Tour From Siem Reap To Vietnam",
      price: 2694,
      duration: "11 Days 10 Nights",
      locations: ["Siem Reap", "Vientiane", "Hanoi", "Halong Bay"],
    },
    {
      image: "/angkor-thom-temple-cambodia.jpg",
      title: "Absolute Cambodia",
      price: 1673,
      duration: "10 Days 9 Nights",
      locations: ["Phnom Penh", "Kampong Thom", "Siem Reap", "Battambang"],
    },
    {
      image: "/cambodia-countryside-road.jpg",
      title: "Cambodia and Vietnam Adventure",
      price: 1368,
      duration: "11 Days 10 Nights",
      locations: ["Siem Reap", "Battambang", "Phnom Penh", "Ho Chi Minh"],
    },
    {
      image: "/angkor-wat-temple-tourists.jpg",
      title: "Biking Through Angkor – Cycling in Angkor Wat",
      price: 486,
      duration: "5 Days 4 Nights",
      locations: ["Siem Reap", "Angkor Wat", "Angkor Thom", "Ta Prohm"],
    },
    {
      image: "/cambodia-family-cycling.jpg",
      title: "Grand Cambodia",
      price: 1296,
      duration: "12 Days 11 Nights",
      locations: ["Phnom Penh", "Kampong Cham", "Kratie", "Siem Reap"],
    },
    {
      image: "/cambodia-mountain-landscape.jpg",
      title: "Cambodia And North Vietnam Tour Package",
      price: 1397,
      duration: "11 Days 10 Nights",
      locations: ["Phnom Penh", "Siem Reap", "Hanoi", "Halong Bay"],
    },
    {
      image: "/angkor-wat-ancient-ruins.jpg",
      title: "Luxury Heritage Journey",
      price: 3490,
      duration: "11 Days 10 Nights",
      locations: ["Siem Reap", "Phnom Penh", "Ho Chi Minh", "Hoi An"],
    },
    {
      image: "/cambodia-rice-fields.jpg",
      title: "Siem Reap Golf Tour",
      price: 186,
      duration: "1 Day",
      locations: ["Siem Reap"],
    },
  ]

  return (
    <section id="tours" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Cambodia Tours 2025
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Cambodia is a region of the world that is rich in culture, history, and natural beauty. From the bustling
            streets of Phnom Penh to the serene temples of Angkor Wat, there is something for everyone to explore and
            enjoy. Whether you are looking for an intimate experience or a grand adventure, our Cambodia tours offer!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  )
}

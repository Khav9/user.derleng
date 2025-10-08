import { DestinationCard } from "./destination-card";

export function Destinations() {
  const tours = [
    {
      image: "/destinations/phnom-penh.jpg",
      title: "Phnom Penh",
      total: 15,
    },
    {
      image: "/destinations/siem-reap.jpg",
      title: "Siem Reap",
      total: 20,
    },
    {
      image: "/destinations/battambang.jpg",
      title: "Battambang",
      total: 9,
    },
    {
      image: "/destinations/kampot.jpg",
      title: "Kampot",
      total: 6,
    },
    {
      image: "/destinations/sihanoukville.jpg",
      title: "Sihanoukville",
      total: 3,
    },
    {
      image: "/destinations/mondulkiri.jpg",
      title: "Mondulkiri",
      total: 10,
    }
  ];

  return (
    <section id="tours" className="p-28 md:py-16 bg-background">
        <div className="text-center space-y-4 mb-12 md:mb-16 container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Top Destinations
          </h2>
          <p className="text-muted-foreground text-pretty">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem natus perspiciatis alias numquam, repudiandae provident iste quos soluta molestias, maiores repellendus excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, enim illum!
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
    </section>
  );
}

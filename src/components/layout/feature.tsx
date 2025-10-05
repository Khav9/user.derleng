import { Shield, DollarSign, Headphones } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Best Price Guaranteed",
      description: "We offer the most competitive prices for all our tours",
    },
    {
      icon: DollarSign,
      title: "Money Back Guarantee",
      description: "100% refund if you're not satisfied with our service",
    },
    {
      icon: Headphones,
      title: "Customer by Choice Experts",
      description: "24/7 support from our experienced travel consultants",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

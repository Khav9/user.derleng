import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/aboutus.jpg"
                alt="Bayon Temple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                About Us
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our 4 offices are staffed with certified, trained, local travel
                consultants and expatriates who share a passion for Cambodia and
                travel. This unique combination allows us to recommend only the
                best places as your tailor-made{" "}
                <span className="text-primary font-medium">Cambodia tour</span>{" "}
                and provide you with personalized assistance every step of the
                way.
              </p>
              <p>
                At Derleng our mission is to provide an authentic travel
                experience that intimately connects you to the cultures of
                Southeast Asia. From the big picture to the tiniest detail, our
                expert, English-speaking guides show the way and share their
                knowledge, ensuring you'll be a guest on a one-of-a-kind
                vacation you will never forget.
              </p>
              <p className="font-medium text-foreground">
                Derleng:{" "}
                <span className="text-primary">
                  Best tour company for Cambodia, Cambodia, Laos, Myanmar, and
                  Thailand!
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Certified local travel consultants with deep cultural
                  knowledge
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Personalized assistance throughout your entire journey
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Authentic experiences connecting you to local cultures
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact">
                <Button variant="outline" className="cursor-pointer">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

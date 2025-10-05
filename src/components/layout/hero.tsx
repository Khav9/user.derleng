import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next";

export function Hero() {
  const [showSearch, setShowSearch] = useState(false)
    const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/angkor-wat-hero.jpg"
          alt="Angkor Wat Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <p className="text-white/90 text-sm md:text-base font-medium tracking-wide">
              {t("hero.your-gateway-to-cambodia")}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
              Derleng Travel Agency
            </h1>
            <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-pretty">
              {t("hero.desc")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <X className="w-4 h-4 mr-2" /> : <Search className="w-4 h-4 mr-2" />}
              {showSearch ? t("hero.close-search") : t("hero.search-tours")}
            </Button>

            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto cursor-pointer"
              >
                {t("hero.view-more-tours")}
              </Button>
            </Link>
          </div>

          {/* Animated Search Input */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center mt-6 gap-3"
              >
                <div className="w-full max-w-md relative">
                  <Input
                    type="text"
                    placeholder={t("hero.search-tours")}
                    className="bg-white/90 border-white/40 text-gray-800 placeholder-gray-500 rounded-xl"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
                <Button className="cursor-pointer bg-[#f97251]/80 hover:bg-[#f97251]">{t("hero.search")}</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

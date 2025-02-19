import { MARKETING_DATA } from "@/data/marketing"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const CTA = () => {
  const cta = MARKETING_DATA.ctaSection
  return (
    <section className="section bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="font-heading mb-6 text-3xl font-bold md:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
          {cta.description}
        </p>
        <Button size="lg" variant="secondary">
          <a href={cta.button.href} className="flex items-center gap-x-1">
            {cta.button.text}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}

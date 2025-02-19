import { MARKETING_DATA } from "@/data/marketing"
import { BadgeLabel } from "@/components/ui/badge-label"

export const Expertise = () => {
  const expertise = MARKETING_DATA.expertiseSection

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20">
          <BadgeLabel label={expertise.label} />
          <h2 className="font-heading my-3 text-2xl font-bold sm:text-3xl md:my-4 md:text-4xl">
            {expertise.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg md:mt-6">
            {expertise.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {expertise.areas.map((area, index) => (
            <li key={index} className="space-y-2 sm:space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-primary/10 p-2 text-primary sm:h-14 sm:w-14 sm:p-3 md:h-16 md:w-16">
                <area.icon className="h-full w-full" />
              </div>
              <h4 className="text-base font-semibold text-gray-800 sm:text-lg">
                {area.title}
              </h4>
              <p className="max-w-sm text-sm text-gray-600 sm:text-base">
                {area.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

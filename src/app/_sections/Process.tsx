import { MARKETING_DATA } from "@/data/marketing"
import { BadgeLabel } from "@/components/ui/badge-label"

export const Process = () => {
  const process = MARKETING_DATA.processSection

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-24">
          <BadgeLabel label="Our Process" />
          <h2 className="font-heading my-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            {process.title}
          </h2>

          <p className="max-w-3xl text-lg text-gray-600 sm:text-xl">
            {process.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {process.steps.map((step, index) => (
            <div key={index} className="space-y-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <step.icon className="h-6 w-6 text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="text-lg font-bold sm:text-xl">{step.title}</h3>
              <p className="max-w-sm text-sm text-gray-600 sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

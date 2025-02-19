import { MARKETING_DATA } from "@/data/marketing"
import React from "react"
import { BadgeLabel } from "@/components/ui/badge-label"

export function Stats() {
  const stats = MARKETING_DATA.statsSection
  return (
    <section className="section" id="stats">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BadgeLabel label={stats.label} />
        <h2
          id="features-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {stats.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg">
          {stats.description}
        </p>
        <dl className="mt-8 grid grid-cols-1 gap-y-6 dark:border-gray-800 sm:mt-10 sm:grid-cols-2 sm:gap-y-8 lg:mt-12 lg:grid-cols-3 lg:border-y lg:border-gray-200 lg:py-14">
          {stats.stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4 border-l-2 border-blue-100 pl-4 sm:pl-6 sm:text-left md:flex-col lg:border-l lg:border-gray-200 lg:text-center lg:first:border-none">
                <dd className="inline-block bg-gradient-to-t from-blue-900 to-blue-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                  {stat.label}
                </dt>
              </div>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  )
}

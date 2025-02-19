"use client"

import { MARKETING_DATA } from "@/data/marketing"
import { LucideIcon } from "lucide-react"
import { HTMLMotionProps, motion, useSpring, useTransform } from "motion/react"
import Balancer from "react-wrap-balancer"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { BadgeLabel } from "@/components/ui/badge-label"

interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: {
    title: ReactNode
    category: string
    icon: LucideIcon
    description: string
  }
  index: number
  zIndexOffset?: number
}

function FeatureCard({
  feature,
  className,
  zIndexOffset = 0,
  index,
  ...props
}: FeatureCardProps) {
  const springValue = useSpring(0, {
    bounce: 0,
  })
  const zIndex = useTransform(
    springValue,
    (value) => +Math.floor(value * 10) + 10 + zIndexOffset
  )
  const scale = useTransform(springValue, [0, 1], [1, 1.1])

  const Icon = feature?.icon || null
  const gradients = [
    "from-blue-600 to-cyan-500",
    "from-violet-600 to-fuchsia-500",
    "from-emerald-500 to-teal-400",
  ]

  const content = (
    <>
      <div
        className={cn(
          "group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br transition-all duration-500",
          gradients[index]
        )}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id={`grid-${feature?.category}`}
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 8h8v-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect
              width="100%"
              height="100%"
              fill={`url(#grid-${feature?.category})`}
            />
          </svg>
        </div>

        {/* Content container with glass effect */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-6">
          {/* Icon container with fancy hover effect */}
          <div className="transform transition-all duration-500 group-hover:translate-y-1 group-hover:scale-110">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:shadow-white/20">
              {Icon && <Icon className="h-6 w-6 text-white" />}
            </div>
          </div>

          {/* Bottom content with glass effect */}
          <div className="transform space-y-3 transition-all duration-500 group-hover:translate-y-[-2px]">
            <div className="space-y-1">
              <p className="text-sm font-medium text-white/70">
                {feature?.category}
              </p>
              <h3 className="text-xl font-bold text-white">{feature?.title}</h3>
              <p className="text-sm text-white/80">{feature?.description}</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:bg-white/20" />
          <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:bg-white/10" />
        </div>
      </div>
    </>
  )

  const containerClassName = cn(
    "relative flex h-80 w-64 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl",
    className
  )

  return (
    <>
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        className={cn(containerClassName, "hidden sm:flex")}
        {...props}
      >
        {content}
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        className={cn(containerClassName, "flex sm:hidden")}
      >
        {content}
      </motion.div>
    </>
  )
}

export function Features() {
  const cardWidth = 64 * 4
  const angle = 6
  const yOffset = 30
  const features = MARKETING_DATA.featuresSection

  return (
    <section className="section" id="features">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.header
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="col-span-1 flex flex-col gap-3 lg:max-w-xl"
          >
            <BadgeLabel label={features.label} />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {features.title}
            </h2>
            <Balancer className="text-base text-gray-600 sm:text-lg">
              {features.description}
            </Balancer>
          </motion.header>

          <div className="relative col-span-1 mt-8 flex w-full flex-col flex-wrap items-center justify-center gap-6 px-4 py-6 sm:flex-row sm:gap-8 lg:col-span-2 lg:mt-20 lg:gap-0 lg:py-12">
            {features.features.map((feature, index) => (
              <FeatureCard
                index={index}
                key={feature.title.toString()}
                feature={feature}
                initial={{
                  x: index === 0 ? cardWidth : index === 2 ? -cardWidth : 0,
                  y: yOffset,
                  opacity: 0,
                  rotate: 0,
                  scale: 0.9,
                }}
                animate={{
                  x: index === 0 ? yOffset : index === 2 ? -yOffset : 0,
                  y: index === 1 ? 0 : 10,
                  opacity: 1,
                  rotate: index === 0 ? -angle : index === 2 ? angle : 0,
                  scale: index === 1 ? 1 : 0.95,
                  transition: {
                    type: "spring",
                    delay: index * 0.2 + 0.4,
                  },
                }}
                zIndexOffset={index === 1 ? 1 : 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { MARKETING_DATA } from "@/data/marketing"
import { motion } from "motion/react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import Projection from "../../../public/projection.webp"

export const Hero = () => {
  const { badge, heading, description } = MARKETING_DATA.heroSection

  return (
    <section className="section">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#f0f7ff_0%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      </motion.div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
          {/* Left Column: Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 max-w-xl md:order-1 md:px-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center space-x-2 sm:mb-6"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:px-4 sm:py-1.5 sm:text-sm">
                {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-gradient mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl"
            >
              {heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg md:mb-10"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                className="box-border inline-block h-10 transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-full border-b-4 border-solid border-transparent bg-primary px-3 py-2 text-center text-sm font-bold uppercase leading-5 tracking-wider text-white shadow-2xl outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto sm:h-11 sm:px-4 sm:py-3"
                role="button"
              >
                <a href="#reports">
                  {MARKETING_DATA.heroSection.button.text} &rarr;
                </a>
                <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-primary/20" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Enhanced Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative order-1 w-full max-w-lg md:order-2 md:max-w-none"
          >
            <div className="relative flex items-center justify-center px-4 md:px-0">
              {/* Animated background circles - Adjusted sizes for better scaling */}
              <motion.div
                className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-primary/5 blur-md sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-64 lg:w-64"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-md sm:h-36 sm:w-36 md:h-48 md:w-48 lg:h-56 lg:w-56"
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              <div className="relative w-full">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-white/50 blur-xl" />
                <Image
                  src={Projection}
                  alt="Projection Finance"
                  width={500}
                  height={500}
                  className="z-10 mx-auto h-auto w-[340px] rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:scale-[1.02] sm:w-[420px] md:w-[520px] lg:w-[600px]"
                />
              </div>

              {/* Enhanced decorative background */}
              <div
                className="absolute left-1/2 top-1/2 -z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(var(--primary-rgb), 0.12) 0%, rgba(var(--primary-rgb), 0.04) 100%)",
                  borderRadius: "64px",
                  transform: "rotate(-5deg)",
                  boxShadow: "inset 0 0 40px rgba(var(--primary-rgb), 0.06)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

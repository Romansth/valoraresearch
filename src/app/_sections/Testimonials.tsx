"use client"

import { MARKETING_DATA } from "@/data/marketing"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BadgeLabel } from "@/components/ui/badge-label"

export const Testimonials = () => {
  const testimonials = MARKETING_DATA.testimonialSection
  const [currentSlide, setCurrentSlide] = useState(0)

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.testimonials.length)
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + testimonials.testimonials.length) %
        testimonials.testimonials.length
    )
  }

  return (
    <section id="testimonials" className="section bg-secondary/50">
      <div className="container mx-auto">
        <div className="w-full p-4">
          <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl bg-neutral-100 py-12 dark:bg-neutral-900">
            <BadgeLabel label={testimonials.label} />
            <h2 className="font-heading my-4 text-3xl font-bold md:text-4xl">
              {testimonials.title}
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-500">
              {testimonials.description}
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="group inline-flex size-10 items-center justify-center rounded-full bg-white transition-all hover:bg-blue-50 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                disabled={currentSlide === 0}
                onClick={handlePreviousSlide}
                type="button"
              >
                <ArrowLeft className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
              </button>
              <button
                className="group inline-flex size-10 items-center justify-center rounded-full bg-white transition-all hover:bg-blue-50 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                disabled={currentSlide === testimonials.testimonials.length - 1}
                onClick={handleNextSlide}
                type="button"
              >
                <ArrowRight className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
              </button>
            </div>
            <section className="mt-12 flex w-full gap-6 *:shrink-0">
              {testimonials.testimonials.map((testimonial, index) => {
                return (
                  <AnimatePresence key={testimonial.quote} mode="popLayout">
                    {index >= currentSlide && (
                      <motion.div
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                        initial={{ opacity: 0, x: 0, scale: 0.8 }}
                        layout={true}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="relative flex h-60 w-[24rem] flex-col justify-between rounded-lg border-primary/20 bg-white p-6 py-8 shadow-lg"
                      >
                        {/* Quote Icon */}
                        <div className="absolute right-6 top-6 font-serif text-6xl text-muted-foreground/20">
                          &quot;
                        </div>

                        {/* Content Container */}
                        <div className="flex h-full flex-col justify-between gap-4">
                          {/* Rating Stars */}
                          {testimonial.rating > 0 && (
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                  key={index}
                                  size={16}
                                  className={`${
                                    index < testimonial.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "fill-muted text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                          )}

                          {/* Testimonial Text */}
                          <p className="text-pretty text-base text-muted-foreground">
                            {testimonial.quote}
                          </p>

                          <div className="flex items-center justify-start gap-4">
                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
                                <Avatar>
                                  <AvatarFallback className="bg-primary/10 text-primary">
                                    {testimonial.author[0]}
                                  </AvatarFallback>
                                </Avatar>
                              </div>

                              <div className="flex flex-col">
                                <h3 className="font-semibold text-foreground">
                                  {testimonial.author}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.title}
                                  {` @ ${testimonial.company}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )
              })}
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

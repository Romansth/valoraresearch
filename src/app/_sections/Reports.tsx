"use client"

import { MARKETING_DATA } from "@/data/marketing"
import { Download } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import Link from "next/link"
import { BadgeLabel } from "@/components/ui/badge-label"
import { Button } from "@/components/ui/button"

const reports = MARKETING_DATA.reportsSection

export const Reports = () => {
  const [visibleReports, setVisibleReports] = useState<number>(3)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 180))
    setVisibleReports((prev) => Math.min(prev + 3, reports.length))
    setIsLoading(false)
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  // Loading skeleton component
  const ReportSkeleton = () => (
    <div className="h-full animate-pulse rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/[0.05] sm:p-6 md:p-8">
      <div className="space-y-3 sm:space-y-4">
        <div className="h-6 w-24 rounded-full bg-gray-200" />
        <div className="h-8 w-3/4 rounded bg-gray-200" />
        <div className="h-16 w-full rounded bg-gray-200" />
      </div>
      <div className="mt-6 h-12 w-full rounded bg-gray-200 sm:mt-8" />
    </div>
  )

  return (
    <section
      id="reports"
      className="section bg-gradient-to-b from-secondary/5 to-transparent"
    >
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="mb-12 sm:mb-16 md:mb-24">
          <BadgeLabel label="Research & Insights" />
          <h2 className="font-heading mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Latest Reports
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Download our comprehensive research reports and industry insights to
            stay ahead of the curve
          </p>
        </div>

        <motion.div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {reports.slice(0, visibleReports).map((report, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group"
            >
              <motion.div
                initial={false}
                whileHover={{ scale: 1.02 }}
                className="relative h-full overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />

                <div className="relative flex h-full flex-col p-4 sm:p-6 md:p-8">
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <motion.span
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                      className="inline-flex rounded-full bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary"
                    >
                      {report.date}
                    </motion.span>

                    <motion.h3
                      className="font-heading text-lg font-bold tracking-tight sm:text-xl"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {report.title}
                    </motion.h3>

                    <p className="text-sm text-muted-foreground sm:text-base">
                      {report.description}
                    </p>
                  </div>

                  <motion.div
                    className="mt-6 sm:mt-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    <Button
                      variant="default"
                      className="group relative w-full overflow-hidden bg-primary py-5 transition-all hover:bg-primary/90"
                      asChild
                    >
                      <Link
                        href={report.report.url}
                        download={report.report.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative flex items-center justify-center text-sm sm:text-base">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download Report</span>
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Loading skeletons */}
          {isLoading && (
            <>
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <ReportSkeleton key={`skeleton-${index}`} />
                ))}
            </>
          )}
        </motion.div>

        {/* Load More Button */}
        {visibleReports < reports.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <Button
              onClick={loadMore}
              variant="outline"
              className="min-w-[200px] border-2"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load More Reports"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

import React from "react"

export function BadgeLabel({ label }: { label: string }) {
  return (
    <>
      <span className="z-10 block w-fit rounded-lg border border-blue-200/20 bg-blue-50/50 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter sm:text-sm">
        <span className="bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-200 dark:to-blue-400">
          {label}
        </span>
      </span>
    </>
  )
}

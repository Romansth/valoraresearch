import { MARKETING_DATA } from "@/data/marketing"
import { BadgeLabel } from "@/components/ui/badge-label"

export const Faq = () => {
  const faqs = MARKETING_DATA.faqSection
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="grid w-full grid-cols-1 md:grid-cols-5">
          <div className="z-10 col-span-2 bg-neutral-50 p-12">
            <BadgeLabel label={"faq"} />
            <h2 className="my-4 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {faqs.title}
            </h2>
            <p className="mb-8 text-neutral-600 dark:text-neutral-300">
              {faqs.description}
            </p>
          </div>
          <div className="col-span-3 space-y-8 border-t border-neutral-400/15 bg-white px-20 py-12 dark:bg-neutral-950 md:border-l md:border-t-0">
            {faqs.faqs.map((faq) => (
              <div key={faq.question} className="pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
                    {faq.question}
                  </h3>
                </div>

                <p className="mt-2 leading-6 text-neutral-700 dark:text-neutral-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

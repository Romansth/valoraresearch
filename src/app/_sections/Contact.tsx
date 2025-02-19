import { MARKETING_DATA } from "@/data/marketing"

export const Contact = () => {
  const contact = MARKETING_DATA.contactSection
  return (
    <section className="section bg-secondary/50" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 lg:w-2/3">
          <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
            {contact.title}
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            {contact.description}
          </p>
        </div>

        {/* Contact Information */}
        <div className="w-full max-w-3xl rounded-xl bg-white p-4 shadow-lg md:p-8 lg:w-2/3">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {contact.contacts.map((contact, index) => (
              <div key={index} className="flex items-center">
                <contact.icon className="mr-4 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="mb-1 font-bold">{contact.title}</h4>
                  <a
                    href={
                      contact.title.includes("mail")
                        ? `mailto:${contact.value}`
                        : contact.title.includes("Phone  ")
                          ? `tel:${contact.value}`
                          : "#"
                    }
                    className="break-words text-muted-foreground hover:text-primary"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

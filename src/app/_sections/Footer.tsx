import { MARKETING_DATA } from "@/data/marketing"

export const Footer = () => {
  const footer = MARKETING_DATA.footerSection
  return (
    <footer className="bg-secondary px-4 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-heading mb-4 text-xl font-bold text-primary">
              {footer.company.name}
            </div>
            <p className="text-muted-foreground">
              {footer.company.description}
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Services</h4>
            <ul className="space-y-2">
              {footer.services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Company</h4>
            <ul className="space-y-2">
              {footer.companyLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                {footer.contact.address}
              </li>
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          © 2024 Valora Research. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

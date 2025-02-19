import { Contact } from "./_sections/Contact"
import { CTA } from "./_sections/CTA"
import { Expertise } from "./_sections/Expertise"
import { Faq } from "./_sections/Faq"
import { Features } from "./_sections/Features"
import { Footer } from "./_sections/Footer"
import { Hero } from "./_sections/Hero"
import { NavBar } from "./_sections/Navbar"
import { Process } from "./_sections/Process"
import { Reports } from "./_sections/Reports"
import { Stats } from "./_sections/Stats"
import { Team } from "./_sections/Team"

const Page = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Process />
      <Stats />
      <Expertise />
      <Reports />
      <Team />
      {/* <Testimonials /> */}
      <Faq />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}

export default Page

import Link from "next/link"
import { Button } from "@/components/ui/button"

export const NavBar = () => (
  <nav className="glass-card fixed left-0 right-0 top-0 z-50">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link href="/" className="font-heading text-xl font-bold text-primary">
        Valora Research
      </Link>
      <div className="hidden space-x-8 md:flex">
        <a href="#features" className="nav-link">
          Features
        </a>
        <a href="#reports" className="nav-link">
          Reports
        </a>
        <a href="#team" className="nav-link">
          Our Team
        </a>
      </div>
      <Button>
        <a href="#contact">Contact Us</a>
      </Button>
    </div>
  </nav>
)

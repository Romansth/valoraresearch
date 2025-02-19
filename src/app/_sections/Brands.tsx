import {
  Banknote,
  BitcoinIcon,
  CreditCard,
  DollarSign,
  GemIcon,
  PiggyBank,
  Wallet,
} from "lucide-react"

export function Brands() {
  return (
    <div className="relative flex w-full overflow-hidden py-8">
      <div className="animate-infinite-scroll flex flex-nowrap">
        <ul className="flex flex-none items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8">
          {[
            { icon: <Wallet />, href: "#" },
            { icon: <BitcoinIcon />, href: "#" },
            { icon: <CreditCard />, href: "#" },
            { icon: <DollarSign />, href: "#" },
            { icon: <PiggyBank />, href: "#" },
            { icon: <Banknote />, href: "#" },
            { icon: <GemIcon />, href: "#" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hidden place-content-center rounded-md border bg-primary p-2 text-2xl text-primary-foreground sm:grid"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-none items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8">
          {[
            { icon: <Wallet />, href: "#" },
            { icon: <BitcoinIcon />, href: "#" },
            { icon: <CreditCard />, href: "#" },
            { icon: <DollarSign />, href: "#" },
            { icon: <PiggyBank />, href: "#" },
            { icon: <Banknote />, href: "#" },
            { icon: <GemIcon />, href: "#" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hidden place-content-center rounded-md border bg-primary p-2 text-2xl text-primary-foreground sm:grid"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

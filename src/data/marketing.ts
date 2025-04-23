import {
  BarChart3,
  Briefcase,
  Building,
  FileText,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Search,
  TrendingUp,
} from "lucide-react"

import DavidWang from "../../public/images/team/david-wang.webp"

export const MARKETING_DATA = {
  heroSection: {
    badge: "Independent Research for Informed Decisions",
    heading: "Actionable Insights for Market Leaders",
    description:
      "At Valora Research, we specialize in delivering comprehensive insights and analyses of the equity markets. Our mission is to empower institutions, investors, and businesses with actionable data that drives confident decision-making.",
    button: {
      text: "View Our Latest Reports",
      href: "#reports",
    },
  },
  featuresSection: {
    label: "Features",
    title: "Everything you need",
    description:
      "Powerful features to help you manage, analyze, and optimize your business operations with confidence",
    features: [
      {
        icon: TrendingUp,
        title: "Valuations",
        description:
          "We provide accurate business valuations based on financial analysis, market trends, and industry data.",
        category: "Financial Analysis",
      },
      {
        icon: FileText,
        title: "Company-Sponsored Reports",
        description:
          "Custom research reports highlighting your business, financials, and market position for investors and stakeholders.",
        category: "Research",
      },
      {
        icon: LineChart,
        title: "Market Outlook Reports",
        description:
          "Insights into industry trends, economic conditions, and future market expectations to support business planning.",
        category: "Market Intelligence",
      },
    ],
  },
  processSection: {
    title: "Our Research Process",
    description:
      "Our comprehensive research process ensures accurate and actionable insights for our clients. The process includes data collection, analysis, and report creation.",
    steps: [
      {
        icon: Search,
        title: "Data Collection",
        description:
          "Comprehensive gathering of market data, financial statements, and industry insights.",
      },
      {
        icon: BarChart3,
        title: "Analysis",
        description:
          "In-depth analysis using proprietary methodologies and industry-standard frameworks.",
      },
      {
        icon: FileText,
        title: "Report Creation",
        description:
          "Expert compilation of findings into actionable, detailed research reports.",
      },
    ],
  },
  statsSection: {
    label: "Statistics",
    title: "Trusted by Leading Financial Institutions",
    description:
      "Empowering financial institutions with data-driven insights and comprehensive research reports. We delve deep into market dynamics, providing thorough reports.",
    stats: [
      { value: "10+", label: "Businesses Served" },
      { value: "50+", label: "Research Reports" },
      { value: "95%", label: "Client Satisfaction" },
    ],
  },
  expertiseSection: {
    label: "Our Expertise",
    title: "Areas of Expertise",
    description:
      "Our team specializes in the following key ability and markets. We provide expert analysis and insights to help you make informed decisions.",
    areas: [
      {
        icon: Building,
        title: "Corporate Finance",
        description:
          "Expert analysis of financial statements, capital structure, and corporate strategy.",
      },
      {
        icon: GraduationCap,
        title: "Market Research",
        description:
          "In-depth industry analysis and market trend identification.",
      },
      {
        icon: Briefcase,
        title: "Investment Analysis",
        description:
          "Comprehensive evaluation of investment opportunities and risks.",
      },
    ],
  },
  teamSection: {
    label: "Know Our Team",
    title: "Our Expert Team of Analysts",
    description:
      "This is the team of experts behind our research and analysis. With years of experience and a deep understanding of the markets, they provide valuable insights to our clients.",
    teams: [
      {
        name: "David Wang",
        role: "Founder, CFA",
        credentials: "david.wang@valoraresearch.com",
        education: "Columbia University",
        imageUrl: DavidWang,
        description: "Expert in business valuations and financial modeling.",
      },
      // {
      //   name: "Roman Shrestha",
      //   role: "Industry Research Lead",
      //   credentials: "MSc in Economics",
      //   imageUrl: RomanShrestha,
      //   description:
      //     "Specialized in sector-specific market research and analysis.",
      // },
    ],
  },
  testimonialSection: {
    label: "Reviews",
    title: "Testimonials",
    description:
      "Hear directly from our clients about their experiences and the impact of our solutions on their success.",
    testimonials: [
      {
        quote:
          "Valora's insights have been instrumental in our investment decisions.",
        author: "John Smith",
        title: "Investment Director",
        company: "Acme Corp",
        rating: 5,
      },
      {
        quote: "The depth of analysis in their reports is unmatched.",
        author: "Sarah Johnson",
        title: "Portfolio Manager",
        company: "Beta Inc.",
        rating: 4.5,
      },
      {
        quote: "Their market forecasts have consistently proven accurate.",
        author: "Michael Chen",
        title: "Fund Manager",
        company: "Gamma Ltd.",
        rating: 4,
      },
    ],
  },
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our research services and market insights, helping you better understand our approach and offerings.",
    faqs: [
      {
        question: "What types of reports do you offer?",
        answer:
          "We offer market outlook reports, company-sponsored reports, and valuations.",
      },
      {
        question: "How can I access your latest reports?",
        answer:
          "You can access our latest reports by visiting the 'View Our Latest Reports' section on our website.",
      },
      {
        question: "Do you provide custom research services?",
        answer:
          "Yes, we provide custom research services tailored to your specific business needs.",
      },
      {
        question: "How do I contact your team for a consultation?",
        answer:
          "You can contact our team for a consultation via email at info@valora.com or by phone at +1 (555) 123-4567.",
      },
      {
        question: "What industries do you specialize in?",
        answer:
          "We specialize in various industries including technology, finance, and corporate sectors.",
      },
    ],
  },
  reportsSection: [
    {
      title: "Q1 2024 Market Analysis",
      description: "Comprehensive analysis of market trends and forecasts",
      date: "March 2024",
      report: {
        url: "./assets/alphabetq3.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
    {
      title: "Tech Sector Overview",
      description: "Deep dive into technology sector performance",
      date: "February 2024",
      report: {
        url: "./assets/teslaq3.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
    {
      title: "Financial Services Report",
      description: "Analysis of banking and fintech developments",
      date: "January 2024",
      report: {
        url: "./assets/alphabetq3.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
    {
      title: "ESG Investment Trends",
      description:
        "Analysis of sustainable and responsible investing landscape",
      date: "December 2023",
      report: {
        url: "./assets/ratecut2024.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
    {
      title: "Cryptocurrency Market Report",
      description:
        "Detailed analysis of digital asset markets and blockchain technology",
      date: "November 2023",
      report: {
        url: "./assets/postelection2024.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
    {
      title: "Healthcare Industry Analysis",
      description: "Comprehensive review of healthcare sector developments",
      date: "October 2023",
      report: {
        url: "./assets/alphabetq3.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
    {
      title: "Real Estate Market Outlook",
      description: "Analysis of commercial and residential real estate trends",
      date: "September 2023",
      report: {
        url: "./assets/alphabetq3.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
    {
      title: "Renewable Energy Sector Report",
      description:
        "Overview of clean energy markets and investment opportunities",
      date: "August 2023",
      report: {
        url: "./assets/alphabetq3.pdf",
        name: "Alphabet Inc. Q3 2023 Earnings Report.pdf",
      },
    },
  ],
  ctaSection: {
    title: "Ready to Make Informed Decisions?",
    description:
      "Access our latest research reports and stay ahead of market trends",
    button: {
      text: "View Our Latest Reports",
      href: "#reports",
    },
  },
  contactSection: {
    title: "Get in Touch",
    description:
      "Interested in learning more about our research services? Contact our team for a consultation.",
    contacts: [
      {
        icon: Mail,
        title: "Email Us",
        value: "info@valoraresearch.com",
      },
      {
        icon: Phone,
        title: "Phone",
        value: "+1 (201) 234-4945",
      },
      {
        icon: MapPin,
        title: "Location",
        value: "Jersey City, NJ, US",
      },
    ],
  },
  footerSection: {
    company: {
      name: "Valora Research",
      description: "Independent financial research for informed decisions.",
    },
    services: [
      { label: "Valuations", href: "#" },
      { label: "Company Reports", href: "#" },
      { label: "Market Outlook", href: "#" },
    ],
    companyLinks: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    contact: {
      address: "Jersey City, NJ, United States",
      email: "info@valoraresearch.com",
    },
  },
} as const

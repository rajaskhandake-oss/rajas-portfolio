// All site copy and data in one place so components stay presentational.

export const profile = {
  name: "Rajas Khandake",
  role: "Senior Principal Product Manager",
  company: "Quick Heal",
  education: "IIM Lucknow Alumni",
  resumeHref: "/Rajas-Khandake-Resume.pdf",
};

export const nav = [
  { label: "Journey", href: "#journey" },
  { label: "Ecosystems", href: "#ecosystems" },
  { label: "Platform", href: "#platform" },
  { label: "Operating Model", href: "#operating-model" },
  { label: "Impact", href: "#impact" },
  { label: "Why Qualys", href: "#why-qualys" },
];

export const heroMetrics = [
  { value: 12, suffix: "+", label: "Years in Product" },
  { value: 4, suffix: "", label: "Product Ecosystems Built" },
  { value: 100, suffix: "M+", label: "Users Impacted" },
  { value: 5, suffix: "+", label: "Platforms Architected" },
];

export const expertise = [
  "Cybersecurity",
  "Platform Products",
  "SaaS",
  "B2B & B2C",
  "Product Strategy",
  "Growth & Monetization",
  "Data Analytics",
  "AI Products",
];

export const journey = [
  {
    period: "Early Career",
    org: "Startup Ecosystem",
    role: "Founding-team Product",
    summary:
      "Built products from the ground up — owning discovery, zero-to-one delivery and the first paying customers.",
    points: [
      "Products built from scratch",
      "Zero-to-one discovery to launch",
      "Hands-on across design & engineering",
    ],
  },
  {
    period: "Oct 2020 – May 2022",
    org: "Medly (USA)",
    role: "Senior Product Manager",
    summary:
      "Owned product strategy across B2B and B2C verticals for the US-based platform, and launched a new B2B product line from the ground up.",
    points: [
      "Drove 30% of company revenue — $10M annually",
      "Strategy across B2B & B2C verticals",
      "Built & launched a B2B delivery-management product from scratch",
      "First enterprise client live in under 2 months — $2M annually",
    ],
  },
  {
    period: "Scale-up",
    org: "Creative Galileo",
    role: "VP, Product Management",
    summary:
      "Led product for an AI-first learning platform, scaling a SaaS ERP and consumer experiences across multiple countries.",
    points: [
      "AI products at scale",
      "SaaS ERP platform",
      "Multi-country expansion",
      "Cross-functional leadership",
    ],
  },
  {
    period: "Present",
    org: "Quick Heal",
    role: "Senior Principal Product Manager",
    summary:
      "Own cybersecurity platforms and the consumer + enterprise portfolios they power — turning shared capabilities into compounding leverage.",
    points: [
      "Cybersecurity platforms",
      "Consumer security products",
      "Enterprise & government solutions",
      "Platform-led portfolio strategy",
    ],
  },
];

export const ecosystems = [
  {
    layer: "Consumer Security",
    intent: "Protecting millions of everyday users",
    products: [
      "Quick Heal Antivirus",
      "Quick Heal Mobile Security",
      "AntiFraud.ai",
    ],
  },
  {
    layer: "Commerce",
    intent: "Turning protection into recurring revenue",
    products: [
      "CRW Platform",
      "Subscription Management",
      "Billing Platform",
      "Renewal Engine",
    ],
  },
  {
    layer: "Partner Ecosystem",
    intent: "Scaling distribution through partners",
    products: [
      "Retail Partner Platform",
      "Inventory Management",
      "Partner Lifecycle Management",
      "Partner Mobile App",
    ],
  },
  {
    layer: "Enterprise Solutions",
    intent: "Security for businesses and government",
    products: ["SOHO Security", "Government Security Solutions"],
  },
];

export const platform = {
  center: "MetaProtect Cloud Platform",
  quote: "Products create value. Platforms create leverage.",
  nodes: [
    {
      name: "Telemetry Platform",
      services: ["Product Analytics", "Device Intelligence", "Security Events"],
    },
    {
      name: "Configuration Platform",
      services: [
        "Feature Rollouts",
        "Country-specific Config",
        "Product Variants",
      ],
    },
    {
      name: "Notification Platform",
      services: ["Engagement", "Security Alerts", "Lifecycle Comms"],
    },
    {
      name: "Policy Management",
      services: ["Device Controls", "Security Policies"],
    },
    {
      name: "Shared Services",
      services: ["Multi-product Support", "Common Infrastructure"],
    },
  ],
};

export const operatingModel = [
  {
    step: "Strategy",
    headline: "Set the direction",
    body: "Translate market signals and the business mission into a sharp, defensible product thesis the whole org can rally behind.",
  },
  {
    step: "Prioritization",
    headline: "Decide what wins",
    body: "Force trade-offs with explicit frameworks — impact, leverage and risk — so the highest-value bets get the oxygen.",
  },
  {
    step: "Execution",
    headline: "Ship with momentum",
    body: "Run tight cross-functional delivery loops across product, design and engineering with clear ownership and crisp cadence.",
  },
  {
    step: "Measurement",
    headline: "Prove the outcome",
    body: "Instrument everything. Tie roadmap to metrics that matter — adoption, retention, conversion and revenue.",
  },
  {
    step: "Scale",
    headline: "Compound the gains",
    body: "Convert one-off wins into reusable platform capabilities so each launch makes the next one faster and cheaper.",
  },
];

export const impact = [
  {
    org: "Quick Heal",
    accent: "signal",
    metrics: [
      { value: 150, suffix: "%", label: "Increase in MAU" },
      { value: 300, suffix: "%", label: "Increase in Signup Conversion" },
      { value: 250, suffix: "%", label: "Increase in Feature Adoption" },
    ],
  },
  {
    org: "Vuclip / Viu",
    accent: "azure",
    metrics: [
      { value: 100, suffix: "M+", label: "Downloads" },
      { value: 5, prefix: "$", suffix: "M", label: "Revenue in 6 Months" },
      { value: 27, suffix: "%", label: "D15 Retention Lift" },
      { value: 11, suffix: "%", label: "Engagement Lift" },
      { value: 4, suffix: "x", label: "Series Completion Rate" },
      { value: 50, prefix: "$", suffix: "M+", label: "Revenue Contribution" },
      { value: 6, prefix: "$", suffix: "M", label: "Revenue via APIs" },
      {
        value: 3,
        suffix: " wks",
        label: "Time to Market (from 8 wks)",
      },
    ],
  },
  {
    org: "Creative Galileo",
    accent: "signal",
    metrics: [
      { value: null, text: "AI", label: "Product Scaled" },
      { value: null, text: "SaaS", label: "Platform Growth" },
      { value: null, text: "X-fn", label: "Cross-functional Leadership" },
    ],
  },
];

export const leadership = [
  {
    title: "Platform Strategy",
    body: "Building reusable capabilities that turn products into leverage.",
  },
  {
    title: "Execution Excellence",
    body: "Driving cross-functional delivery from idea to shipped outcome.",
  },
  {
    title: "Stakeholder Management",
    body: "Aligning executives, engineering, sales and customers.",
  },
  {
    title: "Data-driven Decisions",
    body: "Metrics-led prioritization over opinion-led roadmaps.",
  },
  {
    title: "Team Leadership",
    body: "Product, design and engineering moving as one.",
  },
  {
    title: "Business Impact",
    body: "Owning revenue, growth and retention end to end.",
  },
];

export const award = {
  title: "Rising Star Award",
  org: "Quick Heal Technologies",
  date: "May 2026",
  description:
    "Recognized for driving significant business impact across cybersecurity products and platforms through strategic product leadership, platform innovation and measurable growth outcomes.",
};

export const whyQualys = {
  points: [
    "Deep cybersecurity domain understanding",
    "Experience building large-scale platforms",
    "Proven track record of scaling products",
    "Strong enterprise and consumer product expertise",
    "Ability to align strategy, execution and business outcomes",
    "Experience leading complex ecosystems, not isolated products",
  ],
  closing:
    "I'm excited about helping Qualys build the next generation of cybersecurity platforms that deliver value at global scale.",
};

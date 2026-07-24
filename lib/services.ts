export type Service = {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  keywords: string[];
  benefits: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "cloud-solutions",
    icon: "☁️",
    title: "Cloud Solutions",
    shortDescription:
      "Modern cloud architecture and deployment automation for faster delivery.",
    description:
      "ConOps Tech designs and operates cloud platforms that help teams ship faster without sacrificing reliability. We assess your current footprint, choose the right mix of public cloud services, and build landing zones with identity, networking, and cost controls from day one. Our engineers implement infrastructure as code, CI/CD pipelines, and observability so releases are repeatable and reversible. Whether you are migrating workloads, modernizing monoliths into containers, or optimizing spend on an existing estate, we focus on measurable outcomes: shorter lead time, fewer incidents, and clearer ownership. Engagements typically include architecture workshops, migration runbooks, environment hardening, and knowledge transfer so your team can operate confidently after go-live.",
    keywords: [
      "cloud architecture",
      "AWS",
      "Azure",
      "GCP",
      "DevOps",
      "infrastructure as code",
    ],
    benefits: [
      "Landing zones with security and cost guardrails",
      "Infrastructure as code and automated deployments",
      "Observability, backups, and disaster recovery patterns",
      "Migration plans that reduce downtime risk",
    ],
    outcomes: [
      "Faster, safer releases to production",
      "Lower cloud waste through right-sizing and governance",
      "Clear operating model for your engineering team",
    ],
  },
  {
    slug: "enterprise-automation",
    icon: "⚡",
    title: "Enterprise Automation",
    shortDescription:
      "Streamline workflows with intelligent automation and orchestration.",
    description:
      "Manual handoffs slow teams down and create avoidable errors. ConOps Tech maps your critical workflows end to end, then automates the repetitive steps across systems, approvals, and data syncs. We combine orchestration platforms, APIs, and event-driven patterns so work moves as soon as conditions are met—not when someone remembers to click. From ticket triage and provisioning to finance and operations processes, automation is designed with auditability and human oversight where it matters. You get fewer bottlenecks, consistent execution, and dashboards that show what is running, waiting, or failing.",
    keywords: [
      "workflow automation",
      "orchestration",
      "RPA",
      "integration",
      "process automation",
    ],
    benefits: [
      "End-to-end workflow mapping and redesign",
      "API and event-driven integrations",
      "Human-in-the-loop controls for critical steps",
      "Monitoring and retry strategies for reliability",
    ],
    outcomes: [
      "Reduced cycle time on routine operations",
      "Fewer manual errors and rework loops",
      "Scalable processes that grow with demand",
    ],
  },
  {
    slug: "it-strategy-advisory",
    icon: "🎯",
    title: "IT Strategy & Advisory",
    shortDescription:
      "Actionable roadmaps for compliance, modernization, and growth.",
    description:
      "Technology investments only pay off when they connect to business outcomes. ConOps Tech partners with leadership to clarify priorities, assess maturity, and produce practical roadmaps—not slide decks that gather dust. We evaluate platforms, vendors, risk, and team capability, then sequence initiatives so early wins fund longer-term modernization. Advisory work covers cloud strategy, security posture, compliance readiness, application portfolios, and operating models. Deliverables include decision criteria, phased plans, budget ranges, and success metrics your stakeholders can track.",
    keywords: [
      "IT strategy",
      "digital transformation",
      "technology roadmap",
      "compliance",
      "modernization",
    ],
    benefits: [
      "Executive-ready assessments and options analysis",
      "Prioritized roadmaps tied to business goals",
      "Vendor and architecture decision support",
      "Risk, compliance, and capability gap reviews",
    ],
    outcomes: [
      "Aligned leadership on where to invest next",
      "Clear sequencing that reduces wasted spend",
      "Measurable milestones for modernization programs",
    ],
  },
  {
    slug: "erp-solutions",
    icon: "🏢",
    title: "ERP Solutions",
    shortDescription:
      "Integrated business management systems for seamless operations.",
    description:
      "Fragmented tools create duplicate data and slow decisions. ConOps Tech helps you select, implement, and integrate ERP capabilities that fit how your organization actually works. We clarify process scope across finance, inventory, sales, and operations; configure modules with sensible defaults; and connect ERP to the rest of your stack through reliable integrations. Change management and training are part of delivery so adoption sticks. Whether you are replacing spreadsheets or upgrading a legacy suite, we keep the focus on clean master data, controllable go-lives, and reporting leadership can trust.",
    keywords: [
      "ERP implementation",
      "business systems",
      "finance ERP",
      "inventory management",
      "system integration",
    ],
    benefits: [
      "Requirements workshops and fit-gap analysis",
      "Configuration, data migration, and UAT support",
      "Integrations with CRM, e-commerce, and analytics",
      "Training and post-go-live stabilization",
    ],
    outcomes: [
      "Single source of truth for core business data",
      "Faster month-end and operational reporting",
      "Processes that scale without spreadsheet sprawl",
    ],
  },
  {
    slug: "it-support",
    icon: "🛠️",
    title: "IT Support",
    shortDescription:
      "24/7 technical support and maintenance for your IT infrastructure.",
    description:
      "When systems stall, revenue and trust follow. ConOps Tech provides responsive IT support and maintenance so your team stays productive. We establish clear SLAs, ticketing workflows, and escalation paths covering endpoints, identity, networking, and cloud services. Proactive monitoring catches issues before users feel them, while patching and hardening keep the baseline healthy. Support can stand alone or sit alongside our engineering engagements—giving you a single partner for both day-to-day reliability and longer-term improvements.",
    keywords: [
      "IT support",
      "managed services",
      "help desk",
      "infrastructure maintenance",
      "24/7 support",
    ],
    benefits: [
      "Defined SLAs and escalation paths",
      "Monitoring, patching, and preventive maintenance",
      "Endpoint, identity, and infrastructure coverage",
      "Transparent reporting on tickets and uptime",
    ],
    outcomes: [
      "Faster resolution of day-to-day incidents",
      "Fewer repeat issues through root-cause fixes",
      "Predictable support costs and coverage",
    ],
  },
  {
    slug: "ai-driven-solutions",
    icon: "🤖",
    title: "AI Driven Solutions",
    shortDescription:
      "Intelligent automation and AI-powered systems to transform your business operations.",
    description:
      "AI creates value when it is grounded in real workflows and trustworthy data. ConOps Tech helps you identify high-ROI use cases, prepare data pipelines, and deploy models or LLM-powered assistants with guardrails. We focus on practical applications—document processing, support copilots, forecasting, anomaly detection, and decision support—rather than experiments that never reach production. Delivery includes evaluation metrics, privacy considerations, human review loops, and integration into the tools your teams already use so adoption is natural and measurable.",
    keywords: [
      "AI solutions",
      "machine learning",
      "LLM",
      "intelligent automation",
      "AI consulting",
    ],
    benefits: [
      "Use-case discovery tied to operational ROI",
      "Data readiness and pipeline design",
      "Production deployments with monitoring and guardrails",
      "Human review and feedback loops for quality",
    ],
    outcomes: [
      "Automated work that frees expert time",
      "Faster insights from documents and systems",
      "Governed AI usage your stakeholders can trust",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

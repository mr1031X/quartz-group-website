// Service data for the Services page
// Icons are referenced by name and rendered in the component

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Epicor Implementation",
    description: "End-to-end Epicor ERP implementation services tailored to your business needs. From initial assessment to go-live support, we ensure a smooth transition.",
    icon: "Monitor",
    features: [
      "Business Process Review",
      "System Design & Configuration",
      "Data Migration",
      "User Training",
      "Go-Live Support",
      "Post-Implementation Optimization"
    ],
    slug: "epicor-implementation"
  },
  {
    id: "2",
    title: "Epicor Consulting",
    description: "Expert guidance to help you maximize your Epicor investment. Our consultants bring decades of combined experience across all Epicor modules.",
    icon: "User",
    features: [
      "Strategic Planning",
      "Process Optimization",
      "Custom Development",
      "Integration Services",
      "Business Intelligence",
      "Workflow Automation"
    ],
    slug: "epicor-consulting"
  },
  {
    id: "3",
    title: "Epicor Optimization",
    description: "Fine-tune your existing Epicor system for peak performance. Identify bottlenecks, streamline processes, and improve user adoption.",
    icon: "Settings",
    features: [
      "Performance Tuning",
      "Process Reengineering",
      "Custom Report Development",
      "Dashboard Creation",
      "User Experience Enhancement",
      "System Health Checks"
    ],
    slug: "epicor-optimization"
  },
  {
    id: "4",
    title: "Epicor Support",
    description: "Reliable ongoing support to keep your Epicor system running smoothly. From help desk to strategic guidance, we're here when you need us.",
    icon: "Headphones",
    features: [
      "Help Desk Support",
      "System Administration",
      "Patch Management",
      "Issue Resolution",
      "User Assistance",
      "Knowledge Transfer"
    ],
    slug: "epicor-support"
  },
  {
    id: "5",
    title: "Epicor Upgrades",
    description: "Seamless upgrades to the latest Epicor versions, including migration to Epicor Kinetic. Minimize downtime and maximize new features.",
    icon: "TrendingUp",
    features: [
      "Version Upgrades",
      "Kinetic Migration",
      "Cloud Migration",
      "Data Conversion",
      "Testing & Validation",
      "Training on New Features"
    ],
    slug: "epicor-upgrades"
  },
  {
    id: "6",
    title: "Cloud Services",
    description: "Modernize your Epicor deployment with cloud solutions. Improved accessibility, security, and scalability for your ERP infrastructure.",
    icon: "Cloud",
    features: [
      "Cloud Migration Planning",
      "Azure Deployment",
      "Hybrid Solutions",
      "Disaster Recovery",
      "Security Configuration",
      "Ongoing Cloud Management"
    ],
    slug: "cloud-services"
  },
  {
    id: "7",
    title: "Custom Development",
    description: "Tailored solutions to extend Epicor's capabilities. BPMs, BAQs, customizations, and integrations to meet your unique requirements.",
    icon: "Wrench",
    features: [
      "BPM Development",
      "BAQ Creation",
      "Dashboard Development",
      "Customizations",
      "API Integrations",
      "Service Connect"
    ],
    slug: "custom-development"
  },
  {
    id: "8",
    title: "Training & Education",
    description: "Comprehensive training programs to empower your team. From basic navigation to advanced administration, we build Epicor expertise.",
    icon: "GraduationCap",
    features: [
      "End-User Training",
      "Administrator Training",
      "Role-Based Training",
      "Custom Documentation",
      "Video Tutorials",
      "Ongoing Education"
    ],
    slug: "training-education"
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export interface Industry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  image: string;
}

export const industries: Industry[] = [
  {
    id: "1",
    name: "Manufacturing",
    description: "From discrete to process manufacturing, we help streamline operations, improve quality control, and increase production efficiency with Epicor ERP.",
    challenges: [
      "Complex production scheduling",
      "Inventory management",
      "Quality control",
      "Regulatory compliance",
      "Supply chain visibility"
    ],
    solutions: [
      "Advanced Production Management",
      "Real-time Inventory Tracking",
      "Quality Assurance Modules",
      "Compliance Reporting",
      "Supplier Portal Integration"
    ],
    image: "/images/industry-manufacturing.jpg"
  },
  {
    id: "2",
    name: "Distribution",
    description: "Optimize your distribution operations with better inventory visibility, warehouse management, and customer service capabilities.",
    challenges: [
      "Multi-warehouse management",
      "Order fulfillment speed",
      "Inventory accuracy",
      "Customer demands",
      "Shipping logistics"
    ],
    solutions: [
      "Warehouse Management System",
      "Advanced Shipping Notice",
      "Demand Forecasting",
      "Customer Self-Service Portal",
      "Route Optimization"
    ],
    image: "/images/industry-distribution.jpg"
  },
  {
    id: "3",
    name: "Retail",
    description: "Connect your retail operations from point-of-sale to back-office with integrated solutions that improve customer experience.",
    challenges: [
      "Omnichannel integration",
      "Real-time inventory visibility",
      "Customer data management",
      "Seasonal demand fluctuations",
      "Competitive pricing"
    ],
    solutions: [
      "POS Integration",
      "Unified Commerce Platform",
      "Customer Relationship Management",
      "Demand Planning",
      "Price Management"
    ],
    image: "/images/industry-retail.jpg"
  },
  {
    id: "4",
    name: "Healthcare",
    description: "Meet the unique challenges of healthcare manufacturing and distribution with compliant, traceable, and efficient ERP solutions.",
    challenges: [
      "FDA compliance",
      "Lot traceability",
      "Quality management",
      "Device history records",
      "Sterile environment tracking"
    ],
    solutions: [
      "FDA Validation Support",
      "Lot/Serial Tracking",
      "Device History Records",
      "Corrective Action Management",
      "Audit Trail Reporting"
    ],
    image: "/images/industry-healthcare.jpg"
  },
  {
    id: "5",
    name: "Aerospace",
    description: "Support the stringent requirements of aerospace manufacturing with complete traceability, compliance, and quality management.",
    challenges: [
      "AS9100 compliance",
      "Complex BOMs",
      "Long lead times",
      "Certification tracking",
      "Material traceability"
    ],
    solutions: [
      "AS9100 Quality Management",
      "Advanced BOM Management",
      "Supplier Qualification",
      "First Article Inspection",
      "Material Certification Tracking"
    ],
    image: "/images/industry-aerospace.jpg"
  },
  {
    id: "6",
    name: "Defense",
    description: "Meet defense industry requirements with secure, compliant, and reliable ERP solutions designed for government contractors.",
    challenges: [
      "DFARS compliance",
      "ITAR regulations",
      "Cost accounting standards",
      "Secure data handling",
      "Government reporting"
    ],
    solutions: [
      "Government Contract Accounting",
      "Cost Plus Pricing Support",
      "Incurred Cost Submission",
      "Secure Deployment Options",
      "DCAA Audit Support"
    ],
    image: "/images/industry-defense.jpg"
  },
  {
    id: "7",
    name: "Energy",
    description: "Support the energy sector's unique demands with robust project management, asset tracking, and field service capabilities.",
    challenges: [
      "Project-based manufacturing",
      "Field service management",
      "Asset lifecycle tracking",
      "Regulatory compliance",
      "Safety management"
    ],
    solutions: [
      "Project Management",
      "Field Service Automation",
      "Asset Management",
      "Safety Incident Tracking",
      "Environmental Compliance"
    ],
    image: "/images/industry-energy.jpg"
  },
  {
    id: "8",
    name: "Industrial",
    description: "From metal fabrication to industrial equipment, we help industrial manufacturers optimize operations and drive growth.",
    challenges: [
      "Make-to-order production",
      "Complex scheduling",
      "Material variability",
      "Equipment maintenance",
      "Cost control"
    ],
    solutions: [
      "Engineer-to-Order Support",
      "Advanced Planning & Scheduling",
      "Product Configurator",
      "Preventive Maintenance",
      "Job Costing"
    ],
    image: "/images/industry-industrial.jpg"
  }
];

export const getIndustryByName = (name: string): Industry | undefined => {
  return industries.find(industry => industry.name.toLowerCase() === name.toLowerCase());
};

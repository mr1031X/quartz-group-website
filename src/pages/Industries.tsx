import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown,
  Check,
  Factory, 
  Truck, 
  Heart, 
  Plane, 
  Shield, 
  Zap
} from 'lucide-react';

const Industries = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const industries = [
    {
      id: 'manufacturing',
      icon: Factory,
      name: 'Manufacturing',
      headline: 'From discrete to process, we speak your language',
      description: 'Manufacturing is in our DNA. We understand the complexity of production scheduling, the criticality of inventory accuracy, and the pressure of margin constraints. Our manufacturing clients see an average 47% efficiency gain within 12 months.',
      challenges: [
        { title: 'Production Scheduling', desc: 'Complex multi-level BOMs, capacity constraints, change orders' },
        { title: 'Inventory Management', desc: 'Raw materials, WIP, finished goods, lot tracking' },
        { title: 'Quality Control', desc: 'Inspection plans, non-conformance, corrective actions' },
        { title: 'Regulatory Compliance', desc: 'Traceability, audit trails, documentation' }
      ],
      solutions: [
        { title: 'Advanced Production Management', desc: 'MRP, MPS, finite scheduling, what-if analysis' },
        { title: 'Real-time Inventory Tracking', desc: 'RFID-enabled visibility, cycle counting, automated transactions' },
        { title: 'Quality Assurance Suite', desc: 'Inspection plans, SPC, CAPA, supplier quality' },
        { title: 'Compliance Reporting', desc: 'Automated audit trails, lot genealogy, certificate management' }
      ],
      metrics: [
        { value: '47%', label: 'Efficiency Gain', desc: 'Average within 12 months' },
        { value: '99.2%', label: 'Inventory Accuracy', desc: 'With RFID integration' },
        { value: '60%', label: 'Scheduling Time', desc: 'Reduction in planning cycles' }
      ],
      caseStudy: {
        company: 'Midwest Precision Manufacturing',
        challenge: 'Manual scheduling, 12% inventory variance, 5-day order cycle',
        solution: 'Epicor 10 with Advanced Planning, RFID inventory tracking',
        results: ['Order cycle reduced to 18 hours', 'Inventory accuracy: 99.4%', 'Scheduling time: 75% reduction']
      },
      faqs: [
        { q: 'Do you support both discrete and process manufacturing?', a: 'Yes. We have deep expertise in both. Discrete: make-to-order, make-to-stock, engineer-to-order. Process: batch, continuous, mixed-mode. We configure Epicor for your specific manufacturing type.' },
        { q: 'Can you handle complex multi-level BOMs?', a: 'Absolutely. We\'ve implemented systems with 15+ level BOMs, phantom assemblies, and complex routing. Our consultants understand manufacturing engineering and can optimize your BOM structure.' },
        { q: 'How do you handle shop floor data collection?', a: 'Multiple options: handheld scanners, tablets at workstations, RFID for touchless tracking, direct machine integration. We recommend based on your processes, environment, and budget.' },
        { q: 'What about quality management?', a: 'Epicor\'s Quality Assurance module handles inspection plans, SPC, non-conformance, CAPA, and supplier quality. We\'ve helped manufacturers achieve ISO 9001, AS9100, and FDA compliance.' },
        { q: 'Can you integrate with our existing equipment?', a: 'Yes. We integrate with CNC machines, PLCs, scales, and other shop floor equipment. Real-time production data flows directly into Epicor for accurate costing and scheduling.' }
      ]
    },
    {
      id: 'distribution',
      icon: Truck,
      name: 'Distribution',
      headline: 'Velocity and visibility for modern distribution',
      description: 'In distribution, speed is everything. We help distributors optimize warehouse operations, accelerate order fulfillment, and maintain perfect inventory accuracy — even across multiple facilities.',
      challenges: [
        { title: 'Multi-Warehouse Management', desc: 'Inventory visibility, transfers, allocation rules' },
        { title: 'Order Fulfillment Speed', desc: 'Pick/pack/ship efficiency, same-day requirements' },
        { title: 'Demand Forecasting', desc: 'Seasonality, trends, supplier lead times' },
        { title: 'Customer Expectations', desc: 'Real-time availability, accurate ETAs, self-service' }
      ],
      solutions: [
        { title: 'Warehouse Management System', desc: 'Directed picking, put-away optimization, cycle counting' },
        { title: 'Advanced Shipping', desc: 'ASN, cartonization, carrier integration, tracking' },
        { title: 'Demand Planning', desc: 'Statistical forecasting, safety stock, reorder points' },
        { title: 'Customer Portal', desc: 'Self-service ordering, real-time availability, order tracking' }
      ],
      metrics: [
        { value: '65%', label: 'Pick Efficiency', desc: 'Average improvement' },
        { value: '99.7%', label: 'Shipping Accuracy', desc: 'With barcode/RFID verification' },
        { value: '4hr', label: 'Order-to-Ship', desc: 'Average time reduction' }
      ],
      caseStudy: {
        company: 'Regional Industrial Supply',
        challenge: '3 warehouses, no visibility, 2-day pick times',
        solution: 'Epicor 10 with WMS, RFID picking, customer portal',
        results: ['Order-to-ship: 4 hours', 'Inventory accuracy: 99.8%', 'Customer satisfaction: +34%']
      },
      faqs: [
        { q: 'Can you handle multi-warehouse operations?', a: 'Yes. We specialize in multi-site deployments with real-time inventory visibility, automated transfer suggestions, and consolidated reporting. Each site can have unique processes while maintaining corporate standards.' },
        { q: 'What about EDI and customer integrations?', a: 'We implement EDI (X12, EDIFACT), API integrations, and customer portals. Major retailer compliance (Amazon, Walmart, etc.) is a common requirement we handle regularly.' },
        { q: 'How do you improve picking efficiency?', a: 'Zone picking, wave picking, batch picking — we configure the optimal strategy for your operation. Barcode/RFID verification eliminates errors. Directed picking minimizes travel time.' },
        { q: 'Can customers see real-time inventory?', a: 'Yes. Our customer portals show real-time availability, pricing, order history, and tracking. Self-service ordering reduces your CS team\'s workload while improving customer satisfaction.' },
        { q: 'What about demand forecasting?', a: 'Epicor\'s Demand Planning module uses statistical forecasting with seasonality, trends, and promotions. We help you set optimal safety stock and reorder points to minimize stockouts and overstock.' }
      ]
    },
    {
      id: 'aerospace',
      icon: Plane,
      name: 'Aerospace',
      headline: 'AS9100 compliance without the complexity',
      description: 'Aerospace manufacturing demands perfection. We understand AS9100, first article inspection, and material certification requirements. Our aerospace clients pass audits with confidence.',
      challenges: [
        { title: 'AS9100 Compliance', desc: 'Documentation, audit trails, continuous improvement' },
        { title: 'Complex BOMs', desc: 'Deep hierarchies, alternate parts, effectivity dates' },
        { title: 'Material Certification', desc: 'Certs, test reports, traceability to heat/lot' },
        { title: 'Long Lead Times', desc: 'Forecasting, supplier management, risk mitigation' }
      ],
      solutions: [
        { title: 'AS9100 Quality Management', desc: 'Document control, audit management, CAPA' },
        { title: 'Advanced BOM Management', desc: 'Deep hierarchies, phantoms, effectivity control' },
        { title: 'Material Certification Tracking', desc: 'Digital certs, automatic retrieval, linkage' },
        { title: 'First Article Inspection', desc: 'AS9102 forms, ballooned drawings, submission' }
      ],
      metrics: [
        { value: '100%', label: 'Audit Pass Rate', desc: 'For our aerospace clients' },
        { value: '80%', label: 'Cert Retrieval Time', desc: 'Reduction with digital tracking' },
        { value: '50%', label: 'FAI Prep Time', desc: 'With automated forms' }
      ],
      caseStudy: {
        company: 'Precision Aerospace Components',
        challenge: 'Manual cert tracking, 3-day FAI prep, audit findings',
        solution: 'Epicor 10 with QA module, cert integration, FAI automation',
        results: ['FAI prep: 4 hours', 'Zero audit findings', 'Cert retrieval: instant']
      },
      faqs: [
        { q: 'Do you have AS9100 experience?', a: 'Extensive. We\'ve implemented Epicor for dozens of AS9100-certified manufacturers. We understand the requirements and configure Epicor to support compliance, not hinder it.' },
        { q: 'How do you handle material certifications?', a: 'Digital cert storage linked to heat/lot numbers. Automatic retrieval by cert number. Integration with supplier portals for direct cert download. Full traceability from finished part to raw material.' },
        { q: 'What about first article inspection?', a: 'Epicor\'s FAI module generates AS9102 forms automatically. Ballooned drawings, measurement data, submission packages — all streamlined. Most clients see 60-80% reduction in FAI prep time.' },
        { q: 'Can you handle government contracts?', a: 'Yes. We support government contract accounting, cost-plus pricing, and DCAA audit requirements. Our defense industry expertise transfers directly to aerospace government work.' },
        { q: 'How do you manage long lead times?', a: 'Advanced forecasting, supplier scorecards, risk analysis, and safety stock optimization. We help you identify and mitigate supply chain risks before they impact production.' }
      ]
    },
    {
      id: 'healthcare',
      icon: Heart,
      name: 'Healthcare',
      headline: 'FDA-compliant manufacturing systems',
      description: 'Medical device manufacturing requires rigorous validation, complete traceability, and flawless documentation. We build systems that pass FDA inspections and support patient safety.',
      challenges: [
        { title: 'FDA Validation', desc: 'IQ/OQ/PQ, 21 CFR Part 11, computer system validation' },
        { title: 'Device History Records', desc: 'Complete traceability, batch records, genealogy' },
        { title: 'Lot/Serial Tracking', desc: 'UDI compliance, recall readiness, expiration management' },
        { title: 'Quality Events', desc: 'Complaints, non-conformance, CAPA, adverse events' }
      ],
      solutions: [
        { title: 'FDA Validation Support', desc: 'Validation plans, protocols, execution, documentation' },
        { title: 'Device History Records', desc: 'Automated DHR, batch genealogy, electronic signatures' },
        { title: 'Lot/Serial Tracking', desc: 'UDI generation, barcode/RFID, recall management' },
        { title: 'Quality Management', desc: 'Complaints, NCMR, CAPA, audit management' }
      ],
      metrics: [
        { value: '100%', label: 'FDA Inspection', desc: 'Pass rate for our clients' },
        { value: '70%', label: 'Validation Time', desc: 'Reduction with templates' },
        { value: '99.9%', label: 'Traceability', desc: 'Complete lot/serial tracking' }
      ],
      caseStudy: {
        company: 'Medical Device Manufacturer',
        challenge: 'Manual DHRs, FDA warning letter, recall risk',
        solution: 'Epicor 10 with full validation, automated DHR, lot tracking',
        results: ['Warning letter resolved', 'DHR generation: automated', 'Recall simulation: 2 hours']
      },
      faqs: [
        { q: 'Do you provide FDA validation services?', a: 'Yes. We provide complete computer system validation: validation plans, IQ/OQ/PQ protocols, test execution, and documentation. Our templates and experience accelerate the process significantly.' },
        { q: 'How do you handle 21 CFR Part 11?', a: 'Epicor supports electronic signatures, audit trails, and user access controls required by 21 CFR Part 11. We configure and validate these features for FDA compliance.' },
        { title: 'What about UDI compliance?', a: 'Epicor generates UDI barcodes and manages the data elements required by FDA. We\'ve helped numerous medical device manufacturers achieve and maintain UDI compliance.' },
        { q: 'Can you handle recalls?', a: 'Yes. Epicor\'s lot/serial tracking enables rapid recall identification. We\'ve conducted recall simulations with clients — typical time to identify affected lots: under 2 hours.' },
        { q: 'What validation documentation do you provide?', a: 'Complete validation package: validation plan, risk assessment, user requirements, functional specifications, design specifications, IQ/OQ/PQ protocols, traceability matrix, and validation summary report.' }
      ]
    },
    {
      id: 'defense',
      icon: Shield,
      name: 'Defense',
      headline: 'Government contract accounting that passes DCAA',
      description: 'Defense contractors face unique accounting and compliance requirements. We build systems that support cost-plus contracts, meet DCAA standards, and withstand government audits.',
      challenges: [
        { title: 'Cost Accounting Standards', desc: 'CAS compliance, disclosure statements, consistency' },
        { title: 'Government Reporting', desc: 'Incurred cost submissions, billing, contract closeout' },
        { title: 'DCAA Audits', desc: 'Floor checks, system reviews, incurred cost audits' },
        { title: 'ITAR Compliance', desc: 'Export control, data security, access restrictions' }
      ],
      solutions: [
        { title: 'Government Contract Accounting', desc: 'Cost-plus, T&M, FFP, progress payments' },
        { title: 'DCAA-Ready Systems', desc: 'Timekeeping, labor distribution, indirect rates' },
        { title: 'Incurred Cost Submission', desc: 'Automated reporting, ICE model support' },
        { title: 'Secure Deployment', desc: 'On-premise, GovCloud, ITAR-compliant hosting' }
      ],
      metrics: [
        { value: '100%', label: 'DCAA Audit', desc: 'Pass rate' },
        { value: '60%', label: 'ICS Prep Time', desc: 'Reduction with automation' },
        { value: '99.5%', label: 'Labor Accuracy', desc: 'With automated distribution' }
      ],
      caseStudy: {
        company: 'Defense Systems Integrator',
        challenge: 'Manual ICS prep, DCAA findings, labor distribution errors',
        solution: 'Epicor with government contract accounting, automated reporting',
        results: ['ICS prep: 2 weeks to 2 days', 'Zero DCAA findings', 'Labor accuracy: 99.7%']
      },
      faqs: [
        { q: 'Do you have DCAA experience?', a: 'Extensive. We\'ve implemented Epicor for dozens of defense contractors. Our systems have passed numerous DCAA audits, including floor checks, system reviews, and incurred cost audits.' },
        { q: 'How do you handle cost-plus contracts?', a: 'Epicor\'s Project Management and Government Contract Accounting modules support cost-plus, T&M, and FFP contracts. We configure billing, revenue recognition, and reporting for your contract mix.' },
        { q: 'What about incurred cost submissions?', a: 'We automate ICS preparation with Epicor\'s reporting and our custom templates. Most clients see 60-80% reduction in ICS preparation time. We support the ICE model format.' },
        { q: 'Can you support ITAR requirements?', a: 'Yes. We offer on-premise deployments and ITAR-compliant cloud hosting. Access controls, audit trails, and data segregation meet ITAR requirements.' },
        { q: 'How do you handle timekeeping compliance?', a: 'Epicor\'s timekeeping with our configuration meets DCAA requirements: daily time entry, supervisor approval, labor distribution, and audit trails. We\'ve passed numerous floor check audits.' }
      ]
    },
    {
      id: 'energy',
      icon: Zap,
      name: 'Energy',
      headline: 'Asset-intensive operations optimized',
      description: 'Energy companies manage complex assets, field operations, and regulatory requirements. We help optimize maintenance, track field work, and maintain compliance across dispersed operations.',
      challenges: [
        { title: 'Asset Management', desc: 'Equipment lifecycle, maintenance, performance tracking' },
        { title: 'Field Service', desc: 'Dispatch, mobile access, work order management' },
        { title: 'Project Management', desc: 'Capital projects, cost tracking, resource allocation' },
        { title: 'Regulatory Compliance', desc: 'Safety, environmental, reporting requirements' }
      ],
      solutions: [
        { title: 'Asset Lifecycle Management', desc: 'Maintenance scheduling, performance monitoring, replacement planning' },
        { title: 'Field Service Automation', desc: 'Mobile work orders, dispatch optimization, real-time updates' },
        { title: 'Project Cost Control', desc: 'WBS, earned value, resource management' },
        { title: 'Safety & Compliance', desc: 'Incident tracking, audits, regulatory reporting' }
      ],
      metrics: [
        { value: '40%', label: 'Maintenance Cost', desc: 'Average reduction' },
        { value: '60%', label: 'Field Productivity', desc: 'With mobile access' },
        { value: '99.2%', label: 'Asset Uptime', desc: 'With preventive maintenance' }
      ],
      caseStudy: {
        company: 'Oilfield Services Provider',
        challenge: 'Reactive maintenance, manual field reporting, cost overruns',
        solution: 'Epicor with Asset Management, Field Service, Project Management',
        results: ['Maintenance costs: -42%', 'Field reporting: real-time', 'Project margins: +8%']
      },
      faqs: [
        { q: 'Can you handle asset-intensive operations?', a: 'Yes. Epicor\'s Asset Management module supports preventive and predictive maintenance, performance monitoring, and lifecycle costing. We\'ve implemented for oil & gas, utilities, and renewable energy clients.' },
        { q: 'What about field service?', a: 'Epicor Field Service provides mobile work orders, dispatch optimization, and real-time updates. Technicians access work orders, capture time/materials, and get signatures from the field.' },
        { q: 'How do you handle project-based work?', a: 'Epicor Project Management supports WBS, resource planning, earned value, and cost control. We\'ve implemented for EPC contractors, drilling contractors, and project-based service providers.' },
        { q: 'Can you support safety management?', a: 'Yes. Incident tracking, near-miss reporting, safety audits, and regulatory reporting. Integration with safety management systems for comprehensive HSE programs.' },
        { q: 'What about mobile access for field workers?', a: 'Epicor Mobile provides offline-capable access to work orders, time entry, and material issues. Works in remote locations with intermittent connectivity. Syncs when connection restored.' }
      ]
    }
  ];

  const industryImages: Record<string, string> = {
    manufacturing: '/images/industry-industrial-detail.jpg',
    distribution: '/images/industry-distribution-detail.jpg',
    aerospace: '/images/industry-aerospace-detail.jpg',
    healthcare: '/images/industry-medical-detail.jpg',
    defense: '/images/industry-defense-detail.jpg',
    energy: '/images/industry-energy-detail.jpg'
  };

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — With Background Image]
          ============================================ */}
      <section className="section-hero pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <img 
            src="/images/stats-image.jpg" 
            alt="Modern manufacturing facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-transparent to-[var(--deep-navy)]/40"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl">
            <span className="tag mb-6 block">Industries</span>
            <h1 className="text-h1 text-white mb-6">
              Industry expertise that matters
            </h1>
            <p className="text-body-lg">
              Manufacturing. Distribution. Aerospace. Healthcare. Defense. Energy. 
              We don't just know Epicor — we know your industry.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          [INDUSTRIES LIST — Detailed Cards]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div key={industry.id} id={industry.id} className="scroll-mt-24">
                {/* Industry Header with Image */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[var(--electric-blue)]/10 flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-[var(--electric-blue)]" />
                      </div>
                      <span className="text-micro text-[var(--cyan-glow)]">{industry.name}</span>
                    </div>
                    <h2 className="text-h2 text-white mb-4">{industry.headline}</h2>
                    <p className="text-body-lg">{industry.description}</p>
                  </div>
                  
                  {/* Industry Image & Metrics */}
                  <div className="space-y-6">
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <img 
                        src={industryImages[industry.id]} 
                        alt={`${industry.name} industry`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)]/60 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {industry.metrics.map((metric, i) => (
                        <div key={i} className="card-stat text-center">
                          <p className="text-2xl lg:text-3xl font-bold text-[var(--cyan-glow)]">{metric.value}</p>
                          <p className="text-sm text-white mt-1">{metric.label}</p>
                          <p className="text-xs text-[var(--slate-400)] mt-1">{metric.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-h4 text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      Industry Challenges
                    </h3>
                    <div className="space-y-4">
                      {industry.challenges.map((challenge, i) => (
                        <div key={i} className="p-4 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-xl">
                          <h4 className="text-white font-medium mb-1">{challenge.title}</h4>
                          <p className="text-sm text-[var(--slate-400)]">{challenge.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="text-h4 text-white mb-6 flex items-center gap-3">
                      <Check className="w-5 h-5 text-[var(--cyan-glow)]" />
                      Our Solutions
                    </h3>
                    <div className="space-y-4">
                      {industry.solutions.map((solution, i) => (
                        <div key={i} className="p-4 bg-[var(--slate-900)] border border-[var(--electric-blue)]/30 rounded-xl">
                          <h4 className="text-white font-medium mb-1">{solution.title}</h4>
                          <p className="text-sm text-[var(--slate-400)]">{solution.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Study */}
                <div className="mb-12">
                  <h3 className="text-h4 text-white mb-6">Case Study: {industry.caseStudy.company}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-xl">
                      <p className="text-micro text-amber-400 mb-3">Challenge</p>
                      <p className="text-[var(--slate-400)]">{industry.caseStudy.challenge}</p>
                    </div>
                    <div className="p-6 bg-[var(--slate-900)] border border-[var(--electric-blue)]/30 rounded-xl">
                      <p className="text-micro text-[var(--electric-blue)] mb-3">Solution</p>
                      <p className="text-[var(--slate-400)]">{industry.caseStudy.solution}</p>
                    </div>
                    <div className="p-6 bg-[var(--slate-900)] border border-[var(--cyan-glow)]/30 rounded-xl">
                      <p className="text-micro text-[var(--cyan-glow)] mb-3">Results</p>
                      <ul className="space-y-1">
                        {industry.caseStudy.results.map((result, i) => (
                          <li key={i} className="text-[var(--slate-400)] text-sm flex items-center gap-2">
                            <Check className="w-4 h-4 text-[var(--cyan-glow)]" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-h4 text-white mb-6">Frequently asked questions</h3>
                  <div className="space-y-0 border border-[var(--slate-800)] rounded-xl overflow-hidden">
                    {industry.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-[var(--slate-800)] last:border-0">
                        <button 
                          onClick={() => toggleFaq(`${industry.id}-${i}`)}
                          className="faq-question p-5 hover:bg-[var(--slate-800)]/50 transition-colors"
                        >
                          <span className="faq-question-text pr-8">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[var(--slate-400)] flex-shrink-0 transition-transform ${openFaq === `${industry.id}-${i}` ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === `${industry.id}-${i}` && (
                          <div className="px-5 pb-5">
                            <p className="text-[var(--slate-400)] leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {index < industries.length - 1 && (
                  <div className="mt-24 pt-24 border-t border-[var(--slate-800)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [CTA BAND — With Background Image]
          ============================================ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/smart-factory.jpg" 
            alt="Smart manufacturing facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/95 to-[var(--cyan-glow)]/95"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Don't see your industry?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              We've worked across dozens of verticals. Contact us to discuss 
              your specific industry requirements.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Discuss Your Industry
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

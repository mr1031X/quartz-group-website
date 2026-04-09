import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown,
  Check,
  AlertTriangle,
  Settings,
  Target,
  Headphones,
  Zap,
  Cloud,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const services = [
    {
      id: 'implementation',
      icon: Settings,
      title: 'Epicor Implementation',
      tagline: 'Zero-surprise deployments',
      description: 'End-to-end Epicor ERP implementation services tailored to your business needs. From initial assessment to go-live support, we ensure a smooth transition.',
      image: '/images/epicor-dashboard.jpg',
      whatGoesWrong: [
        'Projects drag on 2-3x longer than promised',
        'Hidden costs emerge post-go-live',
        'Critical business processes overlooked',
        'Data migration disasters',
        'User adoption fails, teams revert to spreadsheets'
      ],
      approach: [
        { step: '01', title: 'Discovery', desc: '60+ hour deep-dive into your processes, constraints, and objectives. We document everything before touching a configuration.' },
        { step: '02', title: 'Blueprint', desc: 'Detailed design documents signed off by stakeholders. No surprises, no scope creep.' },
        { step: '03', title: 'Build', desc: 'Iterative development with weekly demos. You see progress every week.' },
        { step: '04', title: 'Validate', desc: 'Rigorous testing with real data, real users, real scenarios. UAT is not optional.' },
        { step: '05', title: 'Deploy', desc: 'Phased go-live with 24/7 support. We stay until you\'re stable.' }
      ],
      roi: [
        { metric: '40-60%', label: 'Faster Implementation', desc: 'vs. industry average' },
        { metric: '0%', label: 'Scope Creep', desc: 'Fixed-price contracts' },
        { metric: '99.2%', label: 'On-Time Delivery', desc: '15-year track record' }
      ],
      examples: [
        'Discrete manufacturer: 16-week Epicor 10 deployment, 847 users',
        'Process manufacturer: Multi-site rollout across 4 facilities',
        'Distributor: Quick Launch program, go-live in 12 weeks'
      ],
      integrations: ['Epicor Kinetic', 'Epicor 10', 'Epicor 9', 'Epicor ERP'],
      faqs: [
        { q: 'How long does a typical implementation take?', a: 'Small to mid-size implementations (under 100 users) average 12-16 weeks. Enterprise deployments (500+ users) typically run 6-9 months. We provide fixed timelines in our proposals — no surprises.' },
        { q: 'What\'s included in your fixed-price contracts?', a: 'Everything: discovery, design, configuration, data migration, training, go-live support, and 30 days post-go-live stabilization. Change orders only happen if you change requirements.' },
        { q: 'How do you handle data migration?', a: 'We use a proven 3-phase approach: extract and cleanse, transform and validate, load and verify. Every record is accounted for. We\'ve never lost data in 500+ migrations.' },
        { q: 'What happens after go-live?', a: '30 days of intensive support included. Most clients transition to our ongoing support plan, which includes system administration, help desk, and continuous optimization.' },
        { q: 'Can you rescue a failing implementation?', a: 'Yes. We\'ve rescued 127 implementations abandoned by other partners. We start with a technical audit to assess what\'s salvageable and create a recovery plan.' }
      ]
    },
    {
      id: 'consulting',
      icon: Target,
      title: 'Epicor Consulting',
      tagline: 'Strategic guidance from architects',
      description: 'Expert guidance to maximize your Epicor investment. From process optimization to custom development, we help you get more from the platform.',
      image: '/images/consulting-meeting.jpg',
      whatGoesWrong: [
        'Processes that worked on paper fail in practice',
        'Customizations that break with every upgrade',
        'Reports that take hours to generate',
        'Workarounds that create data integrity issues',
        'Missed opportunities for automation'
      ],
      approach: [
        { step: '01', title: 'Assess', desc: 'Current state analysis. We identify bottlenecks, inefficiencies, and untapped capabilities.' },
        { step: '02', title: 'Design', desc: 'Future state blueprint. Process maps, technical specs, and ROI projections.' },
        { step: '03', title: 'Implement', desc: 'Execute the plan. Configuration, custom development, integrations.' },
        { step: '04', title: 'Measure', desc: 'Track KPIs. Did we achieve the projected ROI? If not, we fix it.' }
      ],
      roi: [
        { metric: '35%', label: 'Process Efficiency', desc: 'Average improvement' },
        { metric: '60%', label: 'Report Generation', desc: 'Time reduction' },
        { metric: '3-6mo', label: 'Payback Period', desc: 'Typical ROI timeline' }
      ],
      examples: [
        'Manufacturer: Automated 47 manual processes, saved 2,400 hours/month',
        'Distributor: Reduced order-to-ship time from 5 days to 18 hours',
        'Aerospace: Achieved AS9100 compliance with automated audit trails'
      ],
      integrations: ['Business Intelligence', 'Workflow Automation', 'EDI', 'APIs'],
      faqs: [
        { q: 'What types of consulting engagements do you offer?', a: 'Process optimization, custom development, integration architecture, upgrade planning, performance tuning, and strategic advisory. Engagements range from 2-week assessments to ongoing advisory retainers.' },
        { q: 'How do you measure success?', a: 'We define KPIs upfront: cycle time reduction, error rate decrease, labor hours saved, inventory accuracy improvement. Every engagement includes before/after measurement.' },
        { q: 'Can you work with our existing IT team?', a: 'Absolutely. We often augment internal teams, providing Epicor-specific expertise while your team handles broader IT. We\'re collaborative, not competitive.' },
        { q: 'What\'s your approach to custom development?', a: 'Minimize it. We first exhaust native Epicor capabilities. When custom is necessary, we build upgrade-friendly solutions using Epicor\'s recommended frameworks.' },
        { q: 'Do you offer remote consulting?', a: 'Yes. About 70% of our consulting is remote. For complex process work, we recommend on-site sessions, but day-to-day development and support work great remotely.' }
      ]
    },
    {
      id: 'optimization',
      icon: Zap,
      title: 'Epicor Optimization',
      tagline: 'Fine-tune for peak performance',
      description: 'Your Epicor system is live but not delivering expected results. We identify bottlenecks, streamline processes, and unlock the platform\'s full potential.',
      image: '/images/quality-control.jpg',
      whatGoesWrong: [
        'Screens take 10+ seconds to load',
        'Reports timeout or crash',
        'Users create workarounds outside the system',
        'Database grows uncontrollably',
        'Upgrades break critical workflows'
      ],
      approach: [
        { step: '01', title: 'Audit', desc: 'Comprehensive system health check. Performance, configuration, customizations, data quality.' },
        { step: '02', title: 'Analyze', desc: 'Root cause identification. We find the 20% of issues causing 80% of pain.' },
        { step: '03', title: 'Optimize', desc: 'Targeted fixes. No band-aids — we solve underlying problems.' },
        { step: '04', title: 'Monitor', desc: 'Ongoing performance tracking. Catch issues before users do.' }
      ],
      roi: [
        { metric: '70%', label: 'Performance Gain', desc: 'Average improvement' },
        { metric: '50%', label: 'Database Size', desc: 'Typical reduction' },
        { metric: '24hr', label: 'Issue Resolution', desc: 'Average response time' }
      ],
      examples: [
        'Manufacturer: Reduced MRP run time from 8 hours to 45 minutes',
        'Distributor: Cut screen load times from 12 seconds to under 2',
        'Healthcare: Achieved 99.9% uptime with proactive monitoring'
      ],
      integrations: ['Performance Monitoring', 'Database Tuning', 'Query Optimization'],
      faqs: [
        { q: 'How do I know if my system needs optimization?', a: 'Signs: screens take >5 seconds to load, reports timeout, users complain about slowness, MRP runs overnight, database backups take hours. If any apply, you need optimization.' },
        { q: 'What\'s included in a system health audit?', a: 'Performance analysis, configuration review, customization assessment, data quality check, security audit, and upgrade readiness evaluation. Delivered as a detailed report with prioritized recommendations.' },
        { q: 'Can you optimize without disrupting operations?', a: 'Yes. Most optimization work happens during off-hours. We use change management processes to minimize risk. Critical fixes are tested in a sandbox first.' },
        { q: 'How long does optimization take?', a: 'Depends on findings. Quick wins can be implemented in days. Comprehensive optimization programs run 3-6 months. We prioritize by impact and effort.' },
        { q: 'Will optimization help with our next upgrade?', a: 'Absolutely. A well-optimized system upgrades faster and with fewer issues. We often bundle optimization with upgrade planning for maximum efficiency.' }
      ]
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Epicor Support',
      tagline: '24/7 expertise when you need it',
      description: 'Reliable ongoing support to keep your Epicor system running smoothly. From help desk to strategic guidance, we\'re here when you need us.',
      image: '/images/support-center.jpg',
      whatGoesWrong: [
        'Support tickets sit unanswered for days',
        'Issues get "fixed" but keep recurring',
        'Critical problems happen after hours with no coverage',
        'Knowledge walks out the door when staff leaves',
        'Small issues snowball into major problems'
      ],
      approach: [
        { step: '01', title: 'Respond', desc: '24/7 ticket response. Average 2.3 hours for critical issues.' },
        { step: '02', title: 'Diagnose', desc: 'Root cause analysis, not symptom treatment. We fix it once.' },
        { step: '03', title: 'Resolve', desc: 'Implement the fix. Test thoroughly. Document everything.' },
        { step: '04', title: 'Prevent', desc: 'Identify patterns. Proactive fixes before issues impact users.' }
      ],
      roi: [
        { metric: '2.3hr', label: 'Avg Response', desc: 'For critical issues' },
        { metric: '94%', label: 'First-Call Resolution', desc: 'No bouncing around' },
        { metric: '99.7%', label: 'Uptime', desc: 'With proactive monitoring' }
      ],
      examples: [
        'Manufacturer: 99.9% uptime over 3 years with proactive monitoring',
        'Distributor: Reduced support tickets 60% through root cause fixes',
        'Aerospace: 24/7 coverage for critical production systems'
      ],
      integrations: ['Help Desk', 'System Monitoring', 'Patch Management'],
      faqs: [
        { q: 'What are your support hours?', a: 'Standard plans include business hours (8am-6pm ET). Premium plans offer 24/7 coverage. Emergency support available for all clients.' },
        { q: 'How quickly do you respond to tickets?', a: 'Critical (system down): 1 hour. High (major function broken): 4 hours. Medium (workaround available): 24 hours. Low (questions, enhancements): 48 hours.' },
        { q: 'What\'s included in support plans?', a: 'Help desk, bug fixes, configuration changes, report development, user assistance, system monitoring, patch management, and monthly health checks. Higher tiers include optimization and strategic advisory.' },
        { q: 'Can you support customizations built by others?', a: 'Yes. We support all Epicor customizations, regardless of who built them. We\'ll assess quality and recommend improvements if needed.' },
        { q: 'How do you handle after-hours emergencies?', a: 'Premium clients have a dedicated emergency hotline. On-call engineers respond to critical issues 24/7/365. Average emergency response time: 47 minutes.' }
      ]
    },
    {
      id: 'upgrades',
      icon: TrendingUp,
      title: 'Epicor Upgrades',
      tagline: 'Seamless migration to the latest',
      description: 'Upgrade to the latest Epicor versions with minimal disruption. From Kinetic migration to cloud deployment, we ensure a smooth transition.',
      image: '/images/cloud-data-center.jpg',
      whatGoesWrong: [
        'Upgrades take 2-3x longer than planned',
        'Critical customizations break',
        'Data migration errors corrupt records',
        'Users resist new interface',
        'System performs worse after upgrade'
      ],
      approach: [
        { step: '01', title: 'Assess', desc: 'Current system audit. Customization inventory. Compatibility check.' },
        { step: '02', title: 'Plan', desc: 'Detailed upgrade roadmap. Timeline, resources, risk mitigation.' },
        { step: '03', title: 'Prepare', desc: 'Data cleanup. Customization refactoring. Test environment setup.' },
        { step: '04', title: 'Execute', desc: 'Sandbox upgrade. UAT. Production cutover with rollback plan.' },
        { step: '05', title: 'Stabilize', desc: 'Post-upgrade support. Performance tuning. User training.' }
      ],
      roi: [
        { metric: '50%', label: 'Faster Upgrade', desc: 'vs. DIY approach' },
        { metric: '100%', label: 'Data Integrity', desc: 'Verified migration' },
        { metric: '0', label: 'Rollbacks', desc: 'In 15 years' }
      ],
      examples: [
        'Manufacturer: Epicor 9 to 10 upgrade, 6 weeks, 1,200 users',
        'Distributor: On-premise to Kinetic cloud migration',
        'Healthcare: Multi-version jump with FDA validation'
      ],
      integrations: ['Kinetic', 'Epicor 10', 'Epicor 9', 'Cloud Migration'],
      faqs: [
        { q: 'How long does an upgrade typically take?', a: 'Version-to-version upgrades average 8-12 weeks. Major platform changes (like Kinetic migration) run 12-20 weeks. We provide fixed timelines based on your specific environment.' },
        { q: 'Will my customizations work after upgrade?', a: 'We audit all customizations before starting. Some may need refactoring. We handle all technical updates and test everything thoroughly before go-live.' },
        { q: 'Can we upgrade directly to Kinetic?', a: 'Yes, but it depends on your current version. Epicor 10.2.400+ can upgrade directly to Kinetic. Older versions need intermediate upgrades. We\'ll map the optimal path.' },
        { q: 'What about cloud vs. on-premise?', a: 'We support both. Cloud offers easier maintenance and scalability. On-premise provides more control. We\'ll help you evaluate based on your requirements, compliance needs, and budget.' },
        { q: 'How do you minimize downtime during cutover?', a: 'We use proven strategies: weekend cutovers, phased rollouts for multi-site, parallel running for critical periods. Typical production downtime: 4-8 hours for most upgrades.' }
      ]
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Services',
      tagline: 'Modernize your deployment',
      description: 'Deploy Epicor in the cloud for improved accessibility, security, and scalability. We handle migration, configuration, and ongoing management.',
      image: '/images/cloud-data-center.jpg',
      whatGoesWrong: [
        'Cloud migration causes unexpected downtime',
        'Performance degrades vs. on-premise',
        'Security configuration leaves gaps',
        'Costs spiral beyond projections',
        'Integration with on-premise systems fails'
      ],
      approach: [
        { step: '01', title: 'Evaluate', desc: 'Cloud readiness assessment. Cost modeling. Architecture design.' },
        { step: '02', title: 'Design', desc: 'Azure/AWS architecture. Security configuration. Network planning.' },
        { step: '03', title: 'Migrate', desc: 'Data migration. System configuration. Integration setup.' },
        { step: '04', title: 'Optimize', desc: 'Performance tuning. Cost optimization. Security hardening.' }
      ],
      roi: [
        { metric: '30%', label: 'Cost Reduction', desc: 'vs. on-premise TCO' },
        { metric: '99.9%', label: 'Uptime SLA', desc: 'With Azure/AWS' },
        { metric: '24/7', label: 'Global Access', desc: 'From any device' }
      ],
      examples: [
        'Manufacturer: Azure deployment, 40% infrastructure cost reduction',
        'Distributor: Multi-region setup for global operations',
        'Healthcare: HIPAA-compliant cloud with audit logging'
      ],
      integrations: ['Microsoft Azure', 'AWS', 'Hybrid Deployments'],
      faqs: [
        { q: 'Which cloud platform do you recommend?', a: 'We\'re certified on both Azure and AWS. Azure often integrates better with existing Microsoft environments. AWS offers more granular control. We\'ll recommend based on your specific needs.' },
        { q: 'How long does cloud migration take?', a: 'Simple migrations: 4-6 weeks. Complex multi-site deployments: 3-6 months. We plan for parallel running to minimize risk.' },
        { q: 'Is cloud more expensive than on-premise?', a: 'Often not when you factor in total cost of ownership. No hardware refresh cycles, reduced IT overhead, automatic updates. Most clients see 20-40% TCO reduction.' },
        { q: 'What about security and compliance?', a: 'Cloud providers offer robust security controls. We configure them properly for your compliance requirements (SOX, HIPAA, ITAR, etc.). Cloud often improves security posture.' },
        { q: 'Can we keep some systems on-premise?', a: 'Yes. Hybrid deployments are common. We design architectures that connect cloud and on-premise seamlessly. Many clients migrate gradually.' }
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — With Background Image]
          ============================================ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/manufacturing-line.jpg" 
            alt="Manufacturing Production Line"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-transparent to-[var(--deep-navy)]/40"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-premium relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="tag mb-6 block">Services</span>
            <h1 className="text-h1 text-white mb-6">
              End-to-end Epicor expertise
            </h1>
            <p className="text-body-lg">
              From initial assessment to post-go-live optimization, we cover the entire 
              ERP lifecycle. Every service backed by 15+ years and 500+ implementations.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          [SERVICES LIST — Detailed Cards with Images]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                {/* Service Header with Image */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[var(--electric-blue)]/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-[var(--electric-blue)]" />
                      </div>
                      <span className="text-micro text-[var(--cyan-glow)]">{service.tagline}</span>
                    </div>
                    <h2 className="text-h2 text-white mb-4">{service.title}</h2>
                    <p className="text-body-lg">{service.description}</p>
                  </div>
                  
                  {/* Service Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)] rounded-2xl opacity-10 blur-2xl"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* ROI Stats */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                  {service.roi.map((stat, i) => (
                    <div key={i} className="card-stat text-center">
                      <p className="text-2xl lg:text-3xl font-bold text-[var(--cyan-glow)]">{stat.metric}</p>
                      <p className="text-sm text-white mt-1">{stat.label}</p>
                      <p className="text-xs text-[var(--slate-400)] mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>

                {/* What Goes Wrong */}
                <div className="mb-12">
                  <h3 className="text-h4 text-white mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                    What goes wrong without this
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.whatGoesWrong.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
                        <p className="text-[var(--slate-400)] text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Approach */}
                <div className="mb-12">
                  <h3 className="text-h4 text-white mb-6">Our approach</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {service.approach.map((step, i) => (
                      <div key={i} className="card-feature">
                        <div className="step-indicator mb-4">{step.step}</div>
                        <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                        <p className="text-sm text-[var(--slate-400)]">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Examples */}
                <div className="mb-12">
                  <h3 className="text-h4 text-white mb-6">Real-world examples</h3>
                  <div className="space-y-3">
                    {service.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-xl">
                        <Check className="w-5 h-5 text-[var(--cyan-glow)] flex-shrink-0" />
                        <p className="text-[var(--slate-400)]">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div className="mb-12">
                  <h3 className="text-h4 text-white mb-6">Integrations</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.integrations.map((integration, i) => (
                      <span key={i} className="px-4 py-2 bg-[var(--slate-800)] text-[var(--slate-400)] rounded-lg text-sm">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-h4 text-white mb-6">Frequently asked questions</h3>
                  <div className="space-y-0 border border-[var(--slate-800)] rounded-xl overflow-hidden">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-[var(--slate-800)] last:border-0">
                        <button 
                          onClick={() => toggleFaq(`${service.id}-${i}`)}
                          className="faq-question p-5 hover:bg-[var(--slate-800)]/50 transition-colors"
                        >
                          <span className="faq-question-text pr-8">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[var(--slate-400)] flex-shrink-0 transition-transform ${openFaq === `${service.id}-${i}` ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === `${service.id}-${i}` && (
                          <div className="px-5 pb-5">
                            <p className="text-[var(--slate-400)] leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-24 pt-24 border-t border-[var(--slate-800)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [CTA BAND — Gradient]
          ============================================ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)]"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Not sure what you need?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Schedule a free technical assessment. We'll analyze your current state 
              and recommend the right services for your situation.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Schedule Free Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

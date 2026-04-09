import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { 
  ArrowRight, 
  Check,
  Target,
  Users,
  Lightbulb,
  Award,
  MapPin,
  Linkedin,
  Mail
} from 'lucide-react';

const About = () => {
  const location = useLocation();

  // Handle hash-based scrolling
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    };

    scrollToSection();
  }, [location]);
  const values = [
    {
      icon: Target,
      title: 'Deliver Results',
      description: 'We measure success by client outcomes, not hours billed. Every engagement has defined KPIs and accountability.'
    },
    {
      icon: Users,
      title: 'Partner, Not Vendor',
      description: 'We embed with your team, share knowledge, and build internal capability. Your success is our success.'
    },
    {
      icon: Lightbulb,
      title: 'Solve Root Causes',
      description: 'We don\'t apply band-aids. We find and fix underlying problems so they stay fixed.'
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'We hire the best, invest in training, and maintain the highest technical standards in the industry.'
    }
  ];

  const certifications = [
    'Epicor Certified Partner',
    'Xemelgo Exclusive Partner',
    'Microsoft Gold Partner',
    'AWS Partner Network',
    'RFID Institute Certified'
  ];

  const timeline = [
    { year: '2009', event: 'Quartz Group founded', detail: 'Focused exclusively on Epicor ERP' },
    { year: '2012', event: '100th implementation', detail: 'Proven methodology established' },
    { year: '2015', event: 'Expanded to 25 consultants', detail: 'Multi-site deployment capability' },
    { year: '2018', event: 'Xemelgo partnership', detail: 'RFID integration expertise added' },
    { year: '2021', event: '500th implementation', detail: '99.2% on-time delivery rate' },
    { year: '2024', event: 'Kinetic specialization', detail: 'Cloud migration practice launched' }
  ];

  const stats = [
    { value: '15+', label: 'Years', sub: 'Epicor focus' },
    { value: '500+', label: 'Implementations', sub: '99.2% on-time' },
    { value: '50+', label: 'Consultants', sub: 'Average 8 years exp' },
    { value: '$2.4B', label: 'Client Revenue', sub: 'Supported annually' },
    { value: '127', label: 'Rescued Projects', sub: 'From failed partners' },
    { value: '47%', label: 'Efficiency Gain', sub: 'Average improvement' }
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — With Background Image]
          ============================================ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/office-interior.jpg" 
            alt="Quartz Group Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-transparent to-[var(--deep-navy)]/40"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-premium relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="tag mb-6 block">About Us</span>
            <h1 className="text-h1 text-white mb-6">
              The most technically sophisticated Epicor partner in North America
            </h1>
            <p className="text-body-lg">
              15 years. 500+ implementations. One mission: help manufacturers and distributors 
              achieve operational excellence through Epicor ERP.
            </p>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-[var(--slate-600)] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[var(--slate-400)] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ============================================
          [DATA BAND — Full Width]
          ============================================ */}
      <section className="section-band border-y border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-white font-medium mt-1">{stat.label}</p>
                <p className="text-sm text-[var(--slate-400)] mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [STORY SECTION — Two Column with Image]
          ============================================ */}
      <section id="story" className="section-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            src="/images/team-walkthrough.jpg" 
            alt="Manufacturing Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/85 to-[var(--deep-navy)]/65"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/50"></div>
        </div>

        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-micro mb-4 block">Our Story</span>
              <h2 className="text-h2 text-white mb-6">
                Built from frustration with failed implementations
              </h2>
              <div className="space-y-4 text-[var(--slate-400)]">
                <p>
                  Quartz Group was founded in 2009 by a team of Epicor consultants who were tired of seeing 
                  implementations fail. Projects that should take 6 months dragged on for 2 years. Budgets 
                  ballooned. Promises were broken.
                </p>
                <p>
                  We believed there was a better way. A methodology that eliminated scope creep. Fixed-price 
                  contracts that actually meant fixed price. Technical expertise that solved problems instead 
                  of creating them.
                </p>
                <p>
                  Today, we're the partner manufacturers call when failure is not an option. When they've 
                  been burned before. When they need a team that delivers what they promise.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--slate-800)]"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)] flex items-center justify-center">
                      <span className="text-xs font-bold text-[var(--electric-blue)]">{item.year.slice(-2)}</span>
                    </div>
                    <p className="text-white font-medium">{item.event}</p>
                    <p className="text-sm text-[var(--slate-400)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [VALUES SECTION — Light Band]
          ============================================ */}
      <section id="values" className="section-light">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro text-[var(--slate-600)] mb-4 block">Our Values</span>
            <h2 className="text-h2 text-[var(--deep-navy)] mb-6">
              How we work
            </h2>
            <p className="text-body text-[var(--slate-600)]">
              Our values aren't posters on a wall. They're the principles that guide every decision, 
              every interaction, every implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-white border border-[var(--slate-200)] rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[var(--electric-blue)]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-h4 text-[var(--deep-navy)] mb-3">{value.title}</h3>
                <p className="text-[var(--slate-600)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [DIFFERENTIATORS — Dark Band with Image]
          ============================================ */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-10">
          <img 
            src="/images/smart-factory.jpg" 
            alt="Smart Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--deep-navy)] to-transparent"></div>
        </div>

        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-micro mb-4 block">Why Quartz Group</span>
              <h2 className="text-h2 text-white mb-6">
                What makes us different
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Fixed-Price Contracts', desc: 'No change orders. No surprises. The price we quote is the price you pay.' },
                  { title: 'Penalty Clauses', desc: 'We put our money where our mouth is. Late delivery? We pay penalties.' },
                  { title: 'Knowledge Transfer', desc: 'We don\'t hoard knowledge. We train your team to be self-sufficient.' },
                  { title: 'Rescue Specialists', desc: '127 implementations rescued from failed partners. We know how to recover.' },
                  { title: 'Manufacturing DNA', desc: 'Most of our team came from manufacturing. We understand your world.' },
                  { title: '24/7 Support', desc: 'Critical issue at 2 AM? We answer. Average response: 2.3 hours.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <Check className="w-5 h-5 text-[var(--cyan-glow)] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-sm text-[var(--slate-400)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-micro mb-4 block">Certifications</span>
              <h3 className="text-h3 text-white mb-6">
                Industry recognition
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-xl">
                    <Award className="w-5 h-5 text-[var(--electric-blue)]" />
                    <span className="text-white">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [TEAM SECTION — Light Band with Full Team]
          ============================================ */}
      <section id="team" className="section-light">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-micro text-[var(--slate-600)] mb-4 block">Our Team</span>
            <h2 className="text-h2 text-[var(--deep-navy)] mb-6">
              Meet the Experts
            </h2>
            <p className="text-body text-[var(--slate-600)]">
              Our team here at Quartz Group recognizes that purchasing a world class software platform such as Epicor is only half of the "success" equation. We take nothing for granted and realize careful planning, a deep understanding of the client and their needs and an even deeper understanding of the software are all key to a successful project.
            </p>
            <p className="text-body text-[var(--slate-600)] mt-4">
              All Quartz staff has seen "life on the other side" and have non-IT backgrounds before coming into the IT world and more ultimately the IT consulting world. With an ever developing product such as Epicor, it is essential our consultants are constantly educated in the latest releases and new functionality of the software.
            </p>
          </div>

          {/* Team Grid - Alphabetical by First Name */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Adam Everett */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-adam-everett.png" alt="Adam Everett" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Adam Everett</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Project Manager</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">PMP certified. Adam has over 15 years experience in software development, management, and delivery.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Adam Maggied */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-adam-maggied.png" alt="Adam Maggied" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Adam Maggied</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Epicor Manufacturing and Distribution certified consultant. RFID Professional Institute certified associate. Adam has over 15 years of experience in information technology and ERP systems implementations.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Alejandra Arevalo */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-alejandra-arevalo.png" alt="Alejandra Arevalo" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Alejandra Arevalo</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Experienced ERP consultant with deep expertise in manufacturing and distribution implementations.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Asit Nagpal */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-asit-nagpal.png" alt="Asit Nagpal" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Asit Nagpal</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Technical consultant specializing in Epicor implementations with expertise in system configuration and optimization.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Audrey Mann-Monasmith */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-audrey-mann-monasmith.png" alt="Audrey Mann-Monasmith" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Audrey Mann-Monasmith</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Custom Solutions Group Manager</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Managing custom development projects and leading the technical solutions team.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Brittney Caine */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-brittney-caine.png" alt="Brittney Caine" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Brittney Caine</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Accounting & Administrative Assistant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Supporting accounting and administrative operations to keep the team running smoothly.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chris Smalley */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-chris-smalley.png" alt="Chris Smalley" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Chris Smalley</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Director, RFID Product Development</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Leading our RFID initiatives and Xemelgo partnership. Chris drives innovation in real-time inventory tracking solutions.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Denise Lang */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-denise-lang.png" alt="Denise Lang" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Denise Lang</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Finance Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Denise has over 10 years experience in ERP system implementation and consulting with a focus on finance modules and cost flow.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Don Agostino */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-don-agostino.png" alt="Don Agostino" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Don Agostino</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Don has 33 years of experience in manufacturing and manufacturing software consulting. His work focuses on scheduling and advanced scheduling, job tracking and costing, MRP and planning, Epicor tools and financials.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Don Blain */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-don-blain.png" alt="Don Blain" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Don Blain</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Operations Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Specializing in operational efficiency and process optimization for manufacturing and distribution clients.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Don Luoto */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-don-luoto.png" alt="Don Luoto" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Don Luoto</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Epicor Manufacturing and Distribution certified consultant. Don has been consulting on Epicor products since 1996 and is currently implementing and supporting Kinetic, Epicor 10, Epicor 9 and Vantage 8.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* George Esber */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-george-esber.png" alt="George Esber" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">George Esber</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Operations Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Focused on streamlining operations and improving efficiency for manufacturing clients.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Jason Campbell */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-jason-campbell.png" alt="Jason Campbell" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Jason Campbell</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Experienced in complex ERP implementations across multiple industries with expertise in manufacturing and distribution.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Jay Paquette */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-jay-paquette.png" alt="Jay Paquette" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Jay Paquette</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Project Manager</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Jay has over 20 years of experience in deploying enterprise application software with focus on Manufacturing (process and discrete) and Distribution companies. Innovative professional with dynamic implementation skills.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Jennifer Guhlin */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-jennifer-guhlin.png" alt="Jennifer Guhlin" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Jennifer Guhlin</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Technical Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Technical consultant with expertise in Epicor configuration and system optimization.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Ken Adams */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-ken-adams.png" alt="Ken Adams" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Ken Adams</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Application Support Specialist</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Application support specialist with deep Epicor knowledge and troubleshooting expertise.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Matt Hellwig */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-matt-hellwig.png" alt="Matt Hellwig" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Matt Hellwig</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">President</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Epicor Manufacturing and Distribution certified consultant. Matt has over 25 years of experience in manufacturing and distribution software consulting. RFID Professional Institute certified associate.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Matt McIntosh */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-matt-mcintosh.png" alt="Matt McIntosh" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Matt McIntosh</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Matt has nearly 20 years of hands-on experience in implementing, stabilizing, and optimizing Epicor ERP environments across manufacturing, distribution, and aerospace & defense organizations.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mike Gerbi */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-mike-gerbi.png" alt="Mike Gerbi" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Mike Gerbi</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Developer</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Epicor Tools & Technical certified consultant. Mike specializes in custom development and technical solutions.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Ron Stevenson */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-ron-stevenson.png" alt="Ron Stevenson" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Ron Stevenson</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Financial Consultant</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Expert in Epicor financial modules with deep knowledge of cost accounting and financial reporting.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sean McDaniel */}
            <div className="group bg-white border border-[var(--slate-200)] rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 flex items-center justify-center overflow-hidden">
                <img src="/images/team/team-sean-mcdaniel.png" alt="Sean McDaniel" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[var(--deep-navy)] group-hover:text-[var(--electric-blue)] transition-colors">Sean McDaniel</h4>
                <p className="text-[var(--electric-blue)] text-sm font-medium">Senior Software Engineer</p>
                <p className="text-gray-700 text-sm mt-3 line-clamp-4">Epicor Tools & Technical certified consultant. Sean develops custom solutions and integrations for complex client needs.</p>
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--slate-100)] flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[var(--slate-600)] max-w-2xl mx-auto">
              Whilst being a small, dynamic, responsive team, our numbers are sufficient that we are able to cover all aspects of the software in depth. We also strive to forge the very best relationships with the technical development team at Epicor for just that occasion when a challenge presents our team with a problem outside of our extensive knowledge.
            </p>
            <p className="text-[var(--deep-navy)] font-medium mt-4">
              Overall, every member of the team recognizes that your success is our success and this is what we live by day after day.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          [LOCATIONS — Dark Band with Image]
          ============================================ */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img 
            src="/images/supply-chain.jpg" 
            alt="Global Supply Chain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] to-transparent"></div>
        </div>

        <div className="container-premium relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro mb-4 block">Locations</span>
            <h2 className="text-h2 text-white mb-6">
              Serving North America
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: 'Chicago, IL', role: 'Headquarters', detail: 'Midwest manufacturing hub' },
              { city: 'Dallas, TX', role: 'Regional Office', detail: 'Southwest operations' },
              { city: 'Toronto, ON', role: 'Canadian Office', detail: 'Canada-wide support' }
            ].map((location, index) => (
              <div key={index} className="card-feature text-center">
                <MapPin className="w-8 h-8 text-[var(--electric-blue)] mx-auto mb-4" />
                <h4 className="text-white font-medium text-lg">{location.city}</h4>
                <p className="text-[var(--cyan-glow)] text-sm">{location.role}</p>
                <p className="text-[var(--slate-400)] text-sm mt-1">{location.detail}</p>
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
              Ready to work with us?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Schedule a conversation. We'll discuss your challenges, goals, and how we can help.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Schedule a Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

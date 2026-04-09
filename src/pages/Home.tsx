import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Target, 
  Zap,
  Check,
  Settings,
  Radio,
  ChevronRight,
  Quote,
  Calendar
} from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in');
      }, i * 100);
    });
  }, []);

  const stats = [
    { value: '500+', label: 'Implementations', sub: '99.2% on-time delivery' },
    { value: '15+', label: 'Years Experience', sub: 'Epicor since 2009' },
    { value: '$2.4B', label: 'Client Revenue', sub: 'Supported annually' },
    { value: '47%', label: 'Avg. Efficiency Gain', sub: 'Within 12 months' },
  ];

  const failurePoints = [
    {
      title: 'Scope Creep',
      desc: 'Projects balloon from 6 months to 2+ years',
      stat: '68% of ERP projects exceed timeline'
    },
    {
      title: 'Budget Overrun',
      desc: 'Hidden costs emerge post-go-live',
      stat: 'Average 178% over initial budget'
    },
    {
      title: 'User Adoption',
      desc: 'Teams revert to spreadsheets',
      stat: '54% report low user adoption'
    },
    {
      title: 'Data Migration',
      desc: 'Critical data lost or corrupted',
      stat: '37% experience data issues'
    }
  ];

  const services = [
    {
      icon: Settings,
      title: 'Implementation',
      desc: 'Zero-surprise deployments with our proven 5-phase methodology.',
      link: '/services#implementation'
    },
    {
      icon: Target,
      title: 'Consulting',
      desc: 'Strategic guidance from architects who have seen every edge case.',
      link: '/services#consulting'
    },
    {
      icon: Zap,
      title: 'Optimization',
      desc: 'Fine-tune existing systems for performance your users will notice.',
      link: '/services#optimization'
    },
    {
      icon: Clock,
      title: 'Support',
      desc: '24/7 response with average 2.3-hour resolution time.',
      link: '/services#support'
    }
  ];

  const integrations = [
    'Epicor Kinetic', 'Epicor 10', 'Epicor 9', 'Xemelgo RFID', 
    'Zebra Printers', 'Impinj Readers', 'Microsoft Azure', 'Power BI'
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — Full Bleed with Background Image]
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-manufacturing-new.jpg" 
            alt="Modern Manufacturing Facility"
            className="w-full h-full object-cover"
          />
          {/* Strong Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-[var(--deep-navy)]/30 to-[var(--deep-navy)]/60"></div>
          {/* Additional dark overlay for better contrast */}
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        {/* Floating Accent */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--electric-blue)]/10 rounded-full blur-3xl"></div>

        <div className="container-premium relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="animate-on-mount opacity-0 mb-6">
              <span className="tag">Epicor Certified Partner • 15+ Years</span>
            </div>

            {/* Headline */}
            <h1 className="animate-on-mount opacity-0 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Implementation partners{' '}
              <span className="text-gradient">who actually deliver</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-on-mount opacity-0 text-lg md:text-xl text-[var(--slate-400)] mb-8 max-w-2xl">
              500+ Epicor implementations. 99.2% on-time delivery. Zero scope creep. 
              We are the technical partner manufacturers call when failure is not an option.
            </p>

            {/* CTAs */}
            <div className="animate-on-mount opacity-0 flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="btn-primary">
                Schedule Technical Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="animate-on-mount opacity-0 flex flex-wrap items-center gap-6 text-sm text-[var(--slate-400)]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--cyan-glow)]" />
                <span>Epicor Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--cyan-glow)]" />
                <span>Xemelgo Exclusive Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--cyan-glow)]" />
                <span>24/7 Support</span>
              </div>
            </div>
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
          [DATA BAND — Full Width Metrics]
          ============================================ */}
      <section className="section-band border-y border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
          [PROBLEM SECTION — Dark Band with Image]
          ============================================ */}
      <section className="section-dark relative overflow-hidden">
        {/* Background Accent - Stronger overlay for readability */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            src="/images/manufacturing-cnc-new.jpg" 
            alt="CNC Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/80 to-[var(--deep-navy)]/60"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/50"></div>
        </div>

        <div className="container-premium relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-micro mb-4 block">The Reality</span>
            <h2 className="text-h2 text-white mb-6">
              Why most ERP projects fail
            </h2>
            <p className="text-body-lg">
              We've rescued 127 implementations that other partners abandoned. 
              Here's what goes wrong — and why it doesn't have to.
            </p>
          </div>

          {/* Failure Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {failurePoints.map((point, index) => (
              <div key={index} className="card-feature">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                  <span className="text-xs font-mono text-[var(--electric-blue)] bg-[var(--electric-blue)]/10 px-2 py-1 rounded">
                    {point.stat}
                  </span>
                </div>
                <p className="text-[var(--slate-400)]">{point.desc}</p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-12 callout-block">
            <p className="text-white font-medium">
              Our difference: Fixed-scope contracts with penalty clauses for delays. 
              We've never missed a go-live date.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          [SOLUTION SECTION — Two Column with Image]
          ============================================ */}
      <section className="section-light">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-micro text-[var(--slate-600)] mb-4 block">Our Approach</span>
              <h2 className="text-h2 text-[var(--deep-navy)] mb-6">
                Methodology born from 500+ implementations
              </h2>
              <p className="text-body text-[var(--slate-600)] mb-8">
                Every project follows our proven 5-phase framework. No surprises. 
                No scope creep. Just predictable, measurable outcomes.
              </p>

              {/* Steps */}
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Discovery', desc: 'Deep-dive into your processes, constraints, and objectives' },
                  { num: '02', title: 'Design', desc: 'Blueprint every workflow before a single configuration' },
                  { num: '03', title: 'Build', desc: 'Iterative development with weekly stakeholder reviews' },
                  { num: '04', title: 'Validate', desc: 'Rigorous testing with real data, real users, real scenarios' },
                  { num: '05', title: 'Deploy', desc: 'Phased go-live with 24/7 support through stabilization' }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="step-indicator flex-shrink-0">{step.num}</div>
                    <div>
                      <h4 className="font-semibold text-[var(--deep-navy)]">{step.title}</h4>
                      <p className="text-sm text-[var(--slate-600)]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)] rounded-3xl opacity-10 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/consulting-meeting-new.jpg" 
                  alt="Manufacturing Operations Center"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [SERVICES SECTION — Dark Band]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro mb-4 block">Services</span>
            <h2 className="text-h2 text-white mb-6">
              End-to-end Epicor expertise
            </h2>
            <p className="text-body-lg">
              From initial assessment to post-go-live optimization, 
              we cover the entire ERP lifecycle.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="card-feature group">
                <div className="w-12 h-12 rounded-xl bg-[var(--electric-blue)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--electric-blue)]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--electric-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--slate-400)] mb-4">{service.desc}</p>
                <span className="btn-ghost text-sm">
                  Learn more <ChevronRight className="w-4 h-4 inline" />
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          [CASE STUDY HIGHLIGHT — Dark Band with Accent]
          ============================================ */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-blue)]/5 to-transparent"></div>
        
        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-micro mb-4 block">Case Study</span>
              <h2 className="text-h2 text-white mb-6">
                Thortex: On time, on budget, zero surprises
              </h2>
              <p className="text-body-lg mb-8">
                A growing manufacturer wrestling with scaling challenges needed a partner 
                to handle the heavy lifting. We delivered Epicor 9 in 16 weeks — 
                every milestone hit on or ahead of schedule.
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-[var(--cyan-glow)]">16</p>
                  <p className="text-sm text-[var(--slate-400)]">Weeks</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--cyan-glow)]">100%</p>
                  <p className="text-sm text-[var(--slate-400)]">On Budget</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--cyan-glow)]">0</p>
                  <p className="text-sm text-[var(--slate-400)]">Change Orders</p>
                </div>
              </div>

              <Link to="/testimonials" className="btn-primary">
                Read More Success Stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Quote Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--electric-blue)]/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-2xl p-8">
                <Quote className="w-10 h-10 text-[var(--electric-blue)] mb-6" />
                <blockquote className="text-xl text-white leading-relaxed mb-8">
                  "Outstanding result! Quartz delivered our implementation of Epicor 9 
                  on time and on budget. Each milestone step was delivered on or ahead 
                  of schedule."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                    <span className="text-white font-bold">TK</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Tom Keough</p>
                    <p className="text-sm text-[var(--slate-400)]">Controller, Thortex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [INTEGRATION GRID — Light Band]
          ============================================ */}
      <section className="section-light">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-micro text-[var(--slate-600)] mb-4 block">Integrations</span>
            <h2 className="text-h2 text-[var(--deep-navy)] mb-6">
              Built for your ecosystem
            </h2>
            <p className="text-body text-[var(--slate-600)]">
              Deep integrations with the tools you already use. 
              No workarounds. No compromises.
            </p>
          </div>

          {/* Integration Logos */}
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-white border border-[var(--slate-200)] rounded-xl text-[var(--slate-600)] font-medium hover:border-[var(--electric-blue)] hover:text-[var(--electric-blue)] transition-colors cursor-default"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [RFID SECTION — Dark Band with Image]
          ============================================ */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            src="/images/rfid-warehouse-new.jpg" 
            alt="RFID in Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/80 to-[var(--deep-navy)]/60"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/50"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Radio className="w-5 h-5 text-[var(--cyan-glow)]" />
                <span className="text-micro text-[var(--cyan-glow)]">Xemelgo Exclusive Partner</span>
              </div>
              <h2 className="text-h2 text-white mb-6">
                Real-time visibility with RFID
              </h2>
              <p className="text-body-lg mb-8">
                99% inventory accuracy. 50% less search time. 24-hour setup. 
                Our Xemelgo-powered RFID solution integrates seamlessly with Epicor 
                for manufacturers who demand precision.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="card-stat">
                  <p className="text-3xl font-bold text-[var(--cyan-glow)]">99%</p>
                  <p className="text-sm text-[var(--slate-400)]">Inventory Accuracy</p>
                </div>
                <div className="card-stat">
                  <p className="text-3xl font-bold text-[var(--cyan-glow)]">&lt;12</p>
                  <p className="text-sm text-[var(--slate-400)]">Months to ROI</p>
                </div>
              </div>

              <a 
                href="https://quartztrack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Explore RFID Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--cyan-glow)]/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-[var(--slate-400)]">Live Inventory</span>
                  <span className="flex items-center gap-2 text-xs text-[var(--cyan-glow)]">
                    <span className="w-2 h-2 bg-[var(--cyan-glow)] rounded-full animate-pulse"></span>
                    Real-time
                  </span>
                </div>
                
                {/* Mock Inventory Table */}
                <div className="space-y-3">
                  {[
                    { item: 'Widget A-47', location: 'Zone 3-B', qty: '2,847', status: 'OK' },
                    { item: 'Component X-12', location: 'Zone 1-A', qty: '1,203', status: 'OK' },
                    { item: 'Assembly Z-9', location: 'Zone 2-C', qty: '456', status: 'LOW' },
                    { item: 'Part M-33', location: 'Zone 4-D', qty: '8,921', status: 'OK' },
                  ].map((row, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-[var(--slate-800)] last:border-0">
                      <div>
                        <p className="text-sm text-white">{row.item}</p>
                        <p className="text-xs text-[var(--slate-400)]">{row.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white font-mono">{row.qty}</p>
                        <span className={`text-xs ${row.status === 'OK' ? 'text-[var(--cyan-glow)]' : 'text-amber-400'}`}>
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [TESTIMONIALS — Dark Band]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro mb-4 block">Testimonials</span>
            <h2 className="text-h2 text-white mb-6">
              Trusted by industry leaders
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="card-feature">
                <Quote className="w-8 h-8 text-[var(--electric-blue)] mb-4" />
                <p className="text-[var(--slate-400)] mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-[var(--slate-400)]">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          [BLOG SECTION — Dark Band]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-micro mb-4 block">Latest Insights</span>
              <h2 className="text-h2 text-white">
                From the blog
              </h2>
            </div>
            <Link to="/blog" className="btn-ghost hidden sm:flex">
              View all articles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link 
                key={index}
                to={`/blog/${post.slug}`}
                className="group card-feature"
              >
                {/* Blog Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 -mx-8 -mt-8">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-[var(--deep-navy)]/50 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 tag">{post.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--electric-blue)] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--slate-400)] mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-[var(--slate-400)]">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="text-center mt-8 sm:hidden">
            <Link to="/blog" className="btn-secondary">
              View all articles
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          [CTA BAND — Gradient]
          ============================================ */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)]"></div>
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to eliminate ERP risk?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Schedule a technical assessment. We'll analyze your current state 
              and show you exactly how to get to your desired state — on time, on budget, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Schedule Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a href="tel:+18001234567" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Call 1-800-123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

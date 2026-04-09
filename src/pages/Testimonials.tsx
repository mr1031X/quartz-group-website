import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, ChevronLeft, ChevronRight, Star, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const caseStudies = [
    {
      company: 'Thortex',
      industry: 'Manufacturing',
      challenge: 'Growing business, no time for complex ERP implementation',
      solution: 'Epicor 9 Quick Launch program',
      results: [
        { metric: '16 weeks', label: 'Implementation' },
        { metric: '100%', label: 'On Budget' },
        { metric: '0', label: 'Change Orders' }
      ],
      quote: 'Outstanding result! Quartz delivered our implementation of Epicor 9 on time and on budget. We opted for their Quick Launch program as we were so busy wrestling with the challenges of a growing business we needed our chosen partner to carry out all the heavy lifting for us.',
      author: 'Tom Keough',
      title: 'Controller'
    },
    {
      company: 'Aware Products',
      industry: 'Distribution',
      challenge: 'Previous consultants couldn\'t solve complex issues',
      solution: 'Ongoing consulting and optimization',
      results: [
        { metric: '2+ years', label: 'Partnership' },
        { metric: '47%', label: 'Efficiency Gain' },
        { metric: '24/7', label: 'Support' }
      ],
      quote: 'I have used Quartz for a couple years now. The team they have assembled proves to be a priceless asset every time I use them. I have never hesitated to make the call to solicit their help, thoughts and in many cases their ideas.',
      author: 'Jeffrey A Baum',
      title: 'Director, Information Technology'
    },
    {
      company: 'Techniks',
      industry: 'Manufacturing',
      challenge: 'Legacy configurator needed replacement',
      solution: 'Epicor Product Configurator implementation',
      results: [
        { metric: '100%', label: 'Config Accuracy' },
        { metric: '75%', label: 'Quote Time Reduction' },
        { metric: '6 sites', label: 'Multi-site Rollout' }
      ],
      quote: 'We are very happy with the Epicor Product Configurator module, which replaced our legacy, highly-customized solution. We could not have been as successful without the support of Don Luoto and the Quartz team.',
      author: 'Gene Horlander',
      title: 'CIO'
    },
    {
      company: 'Tru-Flex Metal Hose',
      industry: 'Manufacturing',
      challenge: 'Previous partners couldn\'t meet growing demands',
      solution: 'Emergency rescue + ongoing support',
      results: [
        { metric: '2 weeks', label: 'Rescue Timeline' },
        { metric: 'Multiple', label: 'Resources Deployed' },
        { metric: '100%', label: 'Expectations Exceeded' }
      ],
      quote: 'Our previous consulting partners could not meet our ever-growing challenges as our business grew. Quartz Group quite literally came to our rescue with little notice and multiple resources who could dive into our project, delivering results on-time and on-budget well exceeding our expectations.',
      author: 'Kathy Ward, CPA',
      title: 'Chief Financial Officer'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — With Background Image]
          ============================================ */}
      <section className="section-hero pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <img 
            src="/images/team-walkthrough.jpg" 
            alt="Manufacturing team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-transparent to-[var(--deep-navy)]/40"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl">
            <span className="tag mb-6 block">Testimonials</span>
            <h1 className="text-h1 text-white mb-6">
              Don't take our word for it
            </h1>
            <p className="text-body-lg">
              500+ implementations. 99.2% on-time delivery. Here's what our clients say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          [FEATURED TESTIMONIAL — Large Quote]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-3xl p-8 md:p-16">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-[var(--electric-blue)]/20" />
              
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-10">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-[var(--slate-400)]">{testimonials[activeIndex].title}</p>
                    <p className="text-[var(--slate-600)] text-sm">{testimonials[activeIndex].company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-[var(--slate-800)] flex items-center justify-center hover:bg-[var(--slate-700)] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-[var(--slate-800)] flex items-center justify-center hover:bg-[var(--slate-700)] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? 'w-8 bg-[var(--electric-blue)]' : 'w-2 bg-[var(--slate-600)]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [CASE STUDIES — Grid]
          ============================================ */}
      <section className="section-dark border-t border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro mb-4 block">Case Studies</span>
            <h2 className="text-h2 text-white mb-6">
              Real results, real clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card-feature">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-h4 text-white">{study.company}</h3>
                    <p className="text-sm text-[var(--slate-400)]">{study.industry}</p>
                  </div>
                  <span className="tag">{study.solution}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, i) => (
                    <div key={i} className="text-center p-3 bg-[var(--deep-navy)] rounded-lg">
                      <p className="text-lg font-bold text-[var(--cyan-glow)]">{result.metric}</p>
                      <p className="text-xs text-[var(--slate-400)]">{result.label}</p>
                    </div>
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[var(--electric-blue)]/50 mb-4" />
                <p className="text-[var(--slate-400)] italic mb-6 line-clamp-3">
                  "{study.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--slate-800)]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {study.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{study.author}</p>
                    <p className="text-xs text-[var(--slate-400)]">{study.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [METRICS BAND — Full Width]
          ============================================ */}
      <section className="section-band border-y border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'Client Satisfaction', icon: CheckCircle },
              { value: '94%', label: 'First-Call Resolution', icon: CheckCircle },
              { value: '2.3hr', label: 'Avg Response Time', icon: Clock },
              { value: '99.2%', label: 'On-Time Delivery', icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-[var(--electric-blue)] mx-auto mb-4" />
                <p className="metric-large text-white">{stat.value}</p>
                <p className="text-[var(--slate-400)] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [ALL TESTIMONIALS — Grid]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro mb-4 block">More Testimonials</span>
            <h2 className="text-h2 text-white mb-6">
              What clients say about us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-feature">
                <Quote className="w-8 h-8 text-[var(--electric-blue)]/50 mb-4" />
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
                    <p className="text-xs text-[var(--slate-400)]">{testimonial.title}</p>
                    <p className="text-xs text-[var(--slate-600)]">{testimonial.company}</p>
                  </div>
                </div>
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
            src="/images/consulting-meeting.jpg" 
            alt="Business consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/95 to-[var(--cyan-glow)]/95"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Join our satisfied clients
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Ready to experience the Quartz Group difference? Let's discuss your project.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

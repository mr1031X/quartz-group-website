import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Loader2,
  Check
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '1-800-123-4567',
      link: 'tel:+18001234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@thequartzgroup.com',
      link: 'mailto:info@thequartzgroup.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'Chicago, IL • Dallas, TX • Toronto, ON',
      link: null
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri 8am-6pm ET • 24/7 Emergency',
      link: null
    }
  ];

  const services = [
    'Epicor Implementation',
    'Epicor Consulting',
    'Epicor Optimization',
    'Epicor Support',
    'Epicor Upgrades',
    'Cloud Migration',
    'RFID Integration',
    'Not Sure - Need Guidance'
  ];

  const differentiators = [
    'Fixed-price contracts — no surprises',
    'Penalty clauses for late delivery',
    'Average 2.3-hour response time',
    '99.2% on-time delivery rate',
    '127 rescued implementations'
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — With Background Image]
          ============================================ */}
      <section className="section-hero pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <img 
            src="/images/office-interior.jpg" 
            alt="Modern office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-transparent to-[var(--deep-navy)]/40"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl">
            <span className="tag mb-6 block">Contact</span>
            <h1 className="text-h1 text-white mb-6">
              Let's talk about your project
            </h1>
            <p className="text-body-lg">
              Schedule a free technical assessment. We'll analyze your current state 
              and show you exactly how to get to your desired state.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          [CONTACT INFO — Band]
          ============================================ */}
      <section className="section-band border-y border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="w-12 h-12 rounded-xl bg-[var(--electric-blue)]/10 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <info.icon className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
                <p className="text-micro mb-2">{info.title}</p>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-white hover:text-[var(--electric-blue)] transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-white">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [FORM SECTION — Two Column]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-h3 text-white mb-2">Send us a message</h2>
              <p className="text-[var(--slate-400)] mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="card-feature text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[var(--cyan-glow)]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[var(--cyan-glow)]" />
                  </div>
                  <h3 className="text-h4 text-white mb-4">Thank you!</h3>
                  <p className="text-[var(--slate-400)]">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-lg text-white placeholder-[var(--slate-400)] focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-lg text-white placeholder-[var(--slate-400)] focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-lg text-white placeholder-[var(--slate-400)] focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-lg text-white placeholder-[var(--slate-400)] focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-lg text-white focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-lg text-white placeholder-[var(--slate-400)] focus:outline-none focus:border-[var(--electric-blue)] transition-colors resize-none"
                      placeholder="Tell us about your project, challenges, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="card-feature">
                <h3 className="text-h4 text-white mb-6">Why choose Quartz Group?</h3>
                <div className="space-y-4">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[var(--cyan-glow)] flex-shrink-0 mt-0.5" />
                      <p className="text-[var(--slate-400)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Support */}
              <div className="card-feature bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 border-[var(--electric-blue)]/30">
                <h3 className="text-h4 text-white mb-4">Emergency Support</h3>
                <p className="text-[var(--slate-400)] mb-6">
                  Critical issue? Our emergency hotline is available 24/7/365 for premium clients.
                </p>
                <a 
                  href="tel:+18001234567"
                  className="inline-flex items-center text-[var(--electric-blue)] font-medium hover:underline"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  1-800-123-4567
                </a>
              </div>

              {/* What to Expect */}
              <div className="card-feature">
                <h3 className="text-h4 text-white mb-4">What to expect</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--electric-blue)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[var(--electric-blue)]">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Initial Response</p>
                      <p className="text-sm text-[var(--slate-400)]">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--electric-blue)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[var(--electric-blue)]">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Discovery Call</p>
                      <p className="text-sm text-[var(--slate-400)]">Understand your needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--electric-blue)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[var(--electric-blue)]">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Proposal</p>
                      <p className="text-sm text-[var(--slate-400)]">Fixed-price, detailed scope</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [CTA BAND — With Background Image]
          ============================================ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/support-center.jpg" 
            alt="Support center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/95 to-[var(--cyan-glow)]/95"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Prefer to talk now?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Call us at 1-800-123-4567. Our team is available Monday-Friday, 8am-6pm ET.
            </p>
            <a 
              href="tel:+18001234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

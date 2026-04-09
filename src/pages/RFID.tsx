import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Radio, 
  Scan,
  Package,
  Truck,
  Check,
  Zap,
  Clock,
  TrendingUp,
  Target,
  AlertTriangle
} from 'lucide-react';

const RFID = () => {
  const features = [
    {
      icon: Scan,
      title: 'Work-in-Process Tracking',
      description: 'Monitor WIP throughout every stage of production using sensors on the shop floor. Real-time visibility compliments lean manufacturing principles.',
      benefit: 'Eliminate manual scans, reduce WIP inventory by 30%'
    },
    {
      icon: Package,
      title: 'Asset Tracking',
      description: 'Manage asset expiration and calibration schedules with ease. Be alerted to important dates and get notified immediately if expired assets are detected.',
      benefit: 'Never miss a calibration, reduce asset search time by 80%'
    },
    {
      icon: Radio,
      title: 'Inventory Management',
      description: 'Manage your inventory with astonishing ease and unprecedented accuracy. From raw materials to finished goods, achieve 99%+ inventory accuracy.',
      benefit: '99%+ accuracy, eliminate physical counts'
    },
    {
      icon: Truck,
      title: 'Shipment Tracking',
      description: 'From staging to shipping, receiving to verification, follow every order through each step of the journey with complete visibility.',
      benefit: 'Real-time shipment status, automatic ASN generation'
    }
  ];

  const stats = [
    { value: '99%', label: 'Inventory Accuracy', icon: Target },
    { value: '50%', label: 'Less Search Time', icon: Clock },
    { value: '24h', label: 'Setup Time', icon: Zap },
    { value: '<12', label: 'Months ROI', icon: TrendingUp }
  ];

  const integrations = [
    'Seamless Epicor Kinetic integration',
    'Real-time data synchronization',
    'Automated inventory transactions',
    'Touchless data capture',
    'Mobile-friendly interface',
    'Cloud-based architecture'
  ];

  const whatGoesWrong = [
    'Manual inventory counts consume hundreds of hours monthly',
    'WIP tracking requires constant manual updates',
    'Asset location unknown, causing production delays',
    'Shipping errors due to incorrect inventory data',
    'Year-end physical inventory shuts down operations'
  ];

  const approach = [
    { step: '01', title: 'Assess', desc: 'Evaluate your environment, tag requirements, and integration points' },
    { step: '02', title: 'Design', desc: 'Tag placement strategy, reader positioning, Epicor integration mapping' },
    { step: '03', title: 'Deploy', desc: 'Hardware installation, software configuration, system integration' },
    { step: '04', title: 'Optimize', desc: 'Fine-tune read zones, validate accuracy, train your team' }
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — Full Bleed with Background Image]
          ============================================ */}
      <section className="section-hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/rfid-manufacturing.jpg" 
            alt="RFID in manufacturing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-[var(--deep-navy)]/30 to-[var(--deep-navy)]/60"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        {/* Accent Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--cyan-glow)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[var(--electric-blue)]/10 rounded-full blur-3xl"></div>

        <div className="container-premium relative z-10 pt-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--cyan-glow)]/10 flex items-center justify-center">
                <Radio className="w-5 h-5 text-[var(--cyan-glow)]" />
              </div>
              <span className="text-micro text-[var(--cyan-glow)]">Xemelgo Exclusive Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-hero text-white mb-8">
              Epicor + RFID:{' '}
              <span className="text-gradient">Real-time visibility</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-[var(--slate-400)] mb-10 max-w-2xl">
              99% inventory accuracy. 50% less search time. 24-hour setup. 
              Xemelgo RFID solutions seamlessly integrated with Epicor ERP for 
              manufacturers who demand precision.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="https://quartztrack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit QuartzTrack
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Link to="/contact" className="btn-secondary">
                Talk to an RFID Expert
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-stat text-center">
                  <stat.icon className="w-6 h-6 text-[var(--cyan-glow)] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-[var(--slate-400)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [PROBLEM SECTION — Dark Band]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="max-w-3xl mb-12">
            <span className="text-micro mb-4 block">The Problem</span>
            <h2 className="text-h2 text-white mb-6">
              Manual tracking is costing you
            </h2>
            <p className="text-body-lg">
              Barcodes require line-of-sight. Manual counts consume resources. 
              Real-time visibility is impossible. Here's what that costs you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatGoesWrong.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-xl">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-[var(--slate-400)] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [SOLUTION SECTION — Light Band]
          ============================================ */}
      <section className="section-light">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro text-[var(--slate-600)] mb-4 block">The Solution</span>
            <h2 className="text-h2 text-[var(--deep-navy)] mb-6">
              Four ways RFID transforms operations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white border border-[var(--slate-200)] rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[var(--electric-blue)]/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-h4 text-[var(--deep-navy)] mb-3">{feature.title}</h3>
                <p className="text-[var(--slate-600)] mb-4">{feature.description}</p>
                <div className="flex items-center gap-2 p-3 bg-[var(--cyan-glow)]/10 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-[var(--cyan-glow)]" />
                  <span className="text-sm text-[var(--deep-navy)] font-medium">{feature.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [INTEGRATION SECTION — Dark Band]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-micro mb-4 block">Integration</span>
              <h2 className="text-h2 text-white mb-6">
                Seamlessly connected to Epicor
              </h2>
              <p className="text-body text-[var(--slate-400)] mb-8">
                Our Xemelgo-powered RFID solution integrates directly with Epicor Kinetic, 
                providing real-time data synchronization that eliminates manual entry and reduces errors.
              </p>

              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[var(--cyan-glow)]" />
                    <span className="text-[var(--slate-400)]">{integration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--cyan-glow)]/10 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/images/rfid-technology.jpg" 
                  alt="RFID technology integration"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--electric-blue)] flex items-center justify-center">
                        <span className="text-white font-bold">E</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Epicor Kinetic</p>
                        <p className="text-xs text-[var(--slate-400)]">ERP System</p>
                      </div>
                    </div>
                    <div className="text-2xl text-[var(--cyan-glow)]">⇄</div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--cyan-glow)] flex items-center justify-center">
                        <Radio className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Xemelgo</p>
                        <p className="text-xs text-[var(--slate-400)]">RFID Platform</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--cyan-glow)] rounded-full animate-pulse"></span>
                    <span className="text-xs text-[var(--slate-400)]">Real-time sync active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [APPROACH SECTION — Light Band]
          ============================================ */}
      <section className="section-light">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-micro text-[var(--slate-600)] mb-4 block">Our Approach</span>
            <h2 className="text-h2 text-[var(--deep-navy)] mb-6">
              From assessment to live in 24 hours
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={index} className="p-6 bg-white border border-[var(--slate-200)] rounded-2xl">
                <div className="step-indicator mb-4">{step.step}</div>
                <h4 className="text-[var(--deep-navy)] font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-[var(--slate-600)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [PARTNERS — Band]
          ============================================ */}
      <section className="section-band border-y border-[var(--slate-800)]">
        <div className="container-premium">
          <p className="text-micro text-center mb-8">Trusted Technology Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Epicor', 'Xemelgo', 'Zebra', 'Impinj', 'Microsoft', 'AWS'].map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-[var(--slate-600)] hover:text-[var(--electric-blue)] transition-colors cursor-default">
                {partner}
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
            src="/images/inventory-management.jpg" 
            alt="Inventory management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/95 to-[var(--cyan-glow)]/95"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Ready to see RFID in action?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Visit QuartzTrack to schedule a demo and see how RFID can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://quartztrack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Explore QuartzTrack
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RFID;

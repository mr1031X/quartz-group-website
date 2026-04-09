import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Award, Users, Target, Lightbulb, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      name: 'Matt Hellwig',
      role: 'President',
      department: 'Leadership',
      bio: 'Epicor Manufacturing and Distribution certified consultant. Matt has over 25 years of experience in manufacturing and distribution software consulting. RFID Professional Institute certified associate.',
      certifications: ['Epicor M&D Certified', 'RFID Professional Institute'],
      image: '/images/team-matt-hellwig.jpg',
    },
    {
      name: 'Adam Everett',
      role: 'Senior Project Manager',
      department: 'Project Consultants',
      bio: 'PMP certified. Adam has over 15 years experience in software development, management, and delivery.',
      certifications: ['PMP Certified'],
      image: '/images/team-adam-everett.jpg',
    },
    {
      name: 'Adam Maggied',
      role: 'Senior Consultant',
      department: 'Project Consultants',
      bio: 'Epicor Manufacturing and Distribution certified consultant. RFID Professional Institute certified associate. Adam has over 15 years of experience in information technology and ERP systems implementations.',
      certifications: ['Epicor M&D Certified', 'RFID Professional Institute'],
      image: '/images/team-adam-maggied.jpg',
    },
    {
      name: 'Chris Smalley',
      role: 'Director, RFID Product Development',
      department: 'Leadership',
      bio: 'Leading our RFID initiatives and Xemelgo partnership. Chris drives innovation in real-time inventory tracking solutions.',
      certifications: ['RFID Professional Institute'],
      image: '/images/team-chris-smalley.jpg',
    },
    {
      name: 'Denise Lang',
      role: 'Senior Finance Consultant',
      department: 'Project Consultants',
      bio: 'Denise has over 10 years experience in ERP system implementation and consulting with a focus on finance modules and cost flow.',
      certifications: ['Epicor Finance Certified'],
      image: '/images/team-denise-lang.jpg',
    },
    {
      name: 'Don Agostino',
      role: 'Senior Consultant',
      department: 'Project Consultants',
      bio: 'Don has 33 years of experience in manufacturing and manufacturing software consulting. His work focuses on scheduling and advanced scheduling, job tracking and costing, MRP and planning, Epicor tools and financials.',
      certifications: ['Epicor M&D Certified'],
      image: '/images/team-don-agostino.jpg',
    },
    {
      name: 'Don Blain',
      role: 'Operations Consultant',
      department: 'Project Consultants',
      bio: 'Specializing in operational efficiency and process optimization for manufacturing and distribution clients.',
      certifications: ['Epicor Operations Certified'],
      image: '/images/team-don-blain.jpg',
    },
    {
      name: 'Don Luoto',
      role: 'Senior Consultant',
      department: 'Project Consultants',
      bio: 'Epicor Manufacturing and Distribution certified consultant. Don has been consulting on Epicor products since 1996 and is currently implementing and supporting Kinetic, Epicor 10, Epicor 9 and Vantage 8.',
      certifications: ['Epicor M&D Certified'],
      image: '/images/team-don-luoto.jpg',
    },
    {
      name: 'George Esber',
      role: 'Operations Consultant',
      department: 'Project Consultants',
      bio: 'Focused on streamlining operations and improving efficiency for manufacturing clients.',
      certifications: ['Epicor Operations Certified'],
      image: '/images/team-george-esber.jpg',
    },
    {
      name: 'Jason Campbell',
      role: 'Senior Consultant',
      department: 'Project Consultants',
      bio: 'Experienced in complex ERP implementations across multiple industries with expertise in manufacturing and distribution.',
      certifications: ['Epicor M&D Certified'],
      image: '/images/team-jason-campbell.jpg',
    },
    {
      name: 'Jay Paquette',
      role: 'Senior Project Manager',
      department: 'Project Consultants',
      bio: 'Jay has over 20 years of experience in deploying enterprise application software with focus on Manufacturing (process and discrete) and Distribution companies. Innovative professional with dynamic implementation skills, ranging from managing teams/projects, consulting and support.',
      certifications: ['PMP Certified', 'Epicor M&D Certified'],
      image: '/images/team-jay-paquette.jpg',
    },
    {
      name: 'Matt McIntosh',
      role: 'Senior Consultant',
      department: 'Project Consultants',
      bio: 'Matt has nearly 20 years of hands-on experience in implementing, stabilizing, and optimizing Epicor ERP environments across manufacturing, distribution, and aerospace & defense organizations. He specializes in high-risk ERP initiatives where financial accuracy, operational discipline, and regulatory compliance cannot fail.',
      certifications: ['Epicor M&D Certified', 'AS9100 Specialist'],
      image: '/images/team-matt-mcintosh.jpg',
    },
    {
      name: 'Mike Gerbi',
      role: 'Senior Developer',
      department: 'Custom Solutions Group',
      bio: 'Epicor Tools & Technical certified consultant. Mike specializes in custom development and technical solutions.',
      certifications: ['Epicor Tools & Technical Certified'],
      image: '/images/team-mike-gerbi.jpg',
    },
    {
      name: 'Ron Stevenson',
      role: 'Senior Financial Consultant',
      department: 'Project Consultants',
      bio: 'Expert in Epicor financial modules with deep knowledge of cost accounting and financial reporting.',
      certifications: ['Epicor Finance Certified'],
      image: '/images/team-ron-stevenson.jpg',
    },
    {
      name: 'Sean McDaniel',
      role: 'Senior Software Engineer',
      department: 'Custom Solutions Group',
      bio: 'Epicor Tools & Technical certified consultant. Sean develops custom solutions and integrations for complex client needs.',
      certifications: ['Epicor Tools & Technical Certified'],
      image: '/images/team-sean-mcdaniel.jpg',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Deliver Results',
      description: 'We measure success by client outcomes, not hours billed. Every engagement has defined KPIs and accountability.',
    },
    {
      icon: Users,
      title: 'Partner, Not Vendor',
      description: 'We embed with your team, share knowledge, and build internal capability. Your success is our success.',
    },
    {
      icon: Lightbulb,
      title: 'Solve Root Causes',
      description: "We don't apply band-aids. We find and fix underlying problems so they stay fixed.",
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'We hire the best, invest in training, and maintain the highest technical standards in the industry.',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f36] to-[#0a0e27]"></div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#635bff]/10 text-[#635bff] mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Team
            </h1>
            <div className="space-y-4 text-lg text-[#8f96b3] leading-relaxed">
              <p>
                Our team here at Quartz Group recognizes that purchasing a world class software platform such as Epicor is only half of the "success" equation. We take nothing for granted and realize careful planning, a deep understanding of the client and their needs and an even deeper understanding of the software are all key to a successful project.
              </p>
              <p>
                All Quartz staff has seen "life on the other side" and have non-IT backgrounds before coming into the IT world and more ultimately the IT consulting world. With an ever developing product such as Epicor, it is essential our consultants are constantly educated in the latest releases and new functionality of the software.
              </p>
              <p>
                Whilst being a small, dynamic, responsive team, our numbers are sufficient that we are able to cover all aspects of the software in depth. We also strive to forge the very best relationships with the technical development team at Epicor for just that occasion when a challenge presents our team with problem outside of our extensive knowledge.
              </p>
              <p className="text-white font-medium">
                Overall, every member of the team recognizes that your success is our success and this is what we live by day after day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 border-y border-[#2d3348]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-[#635bff]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#635bff]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[#8f96b3]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet the Experts
            </h2>
            <p className="text-[#8f96b3] max-w-2xl mx-auto">
              Our team of certified Epicor consultants brings decades of combined experience in ERP implementation, consulting, and support.
            </p>
          </div>

          <div className="team-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card group bg-[#1a1f36] border border-[#2d3348] rounded-xl overflow-hidden hover:border-[#635bff] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-square bg-gradient-to-br from-[#635bff]/20 to-[#00d4aa]/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#635bff] to-[#00d4aa] flex items-center justify-center text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#635bff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#00d4aa] font-medium">{member.role}</p>
                    <p className="text-xs text-[#5e6685]">{member.department}</p>
                  </div>

                  <p className="text-sm text-[#8f96b3] mb-4 line-clamp-4">
                    {member.bio}
                  </p>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#635bff]/10 text-[#635bff]"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-[#2d3348] flex items-center justify-center hover:bg-[#635bff] transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#2d3348] flex items-center justify-center hover:bg-[#635bff] transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 border-t border-[#2d3348]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Experience', sub: 'Epicor focus' },
              { value: '500+', label: 'Implementations', sub: '99.2% on-time' },
              { value: '15', label: 'Team Members', sub: 'Average 8 years exp' },
              { value: '127', label: 'Rescued Projects', sub: 'From failed partners' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white font-medium">{stat.label}</p>
                <p className="text-sm text-[#5e6685]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-[#8f96b3] mb-8">
            Give us a call or contact us and let's get started on your future!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-800-449-3155"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#7b73ff] transition-colors"
            >
              Call 1-800-449-3155
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#2d3348] text-white font-semibold rounded-lg hover:border-[#635bff] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

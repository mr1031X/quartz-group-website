import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[var(--deep-navy)]">
      {/* Header */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-grid opacity-50"></div>
        <div className="container-premium relative z-10">
          <Link 
            to="/"
            className="inline-flex items-center text-[var(--slate-400)] hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-h1 text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-[var(--slate-800)]">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-['Inter_Tight'] prose-p:text-[var(--slate-400)] prose-li:text-[var(--slate-400)] prose-strong:text-white">
            <p className="text-[var(--slate-600)] mb-8">
              Last updated: March 4, 2026
            </p>

            <h2>Introduction</h2>
            <p>
              Quartz Group, Inc. ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal data. This privacy policy will inform you about how we look after your personal 
              data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address, telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2>Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul>
              <li>The right to request access to your personal data</li>
              <li>The right to request correction of your personal data</li>
              <li>The right to request erasure of your personal data</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to request restriction of processing your personal data</li>
              <li>The right to request transfer of your personal data</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@thequartzgroup.com<br />
              <strong>Address:</strong> 123 Business Street, Suite 100, Chicago, IL 12345<br />
              <strong>Phone:</strong> 1-800-123-4567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

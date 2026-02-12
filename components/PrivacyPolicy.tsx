
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="text-[#FFB800]" size={40} />
          <h1 className="text-4xl lg:text-5xl font-[900] text-gray-900">Privacy Policy</h1>
        </div>

        <div className="text-gray-600 mb-8">
          <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
            <p>
              At Steam Cleaner Service, we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our services in the
              Greater Orlando and Kissimmee, FL area.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="mb-3">When you contact us or book our services, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Your name, phone number, and email address</li>
              <li><strong>Service Details:</strong> Your address, service preferences, and appointment information</li>
              <li><strong>Payment Information:</strong> Billing details necessary to process your payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact you to schedule and confirm appointments</li>
              <li>Provide our steam cleaning services at your location</li>
              <li>Send appointment reminders and follow-up communications</li>
              <li>Process payments for services rendered</li>
              <li>Improve our services and customer experience</li>
              <li>Send occasional promotional offers (you can opt out anytime)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Analytics</h2>
            <p className="mb-3">
              Our website uses cookies and analytics tools to improve your browsing experience and help us understand how
              visitors use our site. We use:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> To track website traffic and user behavior</li>
              <li><strong>Advertising Cookies:</strong> To show you relevant ads and measure campaign effectiveness</li>
            </ul>
            <p className="mt-3">
              You can disable cookies in your browser settings, but this may affect your experience on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="mb-3">
              We work with trusted third-party services to help run our business, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Ads:</strong> For advertising and marketing campaigns</li>
              <li><strong>Payment Processors:</strong> To securely process your payments</li>
            </ul>
            <p className="mt-3">
              These third parties have their own privacy policies and are responsible for their own data practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Information Is Not Sold</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              Your data is used solely to provide you with excellent service and stay in touch about our cleaning services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-3">
              If you have any questions or concerns about this Privacy Policy or how we handle your information,
              please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900 mb-2">Steam Cleaner Service</p>
              <p>Greater Orlando & Kissimmee, FL</p>
              <p className="mt-2">
                <strong>Phone:</strong> <a href="tel:4077597208" className="text-[#FFB800] hover:underline">(407) 759-7208</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="inline-flex items-center text-[#FFB800] hover:text-[#e6a600] font-bold transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

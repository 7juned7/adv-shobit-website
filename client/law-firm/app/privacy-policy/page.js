export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Anurag Narain & Associates, a law firm in Lucknow.",
};

export default function PrivacyPolicy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-34 md:py-44">
      <h1 className="text-4xl md:text-5xl font-heading mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-600 mb-10">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-6 text-gray-700">

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email,
          phone number, and any details you provide through contact forms.
        </p>

        <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
        <p>
          Your information is used to respond to inquiries, provide legal
          consultation, and improve our services.
        </p>

        <h2 className="text-2xl font-semibold">3. Use of Analytics</h2>
        <p>
          We may use tools like Google Analytics to understand how visitors
          interact with our website. These tools may collect information such
          as your IP address, browser type, device information, and pages visited.
          This data is used only to improve website performance and user experience.
        </p>

        <h2 className="text-2xl font-semibold">4. Cookies</h2>
        <p>
          Our website uses cookies to enhance user experience and analyze
          website traffic. Cookies are small data files stored on your device.
          By continuing to use our website, you consent to the use of cookies.
        </p>

        <h2 className="text-2xl font-semibold">5. Confidentiality</h2>
        <p>
          We maintain strict confidentiality of all client information.
          However, submitting a form does not create a lawyer-client relationship.
        </p>

        <h2 className="text-2xl font-semibold">6. Data Security</h2>
        <p>
          We take appropriate measures to protect your data from unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold">7. Third-Party Services</h2>
        <p>
          We may use third-party services such as WhatsApp, email providers,
          or analytics tools, which have their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold">8. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data
          by contacting us.
        </p>

      </div>
    </section>
  );
}
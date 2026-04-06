export const metadata = {
  title: "Legal Disclaimer",
  description:
    "Legal disclaimer of Anurag Narain & Associates, a law firm in Lucknow.",
};

export default function DisclaimerPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-34 md:py-44">
      <h1 className="text-4xl md:text-5xl font-heading mb-6">
        Legal Disclaimer
      </h1>

      <p className="text-gray-600 mb-10">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-6 text-gray-700">
        <p>
          The information provided on this website is for general informational
          purposes only and should not be construed as legal advice.
        </p>

        <h2 className="text-2xl font-semibold">No Attorney-Client Relationship</h2>
        <p>
          Your use of this website or communication with us through this website
          does not establish a lawyer-client relationship.
        </p>

        <h2 className="text-2xl font-semibold">No Guarantees</h2>
        <p>
          We do not guarantee the accuracy, completeness, or reliability of the
          information available on this website.
        </p>

        <h2 className="text-2xl font-semibold">Confidentiality Warning</h2>
        <p>
          Any information sent through this website, including forms or emails,
          may not be secure and should not be considered confidential.
        </p>

        <h2 className="text-2xl font-semibold">Third-Party Links</h2>
        <p>
          This website may contain links to third-party platforms such as
          WhatsApp or external websites. We are not responsible for their
          content or privacy practices.
        </p>

        <h2 className="text-2xl font-semibold">Consent</h2>
        <p>
          By using this website, you hereby consent to this disclaimer and agree
          to its terms.
        </p>

        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>
          If you have any questions regarding this disclaimer, please contact us
          through our official communication channels.
        </p>
      </div>
    </section>
  );
}
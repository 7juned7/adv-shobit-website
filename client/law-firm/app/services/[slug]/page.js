import Image from "next/image";
import Link from "next/link";

// ✅ SERVICE DATA
const SERVICE_DETAILS = {
  "corporate-law": {
    title: "Corporate Law",
    description:
      "We provide end-to-end corporate legal services including company formation, compliance, contracts, and dispute resolution for businesses in Lucknow and across India.",
    image: "/images/service/corporate_law_image.jpg",
    points: [
      "Company Registration & Structuring",
      "Contract Drafting & Review",
      "Corporate Governance",
      "Mergers & Acquisitions",
    ],
  },

  "commercial-litigation": {
    title: "Commercial Litigation",
    description:
      "Expert legal representation in commercial disputes, arbitration, and litigation matters for businesses in Lucknow.",
    image: "/images/service/commercial_image.jpeg",
    points: [
      "Business Disputes",
      "Contract Enforcement",
      "Arbitration",
      "Civil Litigation",
    ],
  },

  "property-law": {
    title: "Property Law",
    description:
      "Comprehensive legal services for property transactions, disputes, and documentation in Lucknow.",
    image: "/images/service/property_law_image.jpg",
    points: [
      "Property Documentation",
      "Title Verification",
      "Dispute Resolution",
      "Real Estate Transactions",
    ],
  },

  "asset-protection": {
    title: "Asset Protection",
    description:
      "Secure your assets with wills, trusts, and estate planning services in Lucknow.",
    image: "/images/service/asset_protection_image.jpg",
    points: [
      "Will Drafting",
      "Trust Planning",
      "Estate Management",
      "Wealth Protection",
    ],
  },
  "criminal-law": {
  title: "Criminal Law",
  description:
    "Expert legal representation in criminal matters including bail, trials, and appeals before courts in Lucknow.",
  image: "/images/service/criminal_law_image.jpg",
  points: [
    "Bail Applications",
    "Criminal Trials",
    "Appeals & Revisions",
    "White Collar Crimes",
  ],
},

"service-law": {
  title: "Service Law",
  description:
    "Professional assistance in service-related disputes including disciplinary actions, employment issues, and tribunal matters.",
  image: "/images/service/service_law_image.jpg",
  points: [
    "Employment Disputes",
    "Departmental Inquiries",
    "Service Tribunal Cases",
    "Pension & Benefits Matters",
  ],
},
};

// ✅ 🔥 DYNAMIC SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Lawyer in Lucknow | Anurag Narain & Associates`,
    description: service.description,

    keywords: [
      `${service.title} lawyer Lucknow`,
      `${service.title} legal services Lucknow`,
      "law firm in Lucknow",
      "best lawyers in Lucknow",
      "Anurag Narain Associates",
    ],

    openGraph: {
      title: `${service.title} Services in Lucknow`,
      description: service.description,
      url: `https://yourdomain.com/services/${slug}`, // 🔁 replace
      siteName: "Anurag Narain & Associates",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} Lawyer in Lucknow`,
      description: service.description,
      images: [service.image],
    },

    alternates: {
      canonical: `https://yourdomain.com/services/${slug}`, // 🔁 replace
    },
  };
}

// ✅ PAGE
export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    return (
      <div className="pt-[120px] text-center">
        Service not found
      </div>
    );
  }

  return (
    <>
      {/* ✅ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: `${service.title} Lawyer in Lucknow`,
            provider: {
              "@type": "Organization",
              name: "Anurag Narain & Associates",
            },
            areaServed: "Lucknow, India",
            description: service.description,
          }),
        }}
      />

      <section className="bg-gradient-to-br from-[color:var(--color-gold)]/100 via-white to-[color:var(--color-gold)]/90">

        <div className="max-w-7xl pt-40 md:pt-60 mx-auto px-6 pb-24">

          <div className="grid md:grid-cols-2 gap-16 items-center text-[color:var(--color-navy)]">

            {/* IMAGE */}
            <div className="relative">
              <Image
                src={service.image}
                alt={`${service.title} lawyer in Lucknow`}
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4">
                <p className="text-sm text-gray-500">Trusted Legal Expertise</p>
                <p className="font-semibold text-[color:var(--color-gold)]">
                  10+ Years Experience
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>

              {/* ✅ H1 */}
              <h1 className="text-3xl md:text-4xl mb-4 font-[var(--font-heading)]">
                {service.title} Lawyer in Lucknow
              </h1>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {service.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-[color:var(--color-gold)] rounded-full" />
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-[color:var(--color-gold)] text-black font-medium"
                >
                  Book Consultation
                </Link>

                <Link
                  href="/services"
                  className="px-6 py-3 rounded-lg border border-black/10 hover:bg-black hover:text-white transition"
                >
                  View All Services
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
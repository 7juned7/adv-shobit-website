"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = "G-XXXXXXXXXX";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const loadGA = () => {
      if (window.gtag) return;

      const script1 = document.createElement("script");
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          anonymize_ip: true,
        });
      `;
      document.head.appendChild(script2);
    };

    const consent = localStorage.getItem("cookieConsent");

    if (consent === "accepted") {
      loadGA();
    }

    window.addEventListener("cookieAccepted", loadGA);

    return () => {
      window.removeEventListener("cookieAccepted", loadGA);
    };
  }, []);

  // 🔥 PAGE VIEW TRACKING
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (consent === "accepted" && window.gtag) {
      window.gtag("config", GA_ID, {
        page_path: pathname + searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  return null;
}
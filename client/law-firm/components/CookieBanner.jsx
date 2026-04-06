"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);

    // ✅ OPTIONAL: trigger analytics here
    window.dispatchEvent(new Event("cookieAccepted"));
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 z-50">
      
      <p className="text-sm text-white/80 max-w-xl">
        We use cookies to enhance your experience and analyze traffic. 
        You can accept or decline non-essential cookies.
      </p>

      <div className="flex gap-3">
        <button
          onClick={declineCookies}
          className="border border-white/30 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition"
        >
          Decline
        </button>

        <button
          onClick={acceptCookies}
          className="bg-gold text-black px-4 py-2 rounded-lg text-sm font-medium"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
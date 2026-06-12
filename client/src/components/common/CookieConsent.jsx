import { useState, useEffect } from "react";
import { setCookie, getCookie } from "../../utils/cookieUtils";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(() => {
    const cookieConsent = getCookie("cookieConsent");
    return !cookieConsent;
  });

  useEffect(() => {
    // Cookie state is initialized in useState, no need to set again
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", { expires: 365 });
    setShow(false);
  };

  const handleReject = () => {
    setCookie("cookieConsent", "rejected", { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sm:p-6 shadow-2xl z-50 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
              <span>🍪</span>
              <span>Cookie Consent</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic, and
              serve personalized content. By clicking "Accept", you consent to our
              use of cookies.
            </p>
          </div>

          <div className="flex gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 sm:px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition duration-200 text-xs sm:text-sm font-semibold whitespace-nowrap"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 text-xs sm:text-sm font-semibold whitespace-nowrap shadow-md hover:shadow-lg"
            >
              Accept
            </button>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-3 right-3 sm:static text-gray-400 hover:text-white flex-shrink-0 transition duration-200 hover:bg-slate-700 p-1 rounded"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

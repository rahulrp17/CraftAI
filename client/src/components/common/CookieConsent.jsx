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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">🍪 Cookie Consent</h3>
          <p className="text-sm text-gray-300">
            We use cookies to enhance your experience, analyze site traffic, and
            serve personalized content. By clicking "Accept", you consent to our
            use of cookies.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition text-sm font-medium"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-sm font-medium"
          >
            Accept
          </button>
        </div>

        <button
          onClick={handleReject}
          className="text-gray-400 hover:text-white flex-shrink-0"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

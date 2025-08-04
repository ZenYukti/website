import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * "The only true wisdom is in knowing you know nothing." 
 * — Socrates (and also you, when you landed here)
 */

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      `404 Audit: Page not found at ${location.pathname}. 
       Don't worry—our team has been notified (not really, but we care).`
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="text-center p-8 rounded-lg max-w-md mx-4 border border-[#1e293b] shadow-lg bg-[#1e293b]">
        
        {/* Illustration */}
        <div className="w-20 h-20 mx-auto mb-6 bg-[#0ea5e91a] rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-6xl font-extrabold mb-4 text-[#f87171]">404</h1>

        <p className="text-lg font-medium text-[#f1f5f9] mb-3">
          Lost in the digital wilderness?
        </p>

        <p className="text-sm text-[#cbd5e1] mb-6 leading-relaxed">
          No worries—our community thrives on helping wanderers like you. 
          
        </p>

        <div className="space-y-3">
          <a 
            href="/" 
            className="block px-5 py-2.5 bg-[#0ea5e9] text-white font-medium rounded-md hover:bg-[#0284c7] transition-colors"
          >
            Return to Home
          </a>
          <a 
            href="/contact" 
            className="block px-5 py-2.5 border border-[#334155] text-[#cbd5e1] font-medium rounded-md hover:bg-[#334155] transition-colors"
          >
            Report Missing Page
          </a>
        </div>

        {/* Supportive Footer */}
        <div className="mt-8 pt-4 border-t border-[#334155]">
          <p className="text-xs text-[#94a3b8]">
            "Alone we can do so little; together we can do so much." 
            <br />
            <span className="font-medium">— Helen Keller (and also our support team)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

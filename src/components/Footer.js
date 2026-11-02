import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#f8f5f2] border-t border-gray-100 mt-32 pt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-primary text-center md:text-left">
        <div>
          <h3 className="font-medium text-lg mb-3">About TOVICE</h3>
          <p className="text-sm leading-relaxed mb-4">
            TOVICE is operated by <span className="font-medium">AQUAFIZZ LIMITED</span>.
          </p>
          <p className="font-medium text-sm mb-2">Company address</p>
          <address className="not-italic text-sm leading-relaxed">
            Room D12, 11th Floor<br />
            Winfield Industrial Building<br />
            3 Kin Kwan Street<br />
            Tuen Mun, New Territories<br />
            Hong Kong
          </address>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-3">Contact Us</h3>
          <a href="mailto:hi.tovice@gmail.com" className="hover:text-brand-primary/80 break-words">hi.tovice@gmail.com</a>
          <p className="text-sm leading-relaxed mt-4">
            For return instructions, please contact us before sending any item back.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-3">Customer Care</h3>
          <a href="/help/" className="block mb-3 hover:text-brand-primary/80">Product support</a>
          <button
            onClick={() => navigate('/feedback')}
            className="text-brand-primary hover:text-brand-primary/80 transition-colors cursor-pointer"
          >
            Share Your Thoughts
          </button>
        </div>
      </div>
      <div className="text-center text-xs text-brand-primary/60 pb-6">© {new Date().getFullYear()} TOVICE. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

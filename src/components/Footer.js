import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="w-full bg-[#f8f5f2] border-t border-gray-100 mt-32 pt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-primary text-center md:text-left">
        {/* Social Media */}
        <div>
          <h3 className="font-medium text-lg mb-3">Follow Us</h3>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              alert("🚧 Instagram is brewing like a perfect cup of coffee - coming soon! ☕");
            }}
            className="text-brand-primary hover:text-brand-primary/80 transition-colors"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="18" height="18" x="3" y="3" rx="5" strokeWidth="2"/><circle cx="12" cy="12" r="4" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            Instagram
          </a>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-medium text-lg mb-3">Contact Us</h3>
          <a href="mailto:hi.tovice@gmail.com" className="hover:text-brand-primary/80">hi.tovice@gmail.com</a>
        </div>
        {/* Feedback */}
        <div>
          <h3 className="font-medium text-lg mb-3">Feedback</h3>
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
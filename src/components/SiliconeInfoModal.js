import React from 'react';
import { X } from 'lucide-react';

const SiliconeInfoModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light text-brand-primary">Why Do Some Ice Molds Leave White Residue?</h2>
          <button 
            onClick={onClose} 
            className="text-brand-primary/60 hover:text-brand-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="prose max-w-none text-brand-primary/80">
          <h3 className="text-xl font-light text-brand-primary mb-4">Understanding Silicone Quality in Ice Molds</h3>
          <p className="mb-4">
            Not all silicone ice molds are created equal. Some manufacturers use lower-grade silicone or skip crucial manufacturing steps, leading to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>White residue leaching into ice</li>
            <li>Potential harmful chemicals release</li>
            <li>Shorter product lifespan</li>
          </ul>
          <h3 className="text-xl font-light text-brand-primary mb-4">Our Premium Manufacturing Process</h3>
          <p className="mb-4">
            At TOVICE, we use only premium food-grade silicone and follow a rigorous manufacturing process that includes:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Multiple curing cycles</li>
            <li>Thorough quality testing</li>
            <li>Regular third-party lab verification</li>
          </ul>
          <p className="text-brand-primary/80">
            This ensures our ice molds never leave any residue and remain safe for years of use.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SiliconeInfoModal;
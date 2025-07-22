import React from 'react';
import { X } from 'lucide-react';

const CompatibilityModal = ({ product, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light text-brand-primary">Compatible Bottles</h2>
          <button 
            onClick={onClose} 
            className="text-brand-primary/60 hover:text-brand-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.compatibleBottles.map((bottle, index) => (
            <div key={index} className="bg-brand-light rounded-lg p-6 border border-brand-secondary/20">
              <img 
                src={bottle.image} 
                alt={bottle.name} 
                className="w-full h-32 object-contain rounded-lg mb-4 bg-white" 
              />
              <h3 className="font-medium text-brand-primary mb-2">{bottle.name}</h3>
              <p className="text-brand-primary/70 text-sm">{bottle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CompatibilityModal;
import React from 'react';
import { X } from 'lucide-react';

const CompatibilityModal = ({ product, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Compatible Bottles</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.compatibleBottles.map((bottle, index) => (
            <div key={index} className="border rounded-lg p-4">
              <img src={bottle.image} alt={bottle.name} className="max-h-[90vh] max-w-[90vw] object-cover rounded-lg mb-4" />
              <h3 className="font-bold mb-2">{bottle.name}</h3>
              <p className="text-gray-600">{bottle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CompatibilityModal;
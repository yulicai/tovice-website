// src/components/ProductCard.js

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const ProductCard = ({ product, onShowCompatibility }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full"> {/* 添加 h-full */}
    <div className="p-4 flex flex-col h-full"> {/* 添加 flex flex-col h-full */}
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <div className="flex-grow"> {/* 添加这个包装层 */}
        <ImageCarousel images={product.images} />
      </div>
        <p className="text-gray-600 my-4">{product.description}</p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <div className="mb-6">
          <button
            onClick={() => onShowCompatibility(product)}
            className="text-sky-600 hover:text-sky-800 mb-2 flex items-center"
          >
            <span className="border-b border-sky-600 hover:border-sky-800">
              View Compatible Bottles {'\u2192'}
            </span>
          </button>
          <div className="text-sm text-gray-600">
            Compatible with: Owala 24oz, 32oz, 40oz; Hydro Flask and more...
          </div>
        </div>

        
        <a                        
        href={product.amazonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 w-full justify-center"
        >
          <ShoppingCart className="mr-2" />
          Buy on Amazon
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
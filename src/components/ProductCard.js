// src/components/ProductCard.js

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onShowCompatibility }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white border border-gray-100 rounded-xl overflow-hidden h-full group transition-all duration-200 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative">
        <div className="aspect-[4/5] w-full overflow-hidden bg-white">
          <ImageCarousel images={product.images} imgClassName="transition-transform duration-300 group-hover:scale-105" showThumbnails={false} />
        </div>
      </div>
      <div className="p-5 flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-lg font-light text-brand-primary mb-2 line-clamp-2">
            {product.name}
          </h2>
          <p className="text-brand-primary/80 mb-2 text-sm line-clamp-3">
            {product.description}
          </p>
          <ul className="text-xs text-brand-primary/70 space-y-1 mb-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand-secondary mr-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
          {product.compatibleBottles.length > 0 && (
            <div className="mb-2">
              <button
                onClick={e => {
                  e.stopPropagation();
                  onShowCompatibility(product);
                }}
                className="text-brand-primary hover:text-brand-primary/80 text-xs underline"
              >
                View Compatible Bottles →
              </button>
            </div>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-light text-brand-primary">
            {product.price}
          </span>
          <a                        
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors text-xs"
            onClick={e => e.stopPropagation()}
          >
            <ShoppingCart className="mr-1" size={16} />
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
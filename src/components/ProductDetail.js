import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

const ProductDetail = ({ getProductById }) => {
  const { id } = useParams();
  const product = getProductById(id);
  const navigate = useNavigate();

  if (!product) {
    return <div className="max-w-4xl mx-auto py-20 text-center text-2xl text-brand-primary">Product not found.</div>;
  }

  return (
    <div className="w-full bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 px-6 md:px-12 lg:px-20">
        {/* 左侧图片轮播 */}
        <div className="flex-1 min-w-[320px] max-w-[520px] mx-auto lg:mx-0">
          <ImageCarousel images={product.images} />
        </div>
        {/* 右侧产品信息 */}
        <div className="flex-1 flex flex-col justify-start">
          <button onClick={() => navigate(-1)} className="mb-6 text-brand-primary text-sm hover:underline w-fit">← Back</button>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-brand-primary mb-4 leading-tight">{product.name}</h1>
          <div className="text-2xl font-bold text-brand-primary mb-6">{product.price}</div>
          <p className="text-lg text-brand-primary/80 mb-6">{product.description}</p>
          <ul className="mb-8 space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="text-base text-brand-primary flex items-start">
                <span className="text-brand-secondary mr-2 mt-1">•</span>{feature}
              </li>
            ))}
          </ul>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center text-center bg-brand-primary text-white text-lg font-bold px-10 py-4 rounded-2xl uppercase tracking-wider hover:bg-brand-primary/90 transition-colors shadow-md"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
      {/* 可扩展：下方推荐产品、详细描述等 */}
    </div>
  );
};

export default ProductDetail; 
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageViewerModal from './ImageViewerModal';

const ImageCarousel = ({ images, imgClassName = "", showThumbnails = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showViewer, setShowViewer] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* 主图区域，固定高度 */}
      <div className="relative group w-full">
        <div className="w-full overflow-hidden rounded-lg flex items-center justify-center" style={{height: '408px', maxHeight: '72vw'}}>
          <img 
            src={images[currentIndex]} 
            alt={`Product image ${currentIndex + 1}`}
            className={`max-h-full max-w-full object-contain cursor-pointer ${imgClassName}`}
            onClick={() => setShowViewer(true)}
          />
        </div>
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 text-brand-primary" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg"
            >
              <ChevronRight className="w-4 h-4 text-brand-primary" />
            </button>
          </>
        )}
      </div>

      {/* 缩略图carousel，固定间距 */}
      {showThumbnails && images.length > 1 && (
        <div className="flex gap-2 justify-center" style={{marginTop: '12px'}}>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={e => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`border rounded-lg overflow-hidden w-14 h-14 flex-shrink-0 transition-all duration-200 focus:outline-none ${
                idx === currentIndex
                  ? 'border-brand-primary ring-2 ring-brand-primary'
                  : 'border-gray-200 hover:border-brand-primary/50'
              }`}
              style={{ background: '#fff' }}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}

      {showViewer && (
        <ImageViewerModal
          images={images}
          currentIndex={currentIndex}
          onClose={() => setShowViewer(false)}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
};

export default ImageCarousel;
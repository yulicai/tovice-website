import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageViewerModal from './ImageViewerModal';

const ImageCarousel = ({ images }) => {
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
      <div className="relative group aspect-[4/3] w-full">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img 
            src={images[currentIndex]} 
            alt={`Product image ${currentIndex + 1}`}
            className="w-full h-full object-contain cursor-pointer" // 添加 cursor-pointer
            style={{
              maxHeight: '500px',
              margin: '0 auto'
            }}
            onClick={() => setShowViewer(true)} // 添加点击事件
          />
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation(); // 防止触发图片点击事件
            prevImage();
          }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation(); // 防止触发图片点击事件
            nextImage();
          }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 图片查看器模态框 */}
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
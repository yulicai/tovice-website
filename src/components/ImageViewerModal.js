import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageViewerModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>

        {/* 上一张图片按钮 */}
        <button
          onClick={onPrev}
          className="absolute left-4 text-white hover:text-gray-300"
        >
          <ChevronLeft size={40} />
        </button>

        {/* 图片 */}
        <img
          src={images[currentIndex]}
          alt={`Full size image ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />

        {/* 下一张图片按钮 */}
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:text-gray-300"
        >
          <ChevronRight size={40} />
        </button>

        {/* 图片计数器 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageViewerModal;
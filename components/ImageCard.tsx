import React from 'react';

interface ImageSource {
  src: string;
  alt: string;
}

interface ImageCardProps {
  images: ImageSource[];
  aspectRatio?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ images, aspectRatio = '4 / 3' }) => {
  const renderImages = () => {
    switch (images.length) {
      case 1:
        return (
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover rounded-lg" />
        );
      case 2:
        return (
          <div className="flex flex-col gap-2 h-full">
            <div className="flex-1 overflow-hidden rounded-lg">
              <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden rounded-lg">
              <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-2 h-full">
            <div className="flex-1 overflow-hidden rounded-lg">
              <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-row gap-2 flex-1">
              <div className="flex-1 overflow-hidden rounded-lg">
                <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 overflow-hidden rounded-lg">
                <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-green-100 p-2 rounded-xl shadow-soft-lg w-full" style={{ aspectRatio: aspectRatio }}>
      {renderImages()}
    </div>
  );
};

export default ImageCard;
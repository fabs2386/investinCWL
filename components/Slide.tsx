import React from 'react';
import type { SlideContent } from '../types';

const Slide: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const isCoverSlide = !slide.title || slide.title.length === 0;

  // Handle the special full-bleed cover slide
  if (isCoverSlide) {
    return (
      <div className="relative w-full h-full">
        {slide.visual}
      </div>
    );
  }

  // Render the standard two-column layout for all other slides
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center bg-white rounded-xl shadow-soft-lg print:shadow-none print:rounded-none overflow-hidden p-10 gap-8">
      <div className="w-full md:w-5/12 flex flex-col justify-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-indigo-500 pb-4">
            {slide.title}
          </h1>
          {slide.customCopy ? (
            slide.customCopy
          ) : (
            <div>
              {slide.copy.map((section, index) => (
                <div key={index} className="mb-4">
                  {section.heading && (
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                      {section.heading}
                    </h2>
                  )}
                  <ul className="list-none space-y-3 text-lg text-gray-600">
                    {section.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <span className="text-indigo-500 mr-4 mt-1.5 text-sm">&#9679;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        {!slide.hideDefaultLogo && (
          <div className="mt-8">
            <div className="bg-white p-2 rounded-lg shadow-soft inline-block">
              <img
                src="https://iili.io/FpcvtPj.png"
                alt="Ozark Mountain Realty Group Logo"
                className="w-32 h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-full md:w-7/12 flex items-center justify-center">
        {slide.visual}
      </div>
    </div>
  );
};

export default Slide;
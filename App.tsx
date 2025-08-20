import React from 'react';
import { SLIDES_DATA } from './constants/slides';
import Slide from './components/Slide';

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const PrintIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.32 0-1.39 1.39m-9.54 0-1.39-1.39M3 10.5h18M7.5 4.5l.345.345A1.125 1.125 0 0 1 8.995 5.25h6.01a1.125 1.125 0 0 1 .84.395L16.5 4.5" />
  </svg>
);

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPrinting, setIsPrinting] = React.useState(false);

  const goToNextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
  }, []);

  const goToPrevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  }, []);
  
  const handleEnterPrintPreview = () => {
    setIsPrinting(true);
  };
  
  const handleExitPrintPreview = React.useCallback(() => {
    setIsPrinting(false);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isPrinting) {
        if (event.key === 'Escape') {
          handleExitPrintPreview();
        }
        return;
      }
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide, isPrinting, handleExitPrintPreview]);

  if (isPrinting) {
    return (
      <>
        <div className="print-preview-banner fixed top-0 left-0 right-0 bg-indigo-600 text-white p-4 shadow-lg z-50 flex justify-between items-center print:hidden">
            <p className="font-semibold">Print Preview Mode: Use your browser's print function (Ctrl+P or Cmd+P) to save as PDF.</p>
            <button
                onClick={handleExitPrintPreview}
                className="bg-white text-indigo-600 font-bold py-2 px-4 rounded hover:bg-indigo-100 transition-colors"
            >
                Exit Preview
            </button>
        </div>
        <main className="bg-white pt-20"> {/* Add padding-top to avoid content being hidden by banner */}
          {SLIDES_DATA.map((slide, index) => (
            <div key={index} className="print-page w-screen h-screen">
              <div className="w-full h-full p-4" style={{ aspectRatio: '3456 / 2112' }}>
                <Slide slide={slide} />
              </div>
            </div>
          ))}
        </main>
        <style>
          {`
            @media print {
              @page {
                size: landscape;
                margin: 0;
              }
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .print-page {
                page-break-after: always;
              }
            }
          `}
        </style>
      </>
    );
  }

  return (
    <>
      <main className="bg-green-50 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full">
          <div id="presentation-container" className="w-full max-w-7xl mx-auto my-8 relative" style={{ aspectRatio: '3456 / 2112' }}>
            <Slide slide={SLIDES_DATA[currentSlide]} />
          </div>

          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <button
              onClick={goToPrevSlide}
              aria-label="Previous Slide"
              className="p-3 rounded-full bg-white text-gray-700 border border-gray-300 shadow-soft hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <ChevronLeftIcon />
            </button>
            
            <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">
                    {currentSlide + 1} / {SLIDES_DATA.length}
                </span>
                <button
                  onClick={handleEnterPrintPreview}
                  aria-label="Print Presentation"
                  className="p-3 rounded-full bg-white text-gray-700 border border-gray-300 shadow-soft hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <PrintIcon />
                </button>
            </div>

            <button
              onClick={goToNextSlide}
              aria-label="Next Slide"
              className="p-3 rounded-full bg-white text-gray-700 border border-gray-300 shadow-soft hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

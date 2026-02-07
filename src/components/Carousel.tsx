import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    initialIndex?: number;
}

export function Carousel({ isOpen, onClose, images, initialIndex = 0 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, initialIndex]);

    const handlePrevious = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 300);
    }, [images.length, isAnimating]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 300);
    }, [images.length, isAnimating]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'ArrowLeft':
                handlePrevious();
                break;
            case 'ArrowRight':
                handleNext();
                break;
            case 'Escape':
                onClose();
                break;
        }
    }, [isOpen, handlePrevious, handleNext, onClose]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/50 rounded-full transition-colors"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrevious}
                className="absolute left-4 z-50 p-3 text-white/70 hover:text-white bg-black/50 rounded-full transition-all hover:scale-110 hidden md:flex"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 z-50 p-3 text-white/70 hover:text-white bg-black/50 rounded-full transition-all hover:scale-110 hidden md:flex"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Image Container */}
            <div
                className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center p-4 md:p-12"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="max-h-full max-w-full object-contain animate-fade-in select-none"
                        style={{ maxHeight: '85vh' }}
                        onClick={handleNext} // Click image to go next is common expected behavior
                    />

                    {/* Mobile Touch Overlay for Navigation */}
                    <div className="absolute inset-y-0 left-0 w-1/4 md:hidden" onClick={handlePrevious} />
                    <div className="absolute inset-y-0 right-0 w-1/4 md:hidden" onClick={handleNext} />
                </div>
            </div>

            {/* Thumbnails / Indicators */}
            <div
                className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 overflow-x-auto px-4 py-2"
                onClick={(e) => e.stopPropagation()}
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-white scale-125'
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Slide01 from './slides/Slide01_Title';
import Slide02 from './slides/Slide02_Team';
import Slide03 from './slides/Slide03_Supervisors';
import Slide04 from './slides/Slide04_Problem';
import Slide05 from './slides/Slide05_Objectives';
import Slide06 from './slides/Slide06_Solution';
import Slide07 from './slides/Slide07_Architecture';
import Slide08 from './slides/Slide08_Stack';
import Slide09 from './slides/Slide09_Model';
import Slide10 from './slides/Slide10_Features';
import Slide11 from './slides/Slide11_Database';
import Slide12 from './slides/Slide12_Results';
import Slide13 from './slides/Slide13_MultiVendor';
import Slide14 from './slides/Slide14_Chat';
import Slide15 from './slides/Slide15_Containerization';
import Slide16 from './slides/Slide16_Benefits';
import Slide17 from './slides/Slide17_Future';
import Slide18 from './slides/Slide18_End';

const SLIDES = [
    Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15,
    Slide16,
    Slide17,
    Slide18,
];

const Presentation = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlideIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const CurrentSlideComponent = SLIDES[currentSlideIndex];

    return (
        <div className="relative w-screen h-screen bg-neutral-100 overflow-hidden">
            {/* Navigation Controls */}
            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 bg-primary/10 hover:bg-primary/90 hover:text-white text-primary rounded-full shadow-lg transition-all disabled:opacity-0 disabled:cursor-not-allowed backdrop-blur-sm"
                disabled={currentSlideIndex === 0}
                aria-label="Previous Slide"
            >
                <ArrowLeft size={20} className="md:w-8 md:h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 bg-primary/10 hover:bg-primary/90 hover:text-white text-primary rounded-full shadow-lg transition-all disabled:opacity-0 disabled:cursor-not-allowed backdrop-blur-sm"
                disabled={currentSlideIndex === SLIDES.length - 1}
                aria-label="Next Slide"
            >
                <ArrowRight size={20} className="md:w-8 md:h-8" />
            </button>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "anticipate" }}
                    className="w-full h-full shadow-2xl"
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Presentation;

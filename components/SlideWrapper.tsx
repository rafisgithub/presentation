import React from 'react';
import { cn } from '@/lib/utils';

interface SlideWrapperProps {
    children: React.ReactNode;
    slideNumber: number;
    className?: string;
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, slideNumber, className }) => {
    return (
        <div className={cn("w-screen h-screen flex flex-col relative bg-white overflow-hidden p-4 md:p-[clamp(1rem,4vw,3rem)]", className)}>
            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-center w-full max-w-[90rem] mx-auto overflow-y-auto md:overflow-visible scrollbar-hide">
                {children}
            </div>

            {/* Footer */}
            <footer className="absolute bottom-2 md:bottom-4 left-4 md:left-8 right-4 md:right-8 flex justify-between items-center text-[10px] md:text-base text-primary/70 font-medium border-t border-primary/20 pt-2 bg-white/90 backdrop-blur-sm z-40">
                <span className="truncate max-w-[70%]">AI-Driven Leaf Disease Detection and Multi-Vendor Agro System</span>
                <span className="whitespace-nowrap ml-4">{slideNumber} / 18</span>
            </footer>
        </div>
    );
};

export default SlideWrapper;

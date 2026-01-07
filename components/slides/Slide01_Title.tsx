import React from 'react';
import SlideWrapper from '../SlideWrapper';

const Slide01_Title = () => {
    return (
        <SlideWrapper slideNumber={1} className="bg-primary/5">
            <div className="flex flex-col items-center justify-center text-center h-full space-y-12">

                {/* Title Section */}
                <div className="space-y-6">
                    <h1 className="text-6xl font-extrabold text-primary tracking-tight leading-tight max-w-4xl mx-auto">
                        AI-Driven Leaf Disease Detection and Multi-Vendor Agro System
                    </h1>
                    <div className="h-2 w-32 bg-secondary mx-auto rounded-full"></div>
                </div>

                {/* Institution Info */}
                <div className="space-y-2 text-2xl text-neutral-600 font-light">
                    <p className="font-semibold text-neutral-800">Sonargaon University, Department of CSE</p>
                    <p>January 2026</p>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide01_Title;

import React from 'react';
import SlideWrapper from '../SlideWrapper';

const Slide18_End = () => {
    return (
        <SlideWrapper slideNumber={18}>
            <div className="flex flex-col items-center justify-center h-full text-center space-y-12">

                <div>
                    <h1 className="text-8xl font-black text-primary mb-4 tracking-tighter">Thank You!</h1>
                    <div className="h-2 w-48 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="bg-neutral-50 px-12 py-8 rounded-3xl border border-neutral-200">
                    <h2 className="text-4xl font-bold text-neutral-800 mb-6">Questions?</h2>
                    <p className="text-neutral-500 text-lg">We are happy to answer any queries.</p>
                </div>

                <div className="text-neutral-400 pt-12">
                    <p className="font-semibold">Department of CSE</p>
                    <p>Sonargaon University</p>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide18_End;

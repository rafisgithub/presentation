import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { ArrowRight, CloudOff, Mic, LineChart, CreditCard, Leaf } from 'lucide-react';

const Slide17_Future = () => {
    return (
        <SlideWrapper slideNumber={17}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Future Enhancements</h2>

            <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">

                <div className="flex items-center p-6 bg-white border-l-8 border-green-500 rounded-r-xl shadow-sm hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6 text-green-600">
                        <Leaf />
                    </div>
                    <span className="text-xl font-medium text-neutral-700 flex-1">Expand crop and disease coverage</span>
                    <ArrowRight className="text-neutral-400" />
                </div>

                <div className="flex items-center p-6 bg-white border-l-8 border-neutral-500 rounded-r-xl shadow-sm hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mr-6 text-neutral-600">
                        <CloudOff />
                    </div>
                    <span className="text-xl font-medium text-neutral-700 flex-1">Offline functionality for remote areas</span>
                    <ArrowRight className="text-neutral-400" />
                </div>

                <div className="flex items-center p-6 bg-white border-l-8 border-blue-500 rounded-r-xl shadow-sm hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6 text-blue-600">
                        <Mic />
                    </div>
                    <span className="text-xl font-medium text-neutral-700 flex-1">Voice-based interface (Bangla support)</span>
                    <ArrowRight className="text-neutral-400" />
                </div>

                <div className="flex items-center p-6 bg-white border-l-8 border-purple-500 rounded-r-xl shadow-sm hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-6 text-purple-600">
                        <LineChart />
                    </div>
                    <span className="text-xl font-medium text-neutral-700 flex-1">Advanced analytics dashboard for farmers</span>
                    <ArrowRight className="text-neutral-400" />
                </div>

                <div className="flex items-center p-6 bg-white border-l-8 border-orange-500 rounded-r-xl shadow-sm hover:translate-x-2 transition-transform">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6 text-orange-600">
                        <CreditCard />
                    </div>
                    <span className="text-xl font-medium text-neutral-700 flex-1">Integrated payment gateway (Bkash/Nagad)</span>
                    <ArrowRight className="text-neutral-400" />
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide17_Future;

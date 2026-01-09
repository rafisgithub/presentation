import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { LayoutGrid, Scan } from 'lucide-react';

const Slide18_CoreFeatures = () => {
    return (
        <SlideWrapper slideNumber={18}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Core Features</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/3 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        Centralized access and AI-powered diagnostics.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Smart Dashboard</h3>
                                <p className="text-neutral-600">Quick access to all essential services and features.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">AI Disease Scanner</h3>
                                <p className="text-neutral-600">Instant leaf disease detection using advanced machine learning.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Images Section */}
                <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                    {/* Feature 1: Home Dashboard */}
                    <div className="flex flex-col items-center group">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-neutral-100 h-[60vh] w-full bg-neutral-900">
                            <img
                                src="/mobile-app-features-for-customer/customer-home-screen.jpg"
                                alt="Home Screen"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                            <LayoutGrid className="text-blue-600" size={20} />
                            <span className="font-medium">Dashboard</span>
                        </div>
                    </div>

                    {/* Feature 2: Disease Scanner */}
                    <div className="flex flex-col items-center group relative transform scale-105 z-10">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-500 h-[60vh] w-full bg-neutral-900 group-hover:scale-105 transition-transform duration-300">
                            <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                                AI Powered
                            </div>
                            <img
                                src="/mobile-app-features-for-customer/disease-detection-scanner.jpg"
                                alt="Disease Scanner"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-white bg-green-600 px-6 py-2 rounded-full shadow-lg border border-green-500">
                            <Scan className="text-white" size={24} />
                            <span className="font-bold">AI Scanner</span>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide18_CoreFeatures;

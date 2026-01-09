import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Box, Layers, PlayCircle, Settings } from 'lucide-react';

const Slide15_Containerization = () => {
    return (
        <SlideWrapper slideNumber={10}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Containerization</h2>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 h-full pb-8">

                {/* Left: Docker Stack Diagram */}
                <div className="w-full lg:w-1/2 bg-blue-50/50 rounded-2xl border-2 border-blue-100 p-8 flex flex-col items-center justify-center relative min-h-[300px]">
                    <div className="absolute top-4 left-4 flex items-center gap-2 text-blue-800 font-mono font-bold">
                        <Box size={20} /> docker-compose.yml
                    </div>

                    <div className="flex flex-col gap-4 w-full max-w-sm mt-8">
                        <div className="bg-white p-4 rounded border-l-4 border-blue-500 shadow-sm flex justify-between items-center">
                            <span className="font-mono font-bold">django-backend</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Likert:8000</span>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-yellow-500 shadow-sm flex justify-between items-center">
                            <span className="font-mono font-bold">celery-worker</span>
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Background</span>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-indigo-500 shadow-sm flex justify-between items-center">
                            <span className="font-mono font-bold">postgres-db</span>
                            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Port:5432</span>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-red-500 shadow-sm flex justify-between items-center">
                            <span className="font-mono font-bold">redis-cache</span>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Port:6379</span>
                        </div>
                    </div>
                </div>

                {/* Right: Benefits */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                            <Layers />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-2">Scalability</h3>
                            <p className="text-neutral-600">Services can be scaled independently based on load.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
                            <Settings />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-2">Consistency</h3>
                            <p className="text-neutral-600">Identical environments for dev, stage, and prod. "Works on my machine" solved.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 shrink-0">
                            <PlayCircle />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-2">Easy Deployment</h3>
                            <p className="text-neutral-600">One command startup with pre-configured networking.</p>
                        </div>
                    </div>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide15_Containerization;

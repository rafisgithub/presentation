import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Smartphone, Server, BrainCircuit, Database } from 'lucide-react';

const Slide07_Architecture = () => {
    return (
        <SlideWrapper slideNumber={7}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">System Architecture</h2>

            <div className="flex flex-col gap-12">

                {/* Flow Diagram */}
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 gap-8 md:gap-0">
                    {/* Step 1: Flutter */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 border-2 border-blue-200">
                            <Smartphone size={40} />
                        </div>
                        <span className="font-bold text-lg">Flutter App</span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block flex-1 h-1 bg-neutral-300 mx-4 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-neutral-400 rotate-45"></div>
                    </div>
                    <div className="block md:hidden h-8 w-1 bg-neutral-300 relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 border-b-2 border-r-2 border-neutral-400 rotate-45"></div>
                    </div>

                    {/* Step 2: Django */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-2xl flex items-center justify-center text-green-800 mb-4 border-2 border-green-200">
                            <Server size={40} />
                        </div>
                        <span className="font-bold text-lg">Django API</span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block flex-1 h-1 bg-neutral-300 mx-4 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-neutral-400 rotate-45"></div>
                    </div>
                    <div className="block md:hidden h-8 w-1 bg-neutral-300 relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 border-b-2 border-r-2 border-neutral-400 rotate-45"></div>
                    </div>


                    {/* Step 3: AI Model */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4 border-2 border-purple-200">
                            <BrainCircuit size={40} />
                        </div>
                        <span className="font-bold text-lg">AI Model</span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block flex-1 h-1 bg-neutral-300 mx-4 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-neutral-400 rotate-45"></div>
                    </div>
                    <div className="block md:hidden h-8 w-1 bg-neutral-300 relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 border-b-2 border-r-2 border-neutral-400 rotate-45"></div>
                    </div>

                    {/* Step 4: Postgres */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 border-2 border-indigo-200">
                            <Database size={40} />
                        </div>
                        <span className="font-bold text-lg">PostgreSQL</span>
                    </div>
                </div>

                {/* Docker Containers Box */}
                <div className="mt-8 border-4 border-dashed border-neutral-300 rounded-xl p-4 md:p-8 relative">
                    <span className="absolute top-0 left-4 md:left-8 px-4 py-1 bg-white -translate-y-1/2 text-neutral-500 font-mono font-semibold text-sm md:text-base">Docker Containers</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-blue-800 border border-blue-200">
                            <span className="block font-bold">Web</span>
                            (Django)
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg text-center font-mono text-yellow-800 border border-yellow-200">
                            <span className="block font-bold">Worker</span>
                            (Celery)
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center font-mono text-indigo-800 border border-indigo-200">
                            <span className="block font-bold">DB</span>
                            (Postgres)
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-center font-mono text-red-800 border border-red-200">
                            <span className="block font-bold">Redis</span>
                            (Cache)
                        </div>
                    </div>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide07_Architecture;

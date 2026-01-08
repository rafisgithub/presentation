import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Database, Layers, Search, Maximize } from 'lucide-react';

const Slide09_Model = () => {
    return (
        <SlideWrapper slideNumber={9}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">AI Model Design</h2>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full pb-8">

                {/* Left Col: Details */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4 md:gap-8">
                    <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                        <div className="flex items-center gap-4 mb-2">
                            <Database className="text-primary" />
                            <h3 className="text-xl font-bold">Training Data</h3>
                        </div>
                        <p className="text-neutral-600 ml-10">PlantVillage Dataset + Local Field Images</p>
                    </div>

                    <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                        <div className="flex items-center gap-4 mb-2">
                            <Layers className="text-primary" />
                            <h3 className="text-xl font-bold">Architecture</h3>
                        </div>
                        <p className="text-neutral-600 ml-10">Convolutional Neural Network (CNN)</p>
                    </div>

                    <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                        <div className="flex items-center gap-4 mb-2">
                            <Maximize className="text-primary" />
                            <h3 className="text-xl font-bold">Data Augmentation</h3>
                        </div>
                        <ul className="text-neutral-600 ml-10 list-disc list-inside">
                            <li>Rotation</li>
                            <li>Flipping</li>
                            <li>Zooming</li>
                        </ul>
                    </div>
                </div>

                {/* Right Col: Diagram Placeholder */}
                <div className="w-full lg:w-2/3 bg-white rounded-xl border-4 border-dashed border-neutral-300 flex flex-col items-center justify-center p-8 min-h-[300px]">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold shadow-md">Input</div>
                        <div className="h-1 w-8 bg-neutral-400"></div>
                        <div className="w-12 h-24 bg-green-600 rounded text-xs flex items-center justify-center text-white font-bold writing-mode-vertical shadow-md" style={{ writingMode: 'vertical-rl' }}>Conv2D</div>
                        <div className="h-1 w-8 bg-neutral-400"></div>
                        <div className="w-12 h-20 bg-orange-500 rounded text-xs flex items-center justify-center text-white font-bold writing-mode-vertical shadow-md" style={{ writingMode: 'vertical-rl' }}>Pool</div>
                        <div className="h-1 w-8 bg-neutral-400"></div>
                        <div className="w-12 h-24 bg-green-600 rounded text-xs flex items-center justify-center text-white font-bold writing-mode-vertical shadow-md" style={{ writingMode: 'vertical-rl' }}>Conv2D</div>
                        <div className="h-1 w-8 bg-neutral-400"></div>
                        <div className="w-16 h-8 bg-purple-600 rounded text-xs flex items-center justify-center text-white font-bold shadow-md">Dense</div>
                        <div className="h-1 w-8 bg-neutral-400"></div>
                        <div className="w-16 h-16 bg-neutral-800 rounded text-xs flex items-center justify-center text-white font-bold shadow-md">Output</div>
                    </div>
                    <span className="text-xl font-medium text-neutral-600 bg-neutral-100 px-4 py-2 rounded-lg">CNN Architecture Diagram</span>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide09_Model;

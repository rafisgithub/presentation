import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Brain, ShoppingCart, MessagesSquare } from 'lucide-react';

const Slide06_Solution = () => {
    return (
        <SlideWrapper slideNumber={6}>
            <h2 className="text-4xl font-bold text-primary mb-16 border-l-8 border-secondary pl-6">Solution Overview: Krishi App</h2>

            <div className="flex items-center justify-center h-full pb-20">
                <div className="relative">

                    {/* Center Hub */}
                    <div className="w-64 h-64 bg-primary rounded-full flex items-center justify-center shadow-2xl relative z-10 border-8 border-white">
                        <h3 className="text-4xl font-bold text-white tracking-widest uppercase">Krishi</h3>
                    </div>

                    {/* Connected Block 1: AI Engine */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-[22rem] -translate-y-1/2 flex flex-col items-center">
                        <div className="w-48 h-48 bg-white border-4 border-green-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-4 text-center z-10">
                            <Brain size={48} className="text-green-600 mb-2" />
                            <span className="text-xl font-bold text-neutral-800">AI Engine</span>
                        </div>
                        {/* Connector Line */}
                        <div className="absolute w-40 h-2 bg-green-500 top-1/2 left-full -z-0"></div>
                    </div>

                    {/* Connected Block 2: Marketplace */}
                    <div className="absolute top-1/2 left-1/2 transform translate-x-[10rem] -translate-y-[15rem] flex flex-col items-center">
                        <div className="w-48 h-48 bg-white border-4 border-purple-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-4 text-center z-10">
                            <ShoppingCart size={48} className="text-purple-600 mb-2" />
                            <span className="text-xl font-bold text-neutral-800">Marketplace</span>
                        </div>
                        {/* Connector Line */}
                        <div className="absolute h-40 w-2 bg-purple-500 top-full left-1/2 -ml-32 transform rotate-45 origin-top -z-0"></div>
                    </div>

                    {/* Connected Block 3: Chat System */}
                    <div className="absolute top-1/2 left-1/2 transform translate-x-[10rem] translate-y-[3rem] flex flex-col items-center">
                        <div className="w-48 h-48 bg-white border-4 border-orange-500 rounded-2xl flex flex-col items-center justify-center shadow-xl p-4 text-center z-10">
                            <MessagesSquare size={48} className="text-orange-600 mb-2" />
                            <span className="text-xl font-bold text-neutral-800">Chat System</span>
                        </div>
                        {/* Connector Line */}
                        <div className="absolute h-40 w-2 bg-orange-500 bottom-full left-1/2 -ml-32 transform -rotate-45 origin-bottom -z-0"></div>
                    </div>

                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide06_Solution;

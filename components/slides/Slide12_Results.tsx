import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Timer, Zap, CheckCircle2 } from 'lucide-react';

const Slide12_Results = () => {
    return (
        <SlideWrapper slideNumber={12}>
            <h2 className="text-4xl font-bold text-primary mb-16 border-l-8 border-secondary pl-6">Implementation Results</h2>

            <div className="flex gap-12 h-full pb-8">

                {/* Left: Stats Cards */}
                <div className="w-1/3 flex flex-col gap-6 justify-center">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <div className="flex items-center gap-4 mb-2">
                            <CheckCircle2 className="text-green-600" size={32} />
                            <h3 className="text-lg font-bold text-neutral-600">AI Accuracy</h3>
                        </div>
                        <p className="text-5xl font-bold text-green-700">92%</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                        <div className="flex items-center gap-4 mb-2">
                            <Timer className="text-blue-600" size={32} />
                            <h3 className="text-lg font-bold text-neutral-600">Inference Time</h3>
                        </div>
                        <p className="text-5xl font-bold text-blue-700">1.2s</p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                        <div className="flex items-center gap-4 mb-2">
                            <Zap className="text-orange-600" size={32} />
                            <h3 className="text-lg font-bold text-neutral-600">Chat Latency</h3>
                        </div>
                        <p className="text-5xl font-bold text-orange-700">&lt;200ms</p>
                    </div>
                </div>

                {/* Right: Confusion Matrix Placeholder */}
                <div className="w-2/3 flex flex-col items-center justify-center bg-white border border-neutral-200 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-6 text-neutral-700">Confusion Matrix</h3>

                    <div className="grid grid-cols-4 gap-2 text-sm font-mono">
                        {/* Header */}
                        <div className="col-span-1"></div>
                        <div className="text-center font-bold bg-neutral-100 p-2">Healthy</div>
                        <div className="text-center font-bold bg-neutral-100 p-2">Late Blight</div>
                        <div className="text-center font-bold bg-neutral-100 p-2">Early Blight</div>

                        {/* Row 1 */}
                        <div className="flex items-center justify-end font-bold bg-neutral-100 p-2">Healthy</div>
                        <div className="bg-green-200 flex items-center justify-center p-4 font-bold text-green-900 border border-white">48</div>
                        <div className="bg-red-50 flex items-center justify-center p-4 text-neutral-400 border border-white">1</div>
                        <div className="bg-red-50 flex items-center justify-center p-4 text-neutral-400 border border-white">1</div>

                        {/* Row 2 */}
                        <div className="flex items-center justify-end font-bold bg-neutral-100 p-2">Late Blight</div>
                        <div className="bg-red-50 flex items-center justify-center p-4 text-neutral-400 border border-white">2</div>
                        <div className="bg-green-200 flex items-center justify-center p-4 font-bold text-green-900 border border-white">45</div>
                        <div className="bg-red-100 flex items-center justify-center p-4 text-neutral-600 border border-white">3</div>

                        {/* Row 3 */}
                        <div className="flex items-center justify-end font-bold bg-neutral-100 p-2">Early Blight</div>
                        <div className="bg-red-50 flex items-center justify-center p-4 text-neutral-400 border border-white">0</div>
                        <div className="bg-red-100 flex items-center justify-center p-4 text-neutral-600 border border-white">2</div>
                        <div className="bg-green-200 flex items-center justify-center p-4 font-bold text-green-900 border border-white">48</div>
                    </div>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide12_Results;

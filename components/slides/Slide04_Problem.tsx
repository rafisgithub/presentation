import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Sprout, AlertTriangle, Users } from 'lucide-react';

const Slide04_Problem = () => {
    return (
        <SlideWrapper slideNumber={4}>
            <h2 className="text-4xl font-bold text-primary mb-16 border-l-8 border-secondary pl-6">Problem Statement</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">

                {/* Card 1 */}
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                        <Sprout size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">Agricultural Challenges</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Bangladesh relies heavily on agriculture, yet modernization gaps hinder productivity and sustainability.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                        <AlertTriangle size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">Disease Identification</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Farmers struggle to accurately identify crop diseases early, leading to significant yield losses.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                        <Users size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">Limited Access</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Lack of direct connection to agricultural experts and verified pesticide vendors.
                    </p>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide04_Problem;

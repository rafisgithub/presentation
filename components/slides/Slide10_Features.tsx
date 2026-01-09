import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { ScanFace, ShoppingBasket, MessageSquareText } from 'lucide-react';

const Slide10_Features = () => {
    return (
        <SlideWrapper slideNumber={13}>
            <h2 className="text-4xl font-bold text-primary mb-16 border-l-8 border-secondary pl-6">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">

                {/* Feature 1 */}
                <div className="group bg-white p-8 rounded-2xl shadow-lg border-t-8 border-green-500 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-100 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <ScanFace size={40} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">AI Scanner</h3>
                    <div className="flex items-center justify-center gap-2 text-sm font-mono text-neutral-500 bg-neutral-100 py-2 rounded mb-4">
                        <span>Image</span>
                        <span>→</span>
                        <span>Detection</span>
                    </div>
                    <p className="text-center text-neutral-600">
                        Instant identification of crop diseases using on-device camera and AI analysis.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="group bg-white p-8 rounded-2xl shadow-lg border-t-8 border-purple-500 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-purple-100 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <ShoppingBasket size={40} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">Marketplace</h3>
                    <div className="flex items-center justify-center gap-2 text-sm font-mono text-neutral-500 bg-neutral-100 py-2 rounded mb-4">
                        <span>Browse</span>
                        <span>→</span>
                        <span>Filter</span>
                        <span>→</span>
                        <span>Buy</span>
                    </div>
                    <p className="text-center text-neutral-600">
                        A complete e-commerce platform for farmers to purchase pesticides and equipment.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="group bg-white p-8 rounded-2xl shadow-lg border-t-8 border-orange-500 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-orange-100 rounded-full text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <MessageSquareText size={40} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">Chat System</h3>
                    <div className="flex items-center justify-center gap-2 text-sm font-mono text-neutral-500 bg-neutral-100 py-2 rounded mb-4">
                        <span>Farmer</span>
                        <span>↔</span>
                        <span>Vendor</span>
                    </div>
                    <p className="text-center text-neutral-600">
                        Real-time communication bridge for negotiation and expert consultation.
                    </p>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide10_Features;

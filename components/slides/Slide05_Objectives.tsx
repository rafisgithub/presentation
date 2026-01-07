import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Scan, ShoppingBag, MessageCircle, Smartphone, Droplets } from 'lucide-react';

const objectives = [
    { icon: Scan, text: 'AI-Based Leaf Disease Detection', color: 'bg-green-100 text-green-700' },
    { icon: Droplets, text: 'Pesticide Recommendation System', color: 'bg-cyan-100 text-cyan-700' },
    { icon: ShoppingBag, text: 'Multi-Vendor Marketplace', color: 'bg-purple-100 text-purple-700' },
    { icon: MessageCircle, text: 'Real-Time Communication', color: 'bg-orange-100 text-orange-700' },
    { icon: Smartphone, text: 'Cross-Platform Mobile App', color: 'bg-blue-100 text-blue-700' },
];

const Slide05_Objectives = () => {
    return (
        <SlideWrapper slideNumber={5}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Project Objectives</h2>

            <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
                {objectives.map((obj, index) => (
                    <div key={index} className="flex items-center p-6 bg-white border border-neutral-100 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-x-2">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-8 ${obj.color}`}>
                            <obj.icon size={32} />
                        </div>
                        <span className="text-2xl font-medium text-neutral-700">{obj.text}</span>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};

export default Slide05_Objectives;

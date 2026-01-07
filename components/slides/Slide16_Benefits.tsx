import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Leaf, Handshake, Info, DollarSign } from 'lucide-react';

const benefits = [
    {
        title: 'Reduced Crop Loss',
        desc: 'Early disease detection helps farmers save their harvest.',
        icon: Leaf,
        color: 'bg-green-100 text-green-700'
    },
    {
        title: 'Direct Access',
        desc: 'Farmers can connect directly with verified vendors.',
        icon: Handshake,
        color: 'bg-blue-100 text-blue-700'
    },
    {
        title: 'Expert Advice',
        desc: 'Access to agricultural experts for better guidance.',
        icon: Info,
        color: 'bg-purple-100 text-purple-700'
    },
    {
        title: 'Cost & Time Savings',
        desc: 'Efficient diagnosis and purchasing saves resources.',
        icon: DollarSign,
        color: 'bg-orange-100 text-orange-700'
    },
];

const Slide16_Benefits = () => {
    return (
        <SlideWrapper slideNumber={16}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Project Benefits</h2>

            <div className="grid grid-cols-2 gap-8 px-12 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center p-8 bg-white border border-neutral-100 rounded-2xl shadow-sm text-center hover:shadow-lg transition-all duration-300">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${benefit.color}`}>
                            <benefit.icon size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-800 mb-3">{benefit.title}</h3>
                        <p className="text-lg text-neutral-600">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};

export default Slide16_Benefits;

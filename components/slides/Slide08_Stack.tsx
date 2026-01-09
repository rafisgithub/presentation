import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Smartphone, Server, Database, Activity, Box, Cpu } from 'lucide-react';

const techStack = [
    { area: 'Frontend', tech: 'Flutter / Dart', icon: Smartphone, color: 'text-blue-500 bg-blue-50' },
    { area: 'Backend', tech: 'Django / DRF / Python', icon: Server, color: 'text-green-600 bg-green-50' },
    { area: 'AI/ML', tech: 'TensorFlow, Keras, CNN', icon: Cpu, color: 'text-orange-500 bg-orange-50' },
    { area: 'Database', tech: 'PostgreSQL', icon: Database, color: 'text-indigo-500 bg-indigo-50' },
    { area: 'Real-time', tech: 'Django Channels, Redis', icon: Activity, color: 'text-red-500 bg-red-50' },
    { area: 'DevOps', tech: 'Docker, Compose', icon: Box, color: 'text-cyan-500 bg-cyan-50' },
];

const Slide08_Stack = () => {
    return (
        <SlideWrapper slideNumber={12}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Technology Stack</h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                {techStack.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${item.color}`}>
                            <item.icon size={40} />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-500 uppercase tracking-wider mb-2">{item.area}</h3>
                        <p className="text-xl font-bold text-neutral-800 text-center">{item.tech}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};

export default Slide08_Stack;

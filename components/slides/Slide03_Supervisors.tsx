import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { BadgeCheck } from 'lucide-react';

const Slide03_Supervisors = () => {
    return (
        <SlideWrapper slideNumber={3}>
            <h2 className="text-4xl font-bold text-primary mb-16 border-l-8 border-secondary pl-6">Supervisors</h2>

            <div className="flex justify-center gap-16 items-center h-full pb-16">
                {/* Supervisor 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary max-w-md w-full flex flex-col items-center text-center">
                    <div className="w-40 h-40 bg-neutral-100 rounded-full mb-6 flex items-center justify-center border-2 border-primary/20">
                        <BadgeCheck size={64} className="text-primary/40" />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-800 mb-2">Sadia Tasnim Barsha</h3>
                    <p className="text-xl text-secondary font-medium mb-4">Assistant Professor</p>
                    <div className="w-16 h-1 bg-neutral-100 rounded-full mb-4" />
                    <p className="text-neutral-500">Department of CSE</p>
                    <p className="text-neutral-500">Sonargaon University</p>
                </div>

                {/* Supervisor 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary max-w-md w-full flex flex-col items-center text-center">
                    <div className="w-40 h-40 bg-neutral-100 rounded-full mb-6 flex items-center justify-center border-2 border-primary/20">
                        <BadgeCheck size={64} className="text-primary/40" />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-800 mb-2">Asif Ahmed Kowshiq</h3>
                    <p className="text-xl text-secondary font-medium mb-4">Lecturer</p>
                    <div className="w-16 h-1 bg-neutral-100 rounded-full mb-4" />
                    <p className="text-neutral-500">Department of CSE</p>
                    <p className="text-neutral-500">Sonargaon University</p>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide03_Supervisors;

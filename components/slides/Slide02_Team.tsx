import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { User } from 'lucide-react';

const teamMembers = [
    { name: 'Rafi Ahmed', id: 'CSE2202026150', image: '/images/rafi.png' },
    { name: 'Mahinoor Akter Mukta', id: 'CSE2101022051', image: '/images/mahi.png' },
    { name: 'Zafar Ahmed', id: 'CSE2202026076', image: '/images/zafor.png' },
    { name: 'Forhad uddin ahmed', id: 'CSE2202026065', image: null },
    { name: 'Md Masud Rana', id: 'CSE1903018035', image: '/images/masud.png' },
    { name: 'Muhibbul alam', id: 'CSE1903018038', image: null },
];

const Slide02_Team = () => {
    return (
        <SlideWrapper slideNumber={2}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Team Members</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-0 md:px-8 pb-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                        {/* Photo Placeholder or Image */}
                        <div className="w-32 h-32 bg-neutral-200 rounded-lg mb-4 flex flex-col items-center justify-center text-neutral-400 overflow-hidden relative">
                            {member.image ? (
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <>
                                    <User size={48} strokeWidth={1} className="mb-2" />
                                    <span className="text-xs font-medium uppercase tracking-wide">Photo</span>
                                </>
                            )}
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-800 text-center">{member.name}</h3>
                        <p className="text-primary font-mono mt-1">{member.id}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};

export default Slide02_Team;

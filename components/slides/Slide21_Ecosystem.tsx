import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { UserCog, MessageCircle } from 'lucide-react';

const Slide21_Ecosystem = () => {
    return (
        <SlideWrapper slideNumber={21}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Profile & Communication</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/3 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        Stay connected and manage your personal presence.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Profile Management</h3>
                                <p className="text-neutral-600">Update personal information and account settings easily.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Direct Chat</h3>
                                <p className="text-neutral-600">Communicate directly with vendors for queries and support.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Images Section */}
                <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                    {/* Feature 1: Profile */}
                    <div className="flex flex-col items-center group">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-neutral-100 h-[60vh] w-full bg-neutral-900">
                            <img
                                src="/mobile-app-features-for-customer/profile-update.jpg"
                                alt="Profile Update"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                            <UserCog className="text-blue-600" size={20} />
                            <span className="font-medium">Profile</span>
                        </div>
                    </div>

                    {/* Feature 2: Chat */}
                    <div className="flex flex-col items-center group">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-neutral-100 h-[60vh] w-full bg-neutral-900">
                            <img
                                src="/mobile-app-features-for-customer/chat-screen.jpg"
                                alt="Chat Screen"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                            <MessageCircle className="text-green-600" size={20} />
                            <span className="font-medium">Live Chat</span>
                        </div>
                    </div>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide21_Ecosystem;

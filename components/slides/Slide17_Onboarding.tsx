import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { UserPlus, Globe } from 'lucide-react';

const Slide17_Onboarding = () => {
    return (
        <SlideWrapper slideNumber={17}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">User Onboarding & Localization</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/3 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        A secure and localized entry point for all farmers.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Easy Registration</h3>
                                <p className="text-neutral-600">Simple sign-up process with secure authentication.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Bilingual Support</h3>
                                <p className="text-neutral-600">Full support for both Bangla and English languages.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Images Section */}
                <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                    {/* Feature 2: Signup */}
                    <div className="flex flex-col items-center group">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-neutral-100 h-[60vh] w-full bg-neutral-900">
                            <img
                                src="/mobile-app-features-for-customer/account-create-screen.jpg"
                                alt="Create Account"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                            <UserPlus className="text-blue-600" size={20} />
                            <span className="font-medium">Sign-up</span>
                        </div>
                    </div>

                    {/* Feature 3: Language */}
                    <div className="flex flex-col items-center group">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-neutral-100 h-[60vh] w-full bg-neutral-900">
                            <img
                                src="/mobile-app-features-for-customer/language-choose-screen.jpg"
                                alt="Language Selection"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                            <Globe className="text-purple-600" size={20} />
                            <span className="font-medium">Localization</span>
                        </div>
                    </div>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide17_Onboarding;

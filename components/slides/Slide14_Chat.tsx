import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Wifi, MessageCircle, Clock, Database } from 'lucide-react';

const Slide14_Chat = () => {
    return (
        <SlideWrapper slideNumber={14}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Real-time Chat System</h2>

            <div className="grid grid-cols-2 gap-12 px-8 h-full pb-8">

                {/* Left: Interactive/Visual Flow */}
                <div className="bg-neutral-50 rounded-2xl border-4 border-dashed border-neutral-200 flex flex-col items-center justify-center relative p-8">
                    <div className="flex justify-between w-full max-w-md items-center mb-12">
                        {/* Farmer */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-500">
                                <span className="font-bold text-blue-700">F</span>
                            </div>
                            <span className="font-semibold text-neutral-600">Farmer</span>
                        </div>

                        {/* Connection Lines */}
                        <div className="flex-1 h-1 bg-neutral-300 mx-4 relative">
                            <Wifi size={20} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 bg-neutral-50 px-1" />
                        </div>

                        {/* Server */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-500 shadow-lg z-10">
                                <span className="font-bold text-green-700">WebSocket</span>
                            </div>
                        </div>

                        {/* Connection Lines */}
                        <div className="flex-1 h-1 bg-neutral-300 mx-4 relative">
                            <Wifi size={20} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 bg-neutral-50 px-1" />
                        </div>

                        {/* Vendor */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-500">
                                <span className="font-bold text-purple-700">V</span>
                            </div>
                            <span className="font-semibold text-neutral-600">Vendor</span>
                        </div>
                    </div>

                    <span className="text-neutral-400 font-mono text-sm absolute bottom-8">ws://server:8001/chat/room_id/</span>
                </div>

                {/* Right: Feature List */}
                <div className="flex flex-col justify-center gap-6">
                    <div className="flex items-start gap-4 p-4 border border-neutral-100 rounded-xl bg-white shadow-sm">
                        <div className="bg-green-100 p-3 rounded-lg text-green-600"><Wifi size={24} /></div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">WebSocket Implementation</h3>
                            <p className="text-neutral-600">Persistent, full-duplex communication channels.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-neutral-100 rounded-xl bg-white shadow-sm">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Clock size={24} /></div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Instant Delivery</h3>
                            <p className="text-neutral-600">Low latency message transmission (&lt;100ms).</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-neutral-100 rounded-xl bg-white shadow-sm">
                        <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><Database size={24} /></div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Chat History</h3>
                            <p className="text-neutral-600">Persistent storage of conversation logs.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-neutral-100 rounded-xl bg-white shadow-sm">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><MessageCircle size={24} /></div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Status Indicators</h3>
                            <p className="text-neutral-600">Real-time online/offline presence updates.</p>
                        </div>
                    </div>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide14_Chat;

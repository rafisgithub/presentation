import React from 'react';
import SlideWrapper from '../SlideWrapper';

const Slide22_SellerDashboard = () => {
    return (
        <SlideWrapper slideNumber={22}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Seller Dashboard</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative border-8 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900 h-[65vh]">
                        <img
                            src="/mobile-app-features-for-seller/seller-dashboard.jpg"
                            alt="Seller Dashboard Interface"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Description Section */}
                <div className="w-full md:w-1/2 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        A comprehensive command center for agro-vendors.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Real-time Metrics</h3>
                                <p className="text-neutral-600">Total sales, orders, and products at a glance.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Quick Actions</h3>
                                <p className="text-neutral-600">Fast access to product addition, order management, and profile settings.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full font-bold">3</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Visual Insights</h3>
                                <p className="text-neutral-600">Graphical representation of sales performance over time.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide22_SellerDashboard;

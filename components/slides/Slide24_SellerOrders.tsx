import React from 'react';
import SlideWrapper from '../SlideWrapper';

const Slide24_SellerOrders = () => {
    return (
        <SlideWrapper slideNumber={24}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Order Management</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative border-8 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900 h-[65vh]">
                        <img
                            src="/mobile-app-features-for-seller/seller-customer-order-list.jpg"
                            alt="Seller Orders Interface"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Description Section */}
                <div className="w-full md:w-1/2 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        Track and fulfill customer orders seamlessly.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Order Overview</h3>
                                <p className="text-neutral-600">See all active orders with customer details and order totals.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-cyan-100 text-cyan-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Status Tracking</h3>
                                <p className="text-neutral-600">Monitor orders from 'Pending' to 'Delivered' or 'Cancelled'.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full font-bold">3</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Customer Interaction</h3>
                                <p className="text-neutral-600">Access customer info for smooth delivery coordination.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide24_SellerOrders;

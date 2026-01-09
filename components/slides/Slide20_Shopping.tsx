import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { PackageCheck } from 'lucide-react';

const Slide20_Shopping = () => {
    return (
        <SlideWrapper slideNumber={20}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Seamless Shopping</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/2 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        A smooth purchasing journey from cart to delivery.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Cart Management</h3>
                                <p className="text-neutral-600">Review selected items and proceed to secure checkout.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Order Tracking</h3>
                                <p className="text-neutral-600">Monitor order status in real-time, from pending to delivery.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative border-8 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900 h-[65vh]">
                        <img
                            src="/mobile-app-features-for-customer/my-order.jpg"
                            alt="Order History"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide20_Shopping;

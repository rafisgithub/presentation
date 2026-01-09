import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Package, ShieldCheck } from 'lucide-react';

const Slide28_AdminProductManagement = () => {
    return (
        <SlideWrapper slideNumber={28}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Product Oversight</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/3 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        Ensure catalog quality and compliance.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Catalog Management</h3>
                                <p className="text-neutral-600">Oversee all product listings across the platform.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Quality Assurance</h3>
                                <p className="text-neutral-600">Monitor product details and images for standard compliance.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/3 flex justify-center items-center">
                    <div className="relative border-4 border-neutral-200 rounded-xl overflow-hidden shadow-2xl bg-white h-[60vh] w-full">
                        <div className="absolute top-0 left-0 right-0 h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <img
                            src="/super-admin-dashboard-features/product-management.png"
                            alt="Product Management Overview"
                            className="w-full h-full object-contain pt-6"
                        />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide28_AdminProductManagement;

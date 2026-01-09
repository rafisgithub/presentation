import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Search, ShoppingBag } from 'lucide-react';

const Slide19_Discovery = () => {
    return (
        <SlideWrapper slideNumber={19}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Product Discovery</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/3 space-y-8">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        Effortlessly find and explore agricultural products.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Advanced Search</h3>
                                <p className="text-neutral-600">Filter and search for products by category, price, or name.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Detailed Views</h3>
                                <p className="text-neutral-600">Comprehensive product details to make informed decisions.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Images Section */}
                <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                    {/* Feature 1: Search */}
                    <div className="flex flex-col items-center group">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-neutral-100 h-[60vh] w-full bg-neutral-900">
                            <img
                                src="/mobile-app-features-for-customer/choose-search-option.jpg"
                                alt="Search Options"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                            <Search className="text-blue-600" size={20} />
                            <span className="font-medium">Search</span>
                        </div>
                    </div>

                    {/* Feature 2: Product Details */}
                    <div className="flex flex-col items-center group">
                        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-neutral-100 h-[60vh] w-full bg-neutral-900">
                            <img
                                src="/mobile-app-features-for-customer/product-details.jpg"
                                alt="Product Details"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                            <ShoppingBag className="text-green-600" size={20} />
                            <span className="font-medium">Details</span>
                        </div>
                    </div>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide19_Discovery;

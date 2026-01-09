import React from 'react';
import SlideWrapper from '../SlideWrapper';

const Slide23_SellerProducts = () => {
    return (
        <SlideWrapper slideNumber={23}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Product Management</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        Effortlessly manage inventory and product details.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Inventory List</h3>
                                <p className="text-neutral-600">View all listed products with prices and stock status.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Easy Editing</h3>
                                <p className="text-neutral-600">Update product information, pricing, and availability instantly.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full font-bold">3</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Add New Products</h3>
                                <p className="text-neutral-600">Streamlined flow to create new listings with photos and categories.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                    <div className="relative border-8 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900 h-[65vh]">
                        <img
                            src="/mobile-app-features-for-seller/seller-products.jpg"
                            alt="Seller Products Interface"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide23_SellerProducts;

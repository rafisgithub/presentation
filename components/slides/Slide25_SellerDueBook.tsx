import React from 'react';
import SlideWrapper from '../SlideWrapper';

const Slide25_SellerDueBook = () => {
    return (
        <SlideWrapper slideNumber={25}>
            <h2 className="text-4xl font-bold text-primary mb-8 border-l-8 border-secondary pl-6">Digital Due Book</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center h-full">

                {/* Description Section */}
                <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
                    <p className="text-2xl text-neutral-700 leading-relaxed">
                        A modern solution for managing credit and payments.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full font-bold">1</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Credit Tracking</h3>
                                <p className="text-neutral-600">Keep accurate records of customer dues and credit history.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-lime-100 text-lime-600 rounded-full font-bold">2</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Payment Recording</h3>
                                <p className="text-neutral-600">Log partial or full payments instantly to update balances.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                            <span className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full font-bold">3</span>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-800">Hassle-free Management</h3>
                                <p className="text-neutral-600">Replace traditional paper ledgers with a secure digital system.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                    <div className="relative border-8 border-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900 h-[65vh]">
                        <img
                            src="/mobile-app-features-for-seller/due-book.jpg"
                            alt="Seller Due Book Interface"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide25_SellerDueBook;

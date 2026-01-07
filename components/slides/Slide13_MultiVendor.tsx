import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Store, UserCheck, Truck, BarChart3 } from 'lucide-react';

const features = [
    {
        title: 'Vendor Registration & Verification',
        desc: 'Strict KYC process to ensure authentic sellers.',
        icon: UserCheck,
        color: 'bg-blue-100 text-blue-600'
    },
    {
        title: 'Product Listing Management',
        desc: 'Easy-to-use dashboard for uploading products.',
        icon: Store,
        color: 'bg-green-100 text-green-600'
    },
    {
        title: 'Order Tracking System',
        desc: 'Real-time updates on shipment status.',
        icon: Truck,
        color: 'bg-orange-100 text-orange-600'
    },
    {
        title: 'Admin Dashboard',
        desc: 'Centralized monitoring of all platform activities.',
        icon: BarChart3,
        color: 'bg-purple-100 text-purple-600'
    },
];

const Slide13_MultiVendor = () => {
    return (
        <SlideWrapper slideNumber={13}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Multi-Vendor System</h2>

            <div className="grid grid-cols-2 gap-8 px-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-6 p-6 bg-white border border-neutral-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${feature.color}`}>
                            <feature.icon size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-2">{feature.title}</h3>
                            <p className="text-neutral-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};

export default Slide13_MultiVendor;

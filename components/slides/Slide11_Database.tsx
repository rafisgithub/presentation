import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Table, Key } from 'lucide-react';

const tables = [
    'User (Auth, Profile)',
    'Product (Inventory)',
    'Disease (Info)',
    'Order (Transactions)',
    'Message (Chat)',
];

const Slide11_Database = () => {
    return (
        <SlideWrapper slideNumber={11}>
            <h2 className="text-4xl font-bold text-primary mb-12 border-l-8 border-secondary pl-6">Database Design</h2>

            <div className="flex h-full gap-8 pb-8">

                {/* Left: Schema List */}
                <div className="w-1/3 flex flex-col justify-center gap-4">
                    <h3 className="text-2xl font-semibold mb-4 text-neutral-700">Core Tables</h3>
                    {tables.map((table, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg shadow-sm">
                            <Table className="text-blue-500" size={24} />
                            <span className="font-mono text-lg text-neutral-800">{table}</span>
                        </div>
                    ))}
                </div>

                {/* Right: ER Diagram Placeholder */}
                <div className="w-2/3 bg-neutral-50 border-4 border-dashed border-neutral-300 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Mock ER Diagram Lines */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-black transform rotate-45"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-black transform -rotate-12"></div>
                        <div className="absolute top-1/2 left-1/2 w-full h-px bg-black"></div>
                    </div>

                    <div className="flex gap-8 z-10">
                        <div className="w-32 h-40 bg-white border-2 border-neutral-400 rounded shadow-md flex flex-col items-center justify-center">
                            <Key className="mb-2 text-yellow-500" />
                            <span className="font-bold text-xs">PK: User_ID</span>
                        </div>
                        <div className="w-32 h-40 bg-white border-2 border-neutral-400 rounded shadow-md flex flex-col items-center justify-center">
                            <Key className="mb-2 text-yellow-500" />
                            <span className="font-bold text-xs">PK: Product_ID</span>
                        </div>
                    </div>

                    <span className="mt-8 text-xl font-medium text-neutral-400">ER Diagram Placeholder</span>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide11_Database;

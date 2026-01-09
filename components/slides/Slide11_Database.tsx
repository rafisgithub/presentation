import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Table, ExternalLink } from 'lucide-react';

const tables = [
    'User (Auth, Profile)',
    'Product (Inventory)',
    'Disease (Info)',
    'Order (Transactions)',
    'Message (Chat)',
];

const Slide11_Database = () => {
    return (
        <SlideWrapper slideNumber={9}>
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

                {/* Right: ER Diagram */}
                <div className="w-2/3 bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src="/images/db_diagram/db_diragram.png"
                            alt="Database ER Diagram"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <a
                        href="https://dbdiagram.io/d/fina-year-project-67e0d72c75d75cc8442dbf18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
                    >
                        <ExternalLink size={18} />
                        View Live Diagram
                    </a>
                </div>

            </div>
        </SlideWrapper>
    );
};

export default Slide11_Database;

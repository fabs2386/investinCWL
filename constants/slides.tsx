import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SlideContent } from '../types';
import ImageCard from '../components/ImageCard';

const chartData = [
  { name: '111 Cottonwood', income: 117358, noi: 89777 },
  { name: '130 Cottonwood', income: 105564, noi: 77467 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ResponsiveContainer width="80%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', compactDisplay: 'short' }).format(value as number)} />
          <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value as number)} />
          <Legend verticalAlign="bottom" wrapperStyle={{ bottom: 0 }} />
          <Bar dataKey="income" name="Rental Income" fill="#4338ca" barSize={30} />
          <Bar dataKey="noi" name="Net Operating Income" fill="#16a34a" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const FinancialsComparison: React.FC = () => {
    const data = {
        prop1: { name: '111 Cottonwood Circle', details: ['Income: $117,358', 'Expenses: $27,581', 'NOI: $89,777', 'Expense Ratio: 23.5%'] },
        prop2: { name: '130 Cottonwood Circle', details: ['Income: $105,564', 'Expenses: $28,097', 'NOI: $77,467', 'Expense Ratio: 26.6%'] },
        summary: ['Projected NOI range: $77K–$89K', 'Cap on $1.1M total: 7.0% to 8.2%', 'Figures exclude cleaning, taxes, and debt']
    };

    const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <li className="flex items-start">
            <span className="text-indigo-500 mr-4 mt-1.5 text-sm">&#9679;</span>
            <span>{children}</span>
        </li>
    );

    return (
        <div>
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">{data.prop1.name}</h2>
                    <ul className="list-none space-y-3 text-lg text-gray-600">
                        {data.prop1.details.map((point, index) => <ListItem key={index}>{point}</ListItem>)}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">{data.prop2.name}</h2>
                    <ul className="list-none space-y-3 text-lg text-gray-600">
                        {data.prop2.details.map((point, index) => <ListItem key={index}>{point}</ListItem>)}
                    </ul>
                </div>
            </div>
            <div>
                 <ul className="list-none space-y-3 text-lg text-gray-600">
                    {data.summary.map((point, index) => <ListItem key={index}>{point}</ListItem>)}
                </ul>
            </div>
        </div>
    );
};


export const SLIDES_DATA: SlideContent[] = [
    {
        title: '', // Empty title signifies a cover slide
        copy: [],
        visual: (
           <div className="relative w-full h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('https://iili.io/FpsqohB.png')" }}>
                <div className="absolute inset-0 bg-black/60 rounded-xl" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-shadow">Cottonwood Lodge</h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-200">A Premier Investment Opportunity in Branson, Missouri</p>
                    <div className="absolute bottom-8 text-center">
                        <p className="text-sm text-gray-300 mb-2">Presented By</p>
                        <div className="bg-white px-2 py-1 rounded-lg shadow-soft">
                            <img
                                src="https://iili.io/FpcvtPj.png"
                                alt="Ozark Mountain Realty Group Logo"
                                className="w-44 h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Project Snapshot: Prime Location',
        copy: [{
            heading: 'Key Facts:',
            points: [
                'Total project cost: $1.1M',
                'Gross income potential: $105K–$117K/year',
                'NOI: $77K–$89K',
                'Cap on cost: 7.0%–8.2%',
                'Lot owned. No HOA or COA',
                'Zoned and approved for nightly rental',
            ]
        }],
        visual: (
           <ImageCard images={[{ src: "https://iili.io/FpsqYpR.png", alt: "Map view of Cottonwood Circle lot with parcel overlay" }]} />
        ),
    },
    {
        title: 'Inside Branson. Walkable. Zoned.',
        copy: [{
            heading: 'Details:',
            points: [
                'Address: 126 Cottonwood Circle, Branson, MO 65616',
                'Parcel ID: 08-9.0-31-000-000-003.061',
                'Subdivision: Summerwood Estates 2nd Addition',
                'Within corporate limits',
                'Walkable to grocery, retail, and restaurant center',
                'Infrastructure in place. Flat build site',
            ]
        }],
        visual: (
             <ImageCard images={[{ src: "https://iili.io/Fpb7qRj.png", alt: "Map showing proximity to major roads and commercial areas" }]} aspectRatio="1393 / 853" />
        ),
    },
    {
        title: '4,584 SF Lodge with Premium Envelope',
        copy: [{
            heading: 'Stats:',
            points: [
                'Main level: 2,322 SF',
                'Lower level: 2,262 SF',
                '5 Bedrooms + Bunk Room + Media Room',
                '4.5 Baths',
                'Occupancy design: 24 guests',
                'Exterior walls: 11" ICF',
                'Roof: Black steel',
                'Windows: Ozark Windows double-hung',
                'Siding: LP 7" lap + shakes',
            ]
        }],
        visual: (
            <ImageCard 
              images={[
                { src: "https://iili.io/FpimEqQ.png", alt: "Interior render of the lodge's great room with high ceilings and fireplace" },
                { src: "https://iili.io/FpimlXj.png", alt: "Interior render of the lodge's modern kitchen and dining area" }
              ]}
              aspectRatio="1 / 1"
            />
        ),
    },
    {
        title: 'STR-Proven Layout. Sauna and Hot Tub Included.',
        copy: [{
            heading: 'Interior Features:',
            points: [
                'Quartz countertops',
                'LVP flooring throughout',
                'Stainless appliance package',
                'Washer and dryer',
                'Private infrared sauna',
                'Private hot tub',
                'Painted murals for local branding',
                'Guest-ready durable finish palette',
            ]
        }],
        visual: (
            <ImageCard images={[
                { src: "https://iili.io/FpimhkF.png", alt: "Interior render of a spacious, modern lodge bedroom" },
                { src: "https://iili.io/Fpim0Lx.png", alt: "Interior render of a modern lodge bathroom" },
                { src: "https://iili.io/Fpim4kX.png", alt: "Interior render of a lodge bunk room with multiple beds" }
            ]} aspectRatio="1 / 1" />
        ),
    },
    {
        title: 'Fire Feature. Pool. Decks.',
        copy: [
            {
                heading: 'Base Inclusions:',
                points: [
                    'Covered screened deck',
                    'Lower patio with hot tub pad',
                    'Hardscape walkways and drive apron',
                ]
            },
            {
                heading: 'Optional Upgrades:',
                points: [
                    'Pool (10x20): $150,000',
                    'Masonry firepit with stone surround: $20,000',
                ]
            }
        ],
        visual: (
            <ImageCard images={[{ src: "https://iili.io/FpimMrB.png", alt: "Interior render of a modern lodge bathroom with a large shower" }]} aspectRatio="1257 / 772" />
        ),
    },
    {
        title: 'Same-Street STRs. 2024 Real Income.',
        copy: [],
        customCopy: <FinancialsComparison />,
        visual: (
            <div className="bg-green-100 p-2 rounded-xl shadow-soft-lg w-full flex items-center justify-center" style={{ aspectRatio: '4 / 3' }}>
                <div className="w-full h-full bg-white rounded-lg" style={{ transform: 'scale(0.8)' }}>
                    <PerformanceChart />
                </div>
            </div>
        ),
    },
     {
        title: 'Ready to Build. Zoned. Plan Set Included.',
        copy: [
            {
                heading: 'Timeline:',
                points: [
                    'Lot owned and recorded',
                    'Build start possible Q4 2025',
                    'Full architectural set included (PDF + CAD)',
                    'All utilities accessible at lot line',
                    'Includes floor plans, framing, sprinkler set, and 3D renders',
                ]
            },
            {
                heading: 'Next Steps:',
                points: [
                    'Choose base or upgraded package',
                    'Review plan set and comp packet (available by NDA)',
                    'Schedule site walk or investor call',
                ]
            }
        ],
        visual: (
            <div className="bg-green-100 p-2 rounded-xl shadow-soft-lg w-full h-full overflow-hidden">
                <img 
                  src="https://iili.io/FpsqohB.png" 
                  alt="Exterior render of the Cottonwood Lodge showcasing its design and decks" 
                  className="block w-full h-full object-cover rounded-lg"
                />
            </div>
        ),
    },
];
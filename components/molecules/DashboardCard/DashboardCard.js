import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

function DashboardCard({ title, value }) {
    return (
        <div className="w-full flex-shrink-0 basis-full flex-grow sm:basis-[calc(50%_-_10px)] xl:basis-0 bg-white p-4 rounded-lg">
            {/* left */}
            <div>
                <h3 className="text-muted font-bold uppercase">{title}</h3>
                <span className="font-medium tracking-wider text-dark-gray text-3xl scale-y-110 scale-x-105 inline-block my-2">{value}</span>
                <div className='space-x-2'>
                    <span className="text-green-400 text-sm space-x-1">
                        <BiChevronUp />
                        <span>3596</span>
                    </span>
                    <span className='text-muted text-xs'>Last 7 days</span>
                </div>
            </div>
            {/* Right */}
        </div>
    )
}

export default DashboardCard
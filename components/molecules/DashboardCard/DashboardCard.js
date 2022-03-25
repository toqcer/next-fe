import { BxChevronUp, BxChevronDown } from 'public/icons/';
import { useState } from 'react';

const formatter = (num) => {
    if (num / 1e6 >= 1) return `${Math.floor(num / 1e6)}M`;
    if (num / 1e3 >= 1) return `${Math.floor(num / 1e3)}K`;
    return num;
}

const tooltipFormatter = (num) => {
    let res = '';
    let str = String(num);
    let len = str.length;

    if (len <= 3) return str;

    for (let i = 1; i <= len; i++) {
        if (i % 3 === 0 && len - i !== 0) {
            res = `,${str[len - i].concat(res)}`;
            continue;
        }
        res = str[len - i].concat(res);
    }
    return res;
}

function DashboardCard({ title, value }) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="w-full min-h-[120px] flex flex-shrink-0 basis-full flex-grow sm:basis-[calc(50%_-_10px)] xl:basis-0 bg-white px-6 py-4 rounded-lg">
            {/* left */}
            <div className='flex flex-col items-start'>
                <h3 className="text-muted font-bold uppercase">
                    {title}
                </h3>
                <span
                    className="font-medium tracking-wider text-dark-gray text-3xl scale-y-110 scale-x-105 inline-block my-2 relative hover:cursor-context-menu"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    {formatter(value)}
                    {/* Tooltip */}
                    <div
                        before=""
                        className={`absolute ${isShown ? 'opacity-100 visible' : 'opacity-0 invisible'} 
                        transition-opacity ease-in-out font-normal delay-150 w-max h-max px-2 py-1 z-10 
                        text-xs border-muted border-2 text-black bg-white rounded-md 
                        before:-top-[5.5px] before:left-2 before:w-1.5 before:h-1.5 before:bg-white 
                        before:border-t-muted before:border-t-2 before:border-l-2 
                        before:border-l-muted before:rotate-45 before:z-20 before:absolute 
                         before:rounded-tl-sm`}>
                        <span className='z-30'>
                            {tooltipFormatter(value)}
                        </span>
                    </div>
                </span>
                <div className='space-x-2 flex items-center'>
                    <span className="text-success text-sm flex items-center">
                        <BxChevronUp className={`-ml-1 scale-75 fill-success ${isShown && 'scale-0'} transition-all ease-in-out delay-75`} />
                        <span>3596</span>
                    </span>
                    <span className='text-muted text-xs'>Last 7 days</span>
                </div>
            </div>
            {/* Right */}
            <div className='ml-auto'>kanan</div>
        </div>
    )
}

export default DashboardCard
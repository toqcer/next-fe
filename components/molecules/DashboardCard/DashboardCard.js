import { BxChevronUp, BxChevronDown } from "public/icons/";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { numberFormatter, numberWithDot } from './../../../src/helpers/numberFormatter';

function DashboardCard({ title, value, valueLastWeek, Icon, bgIcon }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="w-full min-h-[120px] flex justify-between  flex-col flex-shrink-0 basis-full flex-grow sm:basis-[calc(50%_-_10px)] xl:basis-0 bg-white shadow-lg shadow-gray px-6 py-4 rounded-lg">
      <div className="flex items-center flex-1">
        {/* left */}
        <div className="flex flex-col items-start justify-between">
          <h3 className="text-muted text-sm font-bold uppercase">
            {title}
            <BiShow
              className={`ml-4 lg:hidden ${isShown && "fill-orange-500"
                } align-middle scale-105 cursor-pointer`}
              onClick={() => setIsShown(!isShown)}
            />
          </h3>
          <span
            className="font-medium tracking-wider text-dark-gray text-3xl scale-y-110 scale-x-105 inline-block my-2 relative hover:cursor-context-menu"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {numberFormatter(value)}
            {/* Tooltip */}
            <div
              before=""
              className={`absolute ${isShown ? "opacity-100 visible" : "opacity-0 invisible"
                } 
                        transition-opacity ease-in-out font-normal delay-150 w-max h-max px-2 py-1 z-20 
                        text-xs border-muted border-2 text-black bg-white rounded-md 
                        before:-top-[5.5px] before:left-2 before:w-1.5 before:h-1.5 before:bg-white 
                        before:border-t-muted before:border-t-2 before:border-l-2 
                        before:border-l-muted before:rotate-45 before:z-30 before:absolute 
                         before:rounded-tl-sm`}
            >
              <span className="z-30">{numberWithDot(value)}</span>
            </div>
          </span>
        </div>
        {/* Right */}
        {/* Icons */}
        <div
          className={`ml-auto ${bgIcon ? bgIcon : "bg-orange"
            } shadow-md text-white flex justify-center items-center rounded-full w-12 h-12`}
        >
          {Icon}
        </div>
      </div>
      <div className="flex items-center">
        <span
          className={`text-success text-sm flex items-center ${isShown && "scale-0"
            } transition-all ease-in-out delay-75 z-0`}
        >
          <BxChevronUp className="-ml-1 scale-75 fill-success" />
          <span>{valueLastWeek}</span>
        </span>
        <span className="text-muted text-xs ml-3">Last 7 days</span>
      </div>
    </div>
  );
}

export default DashboardCard;

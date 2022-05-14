const Tooltip = ({isShown,text}) =>{
    return (
        <div
            className={`absolute ${isShown ? "opacity-100 visible" : "opacity-0 invisible"
            } 
                    transition-opacity ease-in-out font-normal delay-150 w-max h-max px-2 py-1 z-20 
                    text-xs border-muted border-2 text-black bg-white rounded-md 
                    before:-top-[5.5px] before:left-2 before:w-1.5 before:h-1.5 before:bg-white 
                    before:border-t-muted before:border-t-2 before:border-l-2 
                    before:border-l-muted before:rotate-45 before:z-30 before:absolute 
                    before:rounded-tl-sm`}
        >
            <span className="z-30">{text}</span>
        </div>
    )
}

export default Tooltip;
import Link from 'next/link';
import { BiChevronRight } from "react-icons/bi";

import MenuStyle from '/styles/Menu.module.scss'

function SidebarLink({ text, active, href, Icon, children, onClick }) {
    return (
        <>
            {children ? (
                <li className={`uppercase   font-semibold ${active ? 'text-orange active' : 'text-primary '}   rounded-sm list-none flex space-x-2 ${children && "flex-col"} 
                 `}>
                    <a className={`w-full px-4 py-3 cursor-pointer inline-flex gap-x-2 items-center hover:text-orange hover:bg-gray/30 ${MenuStyle['sidebar-link']}`} onClick={onClick}>
                        {Icon}
                        {text}
                        <span className={`${MenuStyle['arrow-dropdown']} transition-transform duration-300 ml-auto`}><BiChevronRight /></span>
                    </a>
                    {children}
                </li>
            ) : (
                <Link href={href} passHref>
                    <li className={`uppercase   font-semibold ${active ? 'text-orange active' : 'text-primary '}   rounded-sm list-none flex space-x-2 ${MenuStyle['sidebar-link']}`}>
                        <span className='w-full space-x-2 px-4 py-3 cursor-pointer inline-flex gap-x-2 items-center hover:text-orange hover:bg-gray/30'>{Icon}{text}</span>
                    </li>
                </Link>
            )
            }
        </>
    )
}

export default SidebarLink
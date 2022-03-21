import Link from 'next/link';
import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect, useRef } from 'react';
import MenuStyle from '/styles/Menu.module.scss'
import { useRouter } from "next/router";

function SidebarLink({ text, href, Icon, children }) {
    const refEl = useRef(null);
    const router = useRouter();
    const [isActive, setIsActive] = useState(() => {
        return router.pathname === href;
    });
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        try {
            refEl.current?.querySelector('.active') && setIsOpen(true);
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <>
            {children ? (
                <li ref={refEl} className={`uppercase font-semibold rounded-sm list-none flex space-x-2 ${children && "flex-col"} 
                 `}>
                    <a className={`${MenuStyle['sidebar-link']} ${isOpen && MenuStyle['dropdown-close']} w-full px-4 py-3 cursor-pointer inline-flex gap-x-2 items-center hover:text-orange hover:bg-gray/30 `} onClick={() => setIsOpen(!isOpen)}>
                        {Icon}
                        {text}
                        <span className={`${MenuStyle['arrow-dropdown']} transition-transform duration-300 ml-auto`}><BiChevronRight /></span>
                    </a>
                    {children}
                </li>
            ) : (
                <Link href={href} passHref>
                    <li className={`${MenuStyle['sidebar-link']} uppercase font-semibold ${isActive ? 'active' : 'text-dark-gray '} rounded-sm list-none flex space-x-2 `}>
                        <span className='w-full space-x-2 px-4 py-3 cursor-pointer inline-flex gap-x-2 items-center hover:text-orange hover:bg-gray/30'>{Icon}{text}</span>
                    </li>
                </Link>
            )
            }
        </>
    )
}

export default SidebarLink
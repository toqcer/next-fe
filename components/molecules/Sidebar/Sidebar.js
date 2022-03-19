import { SidebarLink } from "@components/atoms";
import { BiDesktop, BiCog, BiKey, BiUser } from "react-icons/bi";

import MenuStyle from '/styles/Menu.module.scss'

function Sidebar() {
    // const inputEl = useRef()
    return (
        <aside className="max-w-xs w-full py-8 px-6 ">
            <h1 className="text-4xl font-bold text-orange text-center pb-12 border-b-2 border-muted">ToqCer</h1>
            <div className="mt-4">
                <SidebarLink text="dashboard" href='#1' Icon={<BiDesktop />} active />
                <SidebarLink text="setting" href='#2' Icon={<BiCog />} />
                <SidebarLink text="admin" href='#3' Icon={<BiKey />} />
                <SidebarLink text="user" href='#4' Icon={<BiUser />} onClick={(e) => {
                    e.target.classList.toggle(MenuStyle['dropdown-close']);
                    console.log(e.target)
                }}>
                    <ul className={`ml-0 mt-2 transition-all duration-300 overflow-hidden`}>
                        <SidebarLink text="Dshbor" href='#4' Icon={<BiUser />} active />
                        <SidebarLink text="SSSS" href='#4' Icon={<BiUser />} />
                        <SidebarLink text="DSSD" href='#4' Icon={<BiUser />} />
                    </ul>
                </SidebarLink>
            </div>
        </aside >
    )
}

export default Sidebar
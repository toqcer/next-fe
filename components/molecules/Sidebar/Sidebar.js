import { Gap, SidebarLink, SidebarSection } from "@components/atoms";
import { useState } from 'react';
import sidebarProps from "consts/dashboard";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className="max-w-md w-[90vw] lg:max-w-[300px] lg:w-full py-8 px-4 h-full bg-white overflow-y-auto z-50 absolute hidden lg:relative lg:block border-r border-gray-300">
            <h1 className="text-4xl font-bold text-orange text-center pb-12 border-b-2 border-muted">ToqCer</h1>
            <div className="select-none">
                {sidebarProps.map((sidebarProp, index) => (
                    <SidebarSection key={index} border={sidebarProp?.border}>
                        {sidebarProp.children.map(level1 => (
                            level1?.children ?
                                (<SidebarLink key={Math.random} text={level1.text} href={level1.href} Icon={level1.icon()}>
                                    <ul className={`m-0 transition-all duration-300 overflow-hidden`} key={Math.random()}>
                                        {level1.children.map(level2 => (
                                            <SidebarLink
                                                text={level2.text}
                                                key={Math.random()}
                                                href={level2.href}
                                                Icon={level2.icon()}
                                                className="py-[5.5px]" />
                                        ))}
                                    </ul>
                                </SidebarLink>) : (
                                    <SidebarLink
                                        text={level1.text}
                                        key={Math.random()}
                                        href={level1.href}
                                        Icon={level1.icon()}
                                        className="py-3" />
                                ))
                        )}
                    </SidebarSection>)
                )}
                {/* <SidebarSection border>
                    <SidebarLink text="dashboard" href='#1' Icon={<BiDesktop />} active />
                    <SidebarLink text="setting" href='#2' Icon={<BiCog />} />
                    <SidebarLink text="admin" href='#3' Icon={<BiKey />} />
                    <SidebarLink text="user" href='#4' Icon={<BiUser />}>
                        <DropdownContainer>
                            <SidebarLink text="Dshbor" href='#4' Icon={<BiUser />} />
                        </DropdownContainer>
                    </SidebarLink>
                </SidebarSection>
                <SidebarSection border>
                    <SidebarLink text="product" href='#4' Icon={<BiPackage />}>
                        <DropdownContainer>
                            <SidebarLink text="product" href='#4' Icon={<BiUser />} />
                        </DropdownContainer>
                    </SidebarLink>
                    <SidebarLink text="marketplace" href='#4' Icon={<BiStore />}>
                        <DropdownContainer>
                            <SidebarLink text="product" href='#4' Icon={<BiUser />} />
                        </DropdownContainer>
                    </SidebarLink>
                </SidebarSection>
                <SidebarSection>
                    <SidebarLink text="dashboard" href='#1' Icon={<BiDesktop />} />
                    <SidebarLink text="setting" href='#2' Icon={<BiCog />} />
                </SidebarSection> */}
            </div>
        </aside >
    )
}

export default Sidebar
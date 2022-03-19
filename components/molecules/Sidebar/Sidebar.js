import { SidebarLink, SidebarSection } from "@components/atoms";
import { DropdownContainer } from "@components/molecules"
import { BiDesktop, BiCog, BiKey, BiUser, BiPackage, BiStore } from "react-icons/bi";

function Sidebar() {

    return (
        <aside className="max-w-xs w-full py-8 px-6 h-full overflow-y-scroll">
            <h1 className="text-4xl font-bold text-orange text-center pb-12 border-b-2 border-muted">ToqCer</h1>
            <div className="select-none">
                <SidebarSection border>
                    <SidebarLink text="dashboard" href='#1' Icon={<BiDesktop />} active />
                    <SidebarLink text="setting" href='#2' Icon={<BiCog />} />
                    <SidebarLink text="admin" href='#3' Icon={<BiKey />} />
                    <SidebarLink text="user" href='#4' Icon={<BiUser />}>
                        <DropdownContainer>
                            <SidebarLink text="Dshbor" href='#4' Icon={<BiUser />} active />
                            <SidebarLink text="SSSS" href='#4' Icon={<BiUser />} />
                        </DropdownContainer>
                    </SidebarLink>
                </SidebarSection>
                <SidebarSection border>
                    <SidebarLink text="product" href='#4' Icon={<BiPackage />}>
                        <DropdownContainer>
                            <SidebarLink text="product" href='#4' Icon={<BiUser />} active />
                        </DropdownContainer>
                    </SidebarLink>
                    <SidebarLink text="marketplace" href='#4' Icon={<BiStore />}>
                        <DropdownContainer>
                            <SidebarLink text="product" href='#4' Icon={<BiUser />} active />
                        </DropdownContainer>
                    </SidebarLink>
                </SidebarSection>
                <SidebarSection>
                    <SidebarLink text="dashboard" href='#1' Icon={<BiDesktop />} />
                    <SidebarLink text="setting" href='#2' Icon={<BiCog />} />
                </SidebarSection>
            </div>
        </aside >
    )
}

export default Sidebar
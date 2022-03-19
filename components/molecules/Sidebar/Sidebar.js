import { SidebarLink } from "@components/atoms"

function Sidebar() {
    return (
        <aside className="max-w-xs w-full py-8 px-6 ">
            <h1 className="text-4xl font-bold text-orange text-center pb-12 border-b-2 border-muted">ToqCer</h1>
            <div className="mt-4">
                <SidebarLink text="dashboard" href='#1' active />
                <SidebarLink text="setting" href='#2' />
                <SidebarLink text="table" href='#3' />
                <SidebarLink text="maps" href='#4' />
            </div>
        </aside>
    )
}

export default Sidebar
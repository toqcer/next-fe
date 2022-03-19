import { Gap } from "@components/atoms"
import { Header, Sidebar } from "@components/molecules"


function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 bg-primary overflow-y-scroll px-16 h-screen">
                <Header />
                <Gap height={1000} />
            </main>
        </div>
    )
}

export default Dashboard
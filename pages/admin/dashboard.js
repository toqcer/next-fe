import { Header, Sidebar } from "@components/molecules"


function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 bg-primary px-16 py-8">
                <Header />
            </main>
        </div>
    )
}

export default Dashboard
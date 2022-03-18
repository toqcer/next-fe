import { Header } from "@components/molecules"

function Dashboard() {
    return (
        <div className="flex h-screen">
            <aside className="max-w-xs w-full py-8 px-6 ">
                <h1 className="text-4xl font-bold text-orange text-center pb-14 border-b-2 border-muted">ToqCer</h1>
            </aside>
            <main className="flex-1 bg-primary px-16 py-8">
                <Header />
            </main>
        </div>
    )
}

export default Dashboard
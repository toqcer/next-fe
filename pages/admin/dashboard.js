import { Gap } from "@components/atoms"
import { Header, Sidebar } from "@components/molecules"


function Dashboard() {
    return (
        <div className="flex h-screen relative">
            <Sidebar />
            <main className="flex-1 overflow-y-scroll h-screen">
                <section className="bg-primary px-14">
                    <Header title='dashboard' />
                    <div>

                    </div>
                </section>
                <Gap height={1000} />
            </main>
        </div>
    )
}

export default Dashboard
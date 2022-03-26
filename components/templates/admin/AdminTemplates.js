import { Sidebar, Header, Footer } from '@components/molecules';

export default function AdminTemplates({ children }) {
    return (
        <div className="flex h-screen relative">
            <Sidebar />
            <main className="flex-1 overflow-y-auto h-screen">
                <section className="bg-primary">
                    <div className="container">
                        <Header title="dashboard" />
                        <div className="flex flex-wrap py-24 justify-center gap-4">

                        </div>
                    </div>
                </section>

                {children}

                <Footer />
            </main>
        </div>
    )
}

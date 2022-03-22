import { Header, Sidebar } from "@components/molecules"

const ProfileAdmin = () => {
    return (
        <div className="flex h-screen relative">
            <Sidebar />
            <main className="flex-1 overflow-y-scroll h-screen">
                <section className="bg-primary px-14">
                    <Header title='Profile' />
                </section>
            </main>
        </div>
    );
}
 
export default ProfileAdmin;
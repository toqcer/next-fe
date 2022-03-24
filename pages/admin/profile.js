import { Header, Sidebar } from "@components/molecules"
import axios from "axios";

const ProfileAdmin = (props) => {
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

export async function getServerSideProps(ctx) {
    const cookie = ctx.req ? ctx.req.cookies.tokenAdmin : null;
    const refreshAdmin = ctx.req ? ctx.req.cookies.refreshAdmin : null;
    fetch('http://localhost:3000/api/refresh',
        {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                ,
            },
            body: {
                expires: 3600
            }
        })

    return {
        props: {

        }
    }
}
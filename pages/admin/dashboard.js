import { Gap } from "@components/atoms";
import axios from "axios";
import { Header, Sidebar, DashboardCard } from "@components/molecules";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Cookie from "js-cookie";

function Dashboard() {
    const router = useRouter();
    const [data, setData] = useState([]);
    // }
    useEffect(async () => {
        const token = Cookie.get('tokenAdmin');
        try {
            const response = await axios.get('https://staging-api.toqcer.uloy.dev/v1/admin/summary', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setData(response.data.data);
            console.log(data);
        } catch (e) {
            const status = e.response.status;
            if (status === 403) {
                router.reload();
            }
        }
    }, []);

    return (
        <div className="flex h-screen relative">
            <Sidebar />
            <main className="flex-1 overflow-y-scroll h-screen">
                <section className="bg-primary px-14">
                    <Header title='dashboard' />
                    <div className="flex flex-wrap py-24 justify-center gap-4">
                        <DashboardCard title="total order" value={data.total_order} />
                        <DashboardCard title="total product" value={data.total_sales} />
                        <DashboardCard title="total user" value={data.total_user} />
                        <DashboardCard title="order completed" value={data.total_order_completed} />
                    </div>
                </section>
                <div>
                    {/* {order_completed_last_week}
                    {order_last_week} */}
                </div>
                <Gap height={1000} />
            </main>
        </div>
    )
}

export default Dashboard

function getDataSummary() {
    return axios.get('https://staging-api.toqcer.uloy.dev/v1/admin/summary')
        .then(res => res.data)
        .catch(e => { throw e });
}

// export async function getServerSideProps(ctx) {
//     const cookie = ctx.req ? ctx.req.cookies.tokenAdmin : null;
//     if (cookie) {
//         let config = {
//             headers: {
//                 'Authorization': 'Bearer ' + cookie
//             }
//         }
//         const response = await getDataSummary(config)
//         const {
//             order_chart
//             , order_completed_last_week
//             , order_last_week
//             , sales_chart
//             , sales_last_week
//             , total_order
//             , total_order_completed
//             , total_sales
//             , total_user
//             , user_last_week
//         } = response.data
//         return {
//             props: {
//                 order_chart
//                 , order_completed_last_week
//                 , order_last_week
//                 , sales_chart
//                 , sales_last_week
//                 , total_order
//                 , total_order_completed
//                 , total_sales
//                 , total_user
//                 , user_last_week
//             }, // will be passed to the page component as props
//         }
//     }
//     else {
//         return {
//             props: {

//             }
//         }
//         // throw new Error('Error nih boss');
//     }
// }
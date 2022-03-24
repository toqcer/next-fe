import { Gap } from "@components/atoms";
import axios from "axios";

import { Header, Sidebar } from "@components/molecules";
import { useEffect } from "react";
import { useRouter } from 'next/router'

function Dashboard(
    { order_completed_last_week,
        order_last_week,
        total_sales,
        total_order,
        total_user,
        total_order_completed,
        sales_last_week,
    }) {
    const router = useRouter();

    useEffect(() => {
        // if (refreshAdmin) {
        //     axios.post('https://staging-api.toqcer.uloy.dev/v1/token/refresh',
        //         { refresh_token: refreshAdmin })
        //         .then(res => {
        //             const { token, refresh_token } = res.data.data;
        //             axios('../api/login', {
        //                 method: 'post',
        //                 data: {
        //                     token,
        //                     tokenAdmin: refresh_token,
        //                     expires: 3600
        //                 }
        //             }).then(res => router.reload());
        //         })
        //         .catch(e => console.log(e))
        // }
    }, []);

    return (
        <div className="flex h-screen relative">
            <Sidebar />
            <main className="flex-1 overflow-y-scroll h-screen">
                <section className="bg-primary px-14">
                    <Header title='dashboard' />
                </section>
                <div>
                    {order_completed_last_week}
                    {order_last_week}
                </div>
                <Gap height={1000} />
            </main>
        </div>
    )
}

export default Dashboard

function getDataSummary(config) {
    return axios.get('https://staging-api.toqcer.uloy.dev/v1/admin/summary', config)
        .then(res => res.data)
        .catch(e => { throw e });
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req ? ctx.req.cookies.tokenAdmin : null;
    const refreshAdmin = ctx.req ? ctx.req.cookies.refreshAdmin : null;
    console.log(refreshAdmin);
    if (cookie) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + cookie
            }
        }
        const response = await getDataSummary(config)
        const {
            order_chart
            , order_completed_last_week
            , order_last_week
            , sales_chart
            , sales_last_week
            , total_order
            , total_order_completed
            , total_sales
            , total_user
            , user_last_week
        } = response.data
        return {
            props: {
                order_chart
                , order_completed_last_week
                , order_last_week
                , sales_chart
                , sales_last_week
                , total_order
                , total_order_completed
                , total_sales
                , total_user
                , user_last_week
            }, // will be passed to the page component as props
        }
    }
    else {
        return {
            props: {

            }
        }
        // throw new Error('Error nih boss');
    }
}
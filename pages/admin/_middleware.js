import { NextResponse } from "next/server";
import axios from "axios";

export async function middleware(req) {
    const { tokenAdmin, refreshAdmin } = req.cookies;
    const url = req.nextUrl.clone();
    if (tokenAdmin || refreshAdmin) {
        if (url.pathname === '/admin/login') {
            url.pathname = '/admin/dashboard';
            return NextResponse.redirect(url);
        }
    }
    else {
        if (url.pathname !== '/admin/login') {
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }
    }
}
    // else if (refreshAdmin) {
    //     const response = await fetch('https://staging-api.toqcer.uloy.dev/v1/token/refresh', {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         method: "POST",
    //         body: JSON.stringify({ refresh_token: refreshAdmin })
    //     })
    //     const data = await (response.json());
    //     fetch('http://localhost:3000/api/login', {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method: "POST",
    //         body: JSON.stringify({
    //             token: data.data.token,
    //             tokenAdmin: data.data.refresh_token,
    //             expires: 3600
    //         })
    //     })

    // axios('../api/login', {
    //     method: 'post',
    //     data: {
    //         token: data.data.token,
    //         tokenAdmin: data.data.refresh_token,
    //         expires: 3600
    //     }
    // }).then(res => router.reload());
    // axios.post('https://staging-api.toqcer.uloy.dev/v1/token/refresh',
    //     { refresh_token: refreshAdmin })
    //     .then(res => console.log(res))
    //     .catch(e => console.log(e))
    // console.log(datas)
    //     console.log("finally")
    // }
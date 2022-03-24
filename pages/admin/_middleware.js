import { NextResponse } from "next/server";

export async function middleware(req) {
    const { tokenAdmin, refreshAdmin } = req.cookies;
    console.log(req.headers)
    let response = NextResponse.next();
    const url = req.nextUrl.clone();

    if (tokenAdmin) {
        if (url.pathname === '/admin/login') {
            url.pathname = '/admin/dashboard';
            return NextResponse.redirect(url);
        }
    }
    //If user dont have a access cookie
    //Then get a new access cookie and refresh cookie with previous refresh Cookie
    else if (refreshAdmin) {
        const fetchResponse = await fetch("https://staging-api.toqcer.uloy.dev/v1/token/refresh", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh_token: refreshAdmin }),
        });
        const data = await fetchResponse.json();
        const { token, refresh_token } = data.data;
        const setCookie = [
            response.cookie("tokenAdmin", token, {
                secure: process.env.NODE_ENV !== "development",
                maxAge: 3600,
                sameSite: "strict",
                path: "/",
            }),
            response.cookie("refreshAdmin", refresh_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 3600,
                sameSite: "strict",
                path: "/",
            })]
        return response
    }

    else {
        if (url.pathname !== '/admin/login') {
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }
    }
}
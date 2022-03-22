import { NextResponse } from "next/server";
import axios from "axios";
import Cookie from 'js-cookie';

export async function middleware(req) {
    const { tokenAdmin, refresAdminToken } = req.cookies;
    const url = req.nextUrl.clone();
    if (tokenAdmin) {
        if (url.pathname === '/admin/login') {
            url.pathname = '/admin/dashboard';
            return NextResponse.redirect(url);
        }
    }
    else if (tokenAdmin === null && refresAdminToken) {
        //refresh Token
    }
    else {
        url.pathname = '/admin/login';
        return NextResponse.redirect(url);
    }
}
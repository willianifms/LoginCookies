'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlBlock = new URL ('/pages/dashboard', request.url)
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlBlock);
        }
    }


    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard']
};


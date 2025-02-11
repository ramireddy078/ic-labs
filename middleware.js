import { NextResponse } from 'next/server'
import {getToken} from 'next-auth/jwt'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    console.log("middleware called")

    const path = request.nextUrl.pathname

    const isPublicPath = ['/account/login','/account/register','/courses', '/landingpage','/'].includes(path)

    const token = await getToken({req:request, secret:process.env.SECRET_KEY})

    if(token && isPublicPath){
        return NextResponse.redirect(new URL('/', request.url))
    }
    if(!token && !isPublicPath){
        return NextResponse.redirect(new URL('/account/login', request.url))
    }

    return NextResponse.next()
    
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:['/','/account/login', '/account/register','/courses/:learn*','/products/:path*'],
}
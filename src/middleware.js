// middleware.js

import { NextResponse } from 'next/server';
import { parse } from 'cookie';

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  const protectedPaths = ['/admin', '/profile', '/riwayat-daftar', '/jadwal-kelas'];
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
  if (isProtectedPath) {
    const cookies = parse(req.headers.get('cookie') || '');
    const isLogin = cookies.isLogin === 'true';
    const loggedInAccount = cookies.loggedInAccount ? JSON.parse(cookies.loggedInAccount) : null;

    if (!isLogin || !loggedInAccount) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }

    if (pathname.startsWith('/admin') && (loggedInAccount.role !== 'admin' && loggedInAccount.role !== 'pemilik')) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/profile', '/riwayat-daftar', '/jadwal-kelas'],
};

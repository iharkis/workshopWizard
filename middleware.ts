import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get('auth')?.value === 'true'
  const pathname = req.nextUrl.pathname

  const isLoginPage = pathname === '/login'
  const isApiRoute = pathname.startsWith('/api/')

  // Always allow API routes and the login page through
  // Sensitive API routes perform their own auth checks
  if (isApiRoute || isLoginPage) {
    return NextResponse.next()
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

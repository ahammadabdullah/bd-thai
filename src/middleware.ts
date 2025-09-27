import NextAuth, { NextAuthConfig } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "./auth/auth.config";

const { auth } = NextAuth(authConfig as NextAuthConfig);

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const privateRoutes = [
    "/dashboard",
    "/dashboard/blogs",
    "/dashboard/users",
    "/dashboard/quotations",
  ];
  // console.log(session?.user);
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isLoggedIn && privateRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|api/auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

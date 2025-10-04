import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  console.log("token---", token, "token---");
  console.log("auth secret", process.env.AUTH_SECRET);
  const isLoggedIn = !!token;

  const privateRoutes = [
    "/dashboard",
    "/dashboard/blogs",
    "/dashboard/users",
    "/dashboard/quotations",
  ];

  const { pathname } = request.nextUrl;

  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    !isLoggedIn &&
    privateRoutes.some((route) => pathname.startsWith(route))
  ) {
    console.log("user not logged in. redirecting to login page");
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|api/auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

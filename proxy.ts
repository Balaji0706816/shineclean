import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const isAdminPage = req.nextUrl.pathname === "/admin";
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  const isLoggedIn = req.cookies.get("admin_auth")?.value === "true";

  if (isAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/login"],
};
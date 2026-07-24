import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect www → apex once www DNS is configured in your registrar/Vercel.
 * Required DNS (outside this repo):
 * 1. Add www CNAME (or A/AAAA) pointing at the same Vercel deployment as conopstech.com
 * 2. Ensure both domains are added in the Vercel project Domain settings
 * This middleware then 308-redirects https://www.conopstech.com/* → https://conopstech.com/*
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.replace(/^www\./, "");
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|opengraph-image).*)"],
};

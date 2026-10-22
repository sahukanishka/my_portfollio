import { NextResponse, type NextRequest } from "next/server";
import { COMING_SOON } from "@/lib/site-config";

const PLACEHOLDER_PATH = "/coming-soon";

export function middleware(request: NextRequest) {
  if (!COMING_SOON) return NextResponse.next();

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      { error: "Site is under maintenance" },
      { status: 503, headers: { "Retry-After": "86400" } }
    );
  }

  if (pathname === PLACEHOLDER_PATH) return NextResponse.next();

  return NextResponse.rewrite(new URL(PLACEHOLDER_PATH, request.url), {
    headers: { "X-Robots-Tag": "noindex, nofollow" },
  });
}

export const config = {
  // Build assets (JS/CSS/fonts) must stay reachable for the placeholder to render.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

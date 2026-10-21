import { NextResponse } from "next/server";

const offlinePage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title></title>
<style>html,body{margin:0;height:100%;background:#fff}</style>
</head>
<body></body>
</html>`;

export function middleware() {
  return new NextResponse(offlinePage, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, max-age=0",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

export const config = {
  matcher: ["/:path*"],
};

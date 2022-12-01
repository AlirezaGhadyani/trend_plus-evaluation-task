import { NextResponse } from "next/server";

export default function middleware(request) {
  const { url, cookies } = request;

  const accessToken = cookies.get("access");

  if (url === `${new URL("/", url)}` || url === `${new URL("/add-hub", url)}`) {
    if (!accessToken) return NextResponse.redirect(new URL("/login", url));

    return NextResponse.next();
  }

  if (url === `${new URL("/login", url)}`) {
    if (!accessToken) return NextResponse.next();

    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

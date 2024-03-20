import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.set("status", "Success!!!", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  // return redirect("/");
  return new Response("Success!!!", { status: 200 });
};
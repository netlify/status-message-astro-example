import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const message = formData.get("message");

  cookies.set("status", message || "(message not set)", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  return redirect("/");
};

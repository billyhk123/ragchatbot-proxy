export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Redirect / -> /chat-ui (optional but handy)
    if (url.pathname === "/") {
      url.pathname = "/chat-ui";
      return Response.redirect(url.toString(), 302);
    }

    const origin = "https://ragchatbot-328132208.asia-east2.run.app";
    const upstream = new URL(origin);

    upstream.pathname = url.pathname;
    upstream.search = url.search;

    return fetch(new Request(upstream.toString(), request));
  },
};
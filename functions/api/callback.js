export async function onRequestGet(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Missing code", { status: 400 });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error) {
    return new Response(`OAuth error: ${tokenData.error_description || tokenData.error}`, { status: 401 });
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" });

  const html = `<!doctype html>
<html><body>
<script>
  (function() {
    function receiveMessage(message) {
      window.opener.postMessage(
        'authorization:github:success:${payload.replace(/'/g, "\\'")}',
        message.origin
      );
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body></html>`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}

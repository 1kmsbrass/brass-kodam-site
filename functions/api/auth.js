export async function onRequestGet(context) {
  const { env, request } = context;
  const url = new URL(request.url);

  const clientId = env.GITHUB_CLIENT_ID;
  const redirectUri = `${url.origin}/api/callback`;
  const state = crypto.randomUUID();

  const authorizeUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo,user` +
    `&state=${state}`;

  return Response.redirect(authorizeUrl, 302);
}

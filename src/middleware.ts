import { auth } from '@/auth';

const protectedUrls = ['/wish-list', '/profile'];

export default auth(req => {
  if (!req.auth && protectedUrls.includes(req.nextUrl.pathname)) {
    const newUrl = new URL('/auth/login', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

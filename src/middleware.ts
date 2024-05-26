import { auth } from '@/auth';

export default auth(req => {
  if (!req.auth && ['/profile'].includes(req.nextUrl.pathname)) {
    const url = req.url.replace(req.nextUrl.pathname, '/auth/login');
    return Response.redirect(url);
  }
});

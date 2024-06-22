import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
])

export default clerkMiddleware((auth,req)=>{
    if(protectedRoute(req)) auth().protect();  // Creating the private routes so that unsigned user cant view these routes
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
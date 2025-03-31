// import { lazy } from "react";

export interface ProtectedRouteInterface {
  path: string;
  name: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export const protectedRoutes: ProtectedRouteInterface[] = [
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   component: lazy(() => import("@/pages/user/Cart")),
  // },
  // {
  //   path: '/chat/:twinName',
  //   name: 'Twin Chat',
  //   component: lazy(() => import('@/pages/user/chat/Chat')),
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: lazy(() => import('@/pages/user/profile/Profile')),
  // },
  // {
  //   path: '/my-twin',
  //   name: 'My Twin',
  //   component: lazy(() => import('@/pages/user/my-twin/MyTwin')),
  // },
  // {
  //   path: '/twins',
  //   name: 'Twins',
  //   component: lazy(() => import('@/pages/user/explore-twins/twins/Twins')),
  // },
  // {
  //   path: '/feedback',
  //   name: 'Feedback',
  //   component: lazy(() => import('@/pages/user/feedback/Feedback')),
  // },
  // {
  //   path: '/subscribed-twins',
  //   name: 'Subscribed Twins',
  //   component: lazy(
  //     () => import('@/pages/user/explore-twins/subscribedTwins/SubscribedTwins')
  //   ),
  // },
  // {
  //   path: '/buy-points',
  //   name: 'Buy Points',
  //   component: lazy(() => import('@/pages/user/profile/BuyPoints')),
  // },
  // {
  //   path: '/explore-twins',
  //   name: 'Explore-Twins',
  //   component: lazy(() => import('@/pages/user/explore-twins/ExploreTwins')),
  // },
];

export const protectedRouteNames = protectedRoutes.map((route) => route.name);

export const protectedRoutePaths = protectedRoutes.map((route) => route.path);

export default protectedRoutes;

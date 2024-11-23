import { lazy } from 'react';

export interface OtherRoutes {
  path: string;
  name: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export const otherRoutes: OtherRoutes[] = [
  {
    path: '/payment',
    name: 'Payment',
    component: lazy(() => import('@/pages/others/Payment')),
  },
  // {
  //   path: '/verify',
  //   name: 'Verify',
  //   component: lazy(() => import('@/pages/others/Verify')),
  // },
  // {
  //   path: '/t/:twinName',
  //   name: 'Twin Redirect',
  //   component: lazy(() => import('@/pages/others/TwinRedirect')),
  // },
];

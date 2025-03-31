import { lazy } from "react";

import { PATHS } from "@/constants/page-paths";

export const publicRoutes = [
  {
    path: PATHS.SIGN_IN,
    name: "Sign In",
    component: lazy(() => import("@/pages/auth/SignIn")),
  },
  // {
  //   path: PATHS.LANDING,
  //   name: "COLLAB CODE IMPROVE",
  //   component: lazy(() => import("@/pages/landingPage/LandingPage")),
  // },
  // {
  //   path: PATHS.REGISTER,
  //   name: 'Register',
  //   component: lazy(() => import('@/pages/auth/register/Register')),
  // },
  // {
  //   path: PATHS.REGISTER,
  //   name: 'Complete Register',
  //   component: lazy(() => import('@/pages/auth/register/CompleteRegister')),
  // },
  // {
  //   path: PATHS.FORGOT_PASSWORD,
  //   name: 'Forgot Password',
  //   component: lazy(() => import('@/pages/auth/ForgotPassword')),
  // },
  // {
  //   path: PATHS.RESET_PASSWORD,
  //   name: 'Forgot Password',
  //   component: lazy(() => import('@/pages/auth/ResetPassword')),
  // },
  // {
  //   path: PATHS.VERIFY_OTP,
  //   name: 'Verify OTP',
  //   component: lazy(() => import('@/pages/auth/VerifyOtp')),
  // },
  // {
  //   path: PATHS.GOOGLE,
  //   name: 'Google Login',
  //   component: lazy(() => import('@/pages/auth/SignIn')),
  // },
];

export const publicRouteNames = publicRoutes.map((route) => route.name);

export const publicRoutePaths = publicRoutes.map((route) => route.path);

export default publicRoutes;

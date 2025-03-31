// import { Suspense } from 'react';

// import { Navigate, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'sonner';

// import AppRoute from '@/components/layouts/AppRoute';
// // import OtherRoutesLayout from '@/components/layouts/OtherRoutesLayout';
// import { ProtectedRoute } from '@/components/layouts/ProtectedRoute';
// import { PublicRoute } from '@/components/layouts/PublicRoute';
// import PageLoader from '@/components/template/PageLoader';
// // import { otherRoutes } from '@/configs/routes/other-routes';
// import protectedRoutes from '@/configs/routes/protected-routes';
// import publicRoutes from '@/configs/routes/public-routes';
// import { useSettingsStore } from '@/store'

// const AllRoutes = () => {

//   return (
//     <Routes>
//       <Route path="/cart" element={<ProtectedRoute />}>
//         {protectedRoutes?.map((route) => (
//           <Route
//             key={route.name}
//             path={route.path}
//             Component={() => <AppRoute {...route} />}
//           />
//         ))}
//       </Route>
//       <Route path="/" element={<PublicRoute />}>
//         {publicRoutes?.map((route) => (
//           <Route
//             key={route.name}
//             path={route.path}
//             Component={() => <AppRoute {...route} />}
//           />
//         ))}
//       </Route>
//       {/* <Route path="/" element={<OtherRoutesLayout />}>
//         {otherRoutes?.map((route) => (
//           <Route
//             key={route.name}
//             path={route.path}
//             Component={() => <AppRoute {...route} />}
//           />
//         ))}
//       </Route> */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// const Pages = () => {
//   const { themeMode } = useSettingsStore();

//   return (
//     <>
//       <Toaster
//         theme={themeMode === 'light' ? 'light' : 'dark'}
//         position="bottom-center"
//       />
//       <Suspense fallback={<PageLoader />}>
//           <AllRoutes />
//       </Suspense>
//     </>
//   );
// };

// export default Pages;

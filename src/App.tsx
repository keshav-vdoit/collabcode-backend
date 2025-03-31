import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { lazy } from "react";
import Layout from "./components/layouts/Layout";

const routes = [
  {
    path: "/realtime/:id",
    name: "Realtime",
    component: lazy(() => import("@/pages/realtime/RealTime")),
  },
  {
    path: "/saveandshare/:id",
    name: "Save and Share",
    component: lazy(() => import("@/pages/saveandshare/SaveAndShare")),
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          {routes?.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              Component={route.component}
            />
          ))}
        </Route>

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

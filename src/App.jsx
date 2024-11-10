import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BreadNav from "./components/common/BreadNav";
import RealTime from "./pages/realtime/RealTime";
import SaveAndShare from "./pages/saveandshare/SaveAndShare";

const App = () => {
  return (
    <BrowserRouter>
      <BreadNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realtime/:id" element={<RealTime />} />
        <Route path="/saveandshare/:id" element={<SaveAndShare />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// You can work here or download the template
// Your components go here

import Home from "./Pages/Home";
import Services from "./Components/Services";
import RenderingLists from "./Pages/RenderingLists";
import "./index.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Pages/renderinglists" element={<RenderingLists />} />
      </Routes>
    </div>
  );
};

export default App;

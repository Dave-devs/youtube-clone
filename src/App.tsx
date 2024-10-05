import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import { useState } from "react";

function App() {
  const [sidebar, setSideBar] = useState<boolean>(true);
  return (
    <div>
      <NavBar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;

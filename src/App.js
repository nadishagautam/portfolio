import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreativeDirection from "./pages/creativeDirection";
import GraphicDesign from "./pages/graphicDesign";
import SoftwareDevelopment from "./pages/softwareDevelopment";
import AboutMe from "./pages/aboutMe";
import "./assets/fonts/fonts.css";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creativedirection" element={<CreativeDirection />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
        <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;

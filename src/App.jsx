import {  useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "aos/dist/aos.css";
import AOS from "aos";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectPage from "./pages/ProjectPage";

function App() {
 
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <div  className="w-screen h-screen overflow-x-hidden bg-primary-bg">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects/:name" element={<ProjectDetail />} />
          <Route exact path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Header from "@/shared/layout/Header";
import Sidebar from "@/shared/layout/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function Routers() {
  return (
    <Router>
      <Sidebar />
      <section className="w-full p-5 md:p-8  overflow-y-auto flex-grow-0 bg-primary-bg md:relative border border-[#383838] rounded-[20px] text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </section>
    </Router>
  );
}

export default Routers;

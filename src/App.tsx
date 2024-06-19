import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import Sidebar from "@/shared/layout/Sidebar";
import Header from "@/shared/layout/Header";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="flex justify-center">
    <div className="flex  flex-col lg:flex-row  gap-5 w-[90%] my-8 relative">
    <Router>
        <Sidebar />
        <section className="w-full p-5 md:p-8  overflow-y-auto flex-grow-0 bg-primary-bg relative border border-[#383838] rounded-[20px] text-white">
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
    </div>
    </div>
  );
}

export default App;

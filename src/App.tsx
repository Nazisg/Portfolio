import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import Sidebar from "@/shared/layout/Sidebar";
import Header from "@/shared/layout/Header";

function App() {
  return (
    <div className="flex justify-center">
    <div className="flex gap-3 w-[90%] my-6">
    <Router>
        <Sidebar />
        {/* <div className="w-full border border-black">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </div> */}
      </Router>
    </div>
    </div>
  );
}

export default App;

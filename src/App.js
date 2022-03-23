import Navbar from "./components/Navbar";
import FrontEnd from "./pages/FrontEnd";
import BackEnd from "./pages/BackEnd";
import FullStack from "./pages/FullStack";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/front" element={<FrontEnd />} />
          <Route path="/back" element={<BackEnd />} />
          <Route path="/full" element={<FullStack />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </main>
  );
}

export default App;

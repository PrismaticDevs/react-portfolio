import Navbar from "./components/Navbar";
import Apps from "./pages/Apps";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";
import { Route, Routes } from "react-router-dom";

// Returns Routes and App

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Apps />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </main>
  );
}

export default App;

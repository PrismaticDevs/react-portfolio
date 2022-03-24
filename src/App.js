import Navbar from "./components/Navbar";
import Apps from "./pages/Apps";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Apps />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </main>
  );
}

export default App;

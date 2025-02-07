import "./style.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Chat from "./Pages/Chat";
import Navigation from "./Components/Navigation";

function App() {
  const location = useLocation();

  return (
    <div className="portfolio">
      <Navigation />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;

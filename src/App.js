import "./App.css";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./Profile";
import { About } from "./About";
import { Message } from "./Message";
function App() {
  return (
    <div className="mainConatiner">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;

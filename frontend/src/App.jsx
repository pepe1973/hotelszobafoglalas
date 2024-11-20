import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/homescreen" element={<Homescreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

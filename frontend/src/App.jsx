import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen"
 
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homescreen />}></Route>
            <Route path="/book/:roomid" element={<Bookingscreen />}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

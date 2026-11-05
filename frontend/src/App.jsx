import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Assistant from "./Assistant";
import Home from "./Home";
import Events from "./Events";
import Login from "./Login";

export default function App() {
  return (
    <>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/login" element={<Login />} />
    </Routes>

    <Footer />
    <Assistant />
    </>
  );
}

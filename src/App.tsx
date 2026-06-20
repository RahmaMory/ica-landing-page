import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TrackDetails from "./pages/TrackDetails";

function App() {
  const location = useLocation();
  return (
    
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

    <AnimatePresence mode="wait">
  <Routes
    location={location}
    key={location.pathname}
  >
    <Route path="/" element={<Home />} />
    <Route
      path="/track/:slug"
      element={<TrackDetails />}
    />
  </Routes>
</AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
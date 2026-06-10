import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
function App() {
  return (
<div className="overflow-x-hidden">
  <Navbar />
  <Home />
  <Footer/>
</div>
  );
}

export default App;
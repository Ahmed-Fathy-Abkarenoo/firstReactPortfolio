import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

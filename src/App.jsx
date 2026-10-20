import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";


const App = () => {
  return (
    <div>
      <Footer />
      <Router>
        <Header />
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
              <Route path="/" element={<Home />} />
          </Routes>
      </Router>
      
    </div>
  )
}

export default App
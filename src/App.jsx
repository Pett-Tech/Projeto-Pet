import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";


const App = () => {
  return (
    <Router>
      <div className="bg-[#e4c69e] min-h-screen">
        <Header />
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos/>}></Route>
        </Routes>
        <Footer />
      </div>
      
    </Router>
  )
}

export default App

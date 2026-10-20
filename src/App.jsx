import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos/>}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App

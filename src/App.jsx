import { BrowserRouter as Router, Routes, Route } from "react-router";
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
            <Route path="/" element={<Sobre />} />
          </Routes>
      </Router>
      
    </div>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";


const App = () => {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
      </Router>
      
    </div>
  )
}

export default App
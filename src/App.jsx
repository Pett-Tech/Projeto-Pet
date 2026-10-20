import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
          <Route path="/" element={<Home />} />
      </div>
    </Router>
  )
}

export default App
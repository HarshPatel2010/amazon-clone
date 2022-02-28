import "./App.css";
import Header from "./COMPONENTS/Header";
import Home from "./COMPONENTS/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./COMPONENTS/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

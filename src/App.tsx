import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.scss";
import "./styles/common.scss";
import HomePage from "./pages/HomePage";
import AboutServices from "./pages/HscPolicy";
import OilAndGas from "./pages/OilAndGas";
import ContactUs from "./pages/ContactUs";
import arrowUp from './styles/images/arrow-up-solid.svg';

function App() {
  return (
    <div className="App">
      <div className="arrowMain">
        <a href="#page-3">
          <img src={arrowUp} alt="" className="arrowUp" /></a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutServices />} />
          <Route path="/services" element={<OilAndGas />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
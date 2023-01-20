import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Civil from "./pages/Civil";
import Electrical from "./pages/Electrical";
import HomePage from "./pages/HomePage";
import AboutServices from "./pages/HscPolicy";
import Marine from "./pages/Marine";
import MechanicalAndConstruction from "./pages/MechanicalAndConstruction";
import OilAndGas from "./pages/OilAndGas";
import Production from "./pages/Production";
import Hospitality from "./pages/Hospitality";
import InformationTechnology from "./pages/InformationTechnology";
import Banking from "./pages/Banking";
import Logistic from "./pages/Logistic";
import OfficeStaff from "./pages/OfficeStaff";
import ContactUs from "./pages/ContactUs";
import arrowUp from './styles/images/arrowUp.png';

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
          <Route path="/AboutServices" element={<AboutServices />} />
          <Route path="/OilAndGas" element={<OilAndGas />} />
          <Route path="/Civil" element={<Civil />} />
          <Route path="/Construction" element={<MechanicalAndConstruction />} />
          <Route path="/Electrical" element={<Electrical />} />
          <Route path="/Marine" element={<Marine />} />
          <Route path="/Manufacturing" element={<Production />} />
          <Route path="/Hospitality" element={<Hospitality />} />
          <Route path="/InformationTechnology" element={<InformationTechnology />} />
          <Route path="/Banking" element={<Banking />} />
          <Route path="/Logistics" element={<Logistic />} />
          <Route path="/OfficeStaff" element={<OfficeStaff />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./styles/common.scss";
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
          <Route path="/aboutservices" element={<AboutServices />} />
          <Route path="/oilandgas" element={<OilAndGas />} />
          <Route path="/civil" element={<Civil />} />
          <Route path="/construction" element={<MechanicalAndConstruction />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/marine" element={<Marine />} />
          <Route path="/manufacturing" element={<Production />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/informationTechnology" element={<InformationTechnology />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/logistics" element={<Logistic />} />
          <Route path="/officeStaff" element={<OfficeStaff />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
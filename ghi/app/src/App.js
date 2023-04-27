import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import ManuForm from './ManuForm';
import ModelForm from './ModelForm';
import CarForm from './CarForm';
import ManufacturersList from './ManufacturersList';
import AutomobileList from './AutomobileList';
import VehicleModelsList from './VehicleModels';
import TechnicianList from './TechnicianList';
import SalespersonList from './SalespersonList';
import SalespersonForm from './SalespersonForm';


import AppointmentList from './AppointmentList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="new">
            <Route path="manufacturer" element={<ManuForm />} />
            <Route path="model" element={<ModelForm />} />
            <Route path="auto" element={<CarForm />} />
            <Route path="salesperson" element={<SalespersonForm />} />
          </Route>
          <Route path="list">
            <Route path="manufacturers" element={<ManufacturersList />} />
            <Route path = "automobiles" element={<AutomobileList />} />
            <Route path = "models" element={<VehicleModelsList />} />
            <Route path = "technicians" element={<TechnicianList />} />
            <Route path = "salespeople" element={<SalespersonList />} />
          </Route>
            <Route path="list">
            <Route path = "Manufacturers" element={<ManufacturersList />} />
              </Route>
            <Route path = "list">
              <Route path = "Automobiles" element={<AutomobileList />} />
            </Route>
            <Route path = "list">
              <Route path = "Vehicles" element={<VehicleModelsList />} />
            </Route>
            <Route path = "list">
              <Route path = "Technicians" element={<TechnicianList />} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

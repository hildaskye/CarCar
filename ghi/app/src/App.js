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
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SaleForm from './SaleForm';
import SaleList from './SaleList';
import SalespersonHistory from './SalespersonHistory';


import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import ServiceHistoryList from './ServiceHistoryList';



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
            <Route path="technician" element={<TechnicianForm />} />
            <Route path="customer" element={<CustomerForm />}/>
            <Route path="sale" element={<SaleForm />}/>
            <Route path="appointment" element={<AppointmentForm />}/>
          </Route>
          <Route path="list">
            <Route path="manufacturers" element={<ManufacturersList />} />
            <Route path = "automobiles" element={<AutomobileList />} />
            <Route path = "models" element={<VehicleModelsList />} />
            <Route path = "technicians" element={<TechnicianList />} />
            <Route path = "salespeople" element={<SalespersonList />} />
            <Route path = "customers" element={<CustomerList />} />
            <Route path = "sales" element={<SaleList />} />
            <Route path = "sales" element={<CustomerList />} />
            <Route path = "appointments" element={<AppointmentList />} />
            <Route path = "services" element={<ServiceHistoryList />} />
            <Route path = "salesbysalesperson" element={<SalespersonHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

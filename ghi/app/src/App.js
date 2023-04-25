import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacturersList';
import AutomobileList from './AutomobileList';
import Nav from './Nav';
import ManuForm from './ManuForm';
import ModelForm from './ModelForm';
import CarForm from './CarForm';

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
          </Route>
          <Route path="list">
            <Route path="manufacturers" element={<ManufacturersList />} />
          </Route>
            <Route path="list">
            <Route path = "Manufacturers" element={<ManufacturersList />} />
              </Route>
            <Route path = "list">
              <Route path = "Automobiles" element={<AutomobileList />} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

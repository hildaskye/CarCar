import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacturersList';
import Nav from './Nav';
import ManuForm from './ManuForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path = "new">
            <Route path="Manufacturer" element={<ManuForm />} />
          </Route>
          <Route path="list">
            <Route path = "Manufacturers" element={<ManufacturersList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

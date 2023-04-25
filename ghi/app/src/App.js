import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacterersList';
import Nav from './Nav';
import ManuForm from './ManuForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="Manufacturers" element={<Manufacturers />} /> */}
          <Route path = "manuform">
            <Route path="new" element={<ManuForm />} />
          </Route>
          <Route path="list" element={<ManufacturersList />} />
          {/* <Route path="createModel" element={<createModel />} /> */}
          {/* <Route path="showInventory" element={<showInventory />} /> */}
          {/* <Route path="createCar" element={<createCar />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

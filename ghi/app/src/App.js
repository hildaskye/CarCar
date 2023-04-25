import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacturersList';
import AutomobileList from './AutomobileList';
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

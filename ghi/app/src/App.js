import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacterersList';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="list" element={<ManufacturersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

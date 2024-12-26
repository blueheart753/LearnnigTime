import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;

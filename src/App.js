import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import AddVendor from './components/addVendor';
import EditVendor from './components/editVendor'

export const config = {
  endpoint: `https://vendorvista.onrender.com/v1`,
};

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/addvendor" element={<AddVendor />} />
        <Route path="/editvendor" element={<EditVendor />} />
      </Routes>
    </div>
  );
}

export default App;
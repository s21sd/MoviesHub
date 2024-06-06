import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Components/pages/About';
import Contactus from './Components/pages/Contactus';
import Profile from './Components/pages/Profile';

function App() {
  return (
    // Defining my routes
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
        <Route path='/profile' element={<Profile />}></Route>

      </Routes>
    </div>
  );
}

export default App;

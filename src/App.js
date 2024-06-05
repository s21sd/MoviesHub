import './App.css';
import Navbar from './Components/Navbar';
import Cardcomponent from './Cards/Card';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 130,

      }}>
        <Dashboard />
      </div>
      {/* <Cardcomponent /> */}
    </div>
  );
}

export default App;

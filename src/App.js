import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Particlebackground from './Components/Home/particlebackground';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true); // Initially set to true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className='flex items-center justify-center h-screen w-screen'>
          <ClimbingBoxLoader size='30' color='#36d6d2' loading={loading} />
          <Particlebackground id='tsparticles' />
        </div>
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Particlebackground id='tsparticles' />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

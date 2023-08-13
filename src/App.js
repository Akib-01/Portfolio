import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Particlebackground from './Components/Home/particlebackground';
import './index.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
            </Route>
      </Routes>
      <Particlebackground id="tsparticles"/>
    </BrowserRouter>
    </>
  );
}

export default App;

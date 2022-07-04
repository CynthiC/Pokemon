import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './routes/Main'
import Perfil from './routes/Perfil'
import Pokemon from './routes/Pokemon';
import { Navbar } from './components/navbar';

function App() {

  return (
    <div>
    <BrowserRouter>
      <div className='w-36'>
       <Navbar/> 
      </div>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

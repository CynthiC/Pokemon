import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './routes/Main'
import Perfil from './routes/Perfil'
import Pokemon from './routes/Pokemon';

function App() {

  return (
    <div>
    <BrowserRouter>
      <div className='w-36'>
      {/* <Navbar/> */}
      </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/190547" element={<Perfil/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

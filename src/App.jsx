import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sass/common.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './Pages/Contact/Contact';
import Search from './Pages/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <div className='main-wrapper'>
          <Routes>
            <Route path='/contacts' element={<Contact></Contact>}></Route>
            <Route path='/search' element={<Search></Search>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

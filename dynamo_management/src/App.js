import logo from './logo.svg';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav.js';
import Create from './Components/Create/Create';
import Delete from './Components/Delete/Delete';
import Get from './Components/Fetch/Get';
import Updatef from './Components/Update/Updatef';
import Updatel from './Components/Update/Updatel';
import Deleter from './Components/Delete/Deleter';
import Insert from './Components/Insert/Insert';


function App() {
  return (
<BrowserRouter>
<Nav />

 <Routes>
        
        <Route path="/insert" element={<Insert />} />
        <Route path="/create" element={<Create />} />
        <Route path="/fetch" element={<Get />} />
        <Route path="/update_f" element={<Updatef />} />
        <Route path="/update_l" element={<Updatel />} />
        <Route path="/delete_record" element={<Deleter />} />
        <Route path="/delete_table" element={<Delete />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;

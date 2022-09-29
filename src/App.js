import './App.css';
import Nav from './component/Navbar/Nav';
import Programmer from './component/programmer/Programmer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Programmer></Programmer>
    </div>
  );
}

export default App;

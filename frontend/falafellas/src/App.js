import './App.css';
import Contact from "./Components/Contact/Contact";
import {Routes, Route} from "react-router-dom";
import NavbarComp from './Components/CommonComponents/Navbar/NavbarComp';

function App() {
  return (
    <>
        <NavbarComp/>
      <div className="App">
          <Routes>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </div>

    </>
    
  );
}

export default App;

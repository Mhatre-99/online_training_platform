import "./App.css";
import Contact from "./Components/Contact/Contact";
import {Routes, Route} from "react-router-dom";
import NavbarComp from './Components/CommonComponents/Navbar/NavbarComp';
import FAQPage from './Components/FAQ/FAQPage';
import Footer from "./Components/CommonComponents/Footer/Footer";


function App() {
  return (
    <>
      <NavbarComp/>
      <div className="App">
          <Routes>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/faq" element={<FAQPage />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Contact from "./Components/Contact/Contact";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;

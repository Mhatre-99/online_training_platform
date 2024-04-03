import "./App.css";
import Contact from "./Components/Contact/Contact";
import {Routes, Route} from "react-router-dom";
import NavbarComp from './Components/CommonComponents/Navbar/NavbarComp';
import FAQPage from './Components/FAQ/FAQPage';
import Footer from "./Components/CommonComponents/Footer/Footer";
import LandingPage from "./Components/Landing/LandingPage";
import ModuleTitle from "./Components/Module/ModuleTitle";
// import VideoPlayer from "./Components/Module/VideoPlayer/VideoPlayer"; 
import UserProfile from "./Components/Profile/UserProfile";
import Certificates from "./Components/Profile/Certificates";
import LoginForm from "./Components/Authentication/LoginForm";
import SignUpForm from "./Components/Authentication/SignUpForm";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseService";

function App() {
  const [userState, setUserState] = useState(null);
  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       setUserState(user);
      } else {
        setUserState(null);
      }
    });
    // Clean up subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <>
      <NavbarComp/>
      <div className="App">
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/login" element={<LoginForm/>} />
              <Route path="/signup" element={<SignUpForm/>} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/course"/>
              <Route path="/module/:id/*" element={<ModuleTitle/>}/>
              {/* <Route path="/profile" element={<TopProfile/>}/> */}
              <Route path="/profile/:userId" element={
                <>
                  <UserProfile/>
                  <Certificates/>
                </>
              }/>

          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
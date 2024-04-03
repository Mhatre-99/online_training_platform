import "./App.css";
import Contact from "./Components/Contact/Contact";
import {Routes, Route} from "react-router-dom";
import NavbarComp from './Components/CommonComponents/Navbar/NavbarComp';
import FAQPage from './Components/FAQ/FAQPage';
import Footer from "./Components/CommonComponents/Footer/Footer";
import LandingPage from "./Components/Landing/LandingPage";
import ModuleTitle from "./Components/Module/ModuleTitle";
import ModuleAddition from "./Components/LectureAddition/ModuleAddition";
import VideoPlayer from "./Components/Module/VideoPlayer/VideoPlayer";
import UserProfile from "./Components/Profile/UserProfile"
import Certificates from "./Components/Profile/Certificates"
import CoursesPage from "./Components/Courses/CoursesPage";
import ModulesPage from "./Components/Courses/ModulesPage";
// import VideoPlayer from "./Components/Module/VideoPlayer/VideoPlayer"; 

function App() {
  return (
    <>
      <NavbarComp/>
      <div className="App">
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/course" element={<CoursesPage />}/>
              <Route path="/courses/:courseId/modules" element={<ModulesPage />} />
              <Route path="/module/:id/*" element={<ModuleTitle/>}/>
              <Route path="/module/create/" element={<ModuleAddition/>} />
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
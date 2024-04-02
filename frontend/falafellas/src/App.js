import "./App.css";
import Contact from "./Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./Components/CommonComponents/Navbar/NavbarComp";
import FAQPage from "./Components/FAQ/FAQPage";
import Footer from "./Components/CommonComponents/Footer/Footer";
import LandingPage from "./Components/Landing/LandingPage";
import ModuleTitle from "./Components/Module/ModuleTitle";
import VideoPlayer from "./Components/Module/VideoPlayer/VideoPlayer";
import QuizAddition from "./Components/QuizAddition/QuizAddition";
import QuestionAddition from "./Components/QuestionAddition/QuestionAddition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import VideoPlayer from "./Components/Module/VideoPlayer/VideoPlayer";
import UserProfile from "./Components/Profile/UserProfile";
import Certificates from "./Components/Profile/Certificates";

function App() {
  return (
    <>
      <NavbarComp />
      <ToastContainer />

      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/course" />
          <Route path="/add-quiz" element={<QuizAddition />} />
          <Route path="/create-new-question" element={<QuestionAddition />} />
          <Route path="/module/:id/*" element={<ModuleTitle />} />
          {/* <Route path="/profile" element={<TopProfile/>}/> */}
          <Route
            path="/profile/:userId"
            element={
              <>
                <UserProfile />
                <Certificates />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

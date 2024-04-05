import "./App.css";
import Contact from "./Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./Components/CommonComponents/Navbar/NavbarComp";
import FAQPage from "./Components/FAQ/FAQPage";
import Footer from "./Components/CommonComponents/Footer/Footer";
import LandingPage from "./Components/Landing/LandingPage";
import LoginForm from "./Components/Authentication/LoginForm";
import SignUpForm from "./Components/Authentication/SignUpForm";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import ModuleTitle from "./Components/Module/js/ModuleTitle";
import ModuleAddition from "./Components/LectureAddition/ModuleAddition";
import UserProfile from "./Components/Profile/UserProfile";
import Certificates from "./Components/Profile/Certificates";
import NotFound from "./Components/CommonComponents/NotFound";
import QuizAddition from "./Components/QuizAddition/QuizAddition";
import QuestionAddition from "./Components/QuestionAddition/QuestionAddition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { auth } from "./FirebaseService";
import ProtectedRoute from "./ProtectedRoute";
import CoursesPage from "./Components/Courses/CoursesPage";
import ModulesPage from "./Components/Courses/ModulesPage";
import AdminCoursesPage from "./Components/Courses/AdminCoursesPage";

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
      <ToastContainer />

      <NavbarComp user={userState} />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/course" element={<CoursesPage user={userState}/>} />
            <Route path="/admin-course" element={<AdminCoursesPage/>} />
            <Route
              path="/courses/:courseId/modules"
              element={<ModulesPage />}
            />

            <Route path="/module/:id/*" element={<ModuleTitle />} />
            <Route path="/add-quiz" element={<QuizAddition />} />
            <Route path="/create-new-question" element={<QuestionAddition />} />
            <Route path="/module/create/" element={<ModuleAddition />} />
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
          </Route>
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

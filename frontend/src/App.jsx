import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Courses from "./Courses/Courses";
import Home from "./Home/home";
import React from 'react';
import { Routes,Route, Navigate,  } from 'react-router-dom';
import{ Toaster} from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";
import About from "./Components/About";

function App() {
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser); 
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Course" element={ authUser ?<Courses/>: <Navigate to ="/Signup"/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  );
}

export default App;

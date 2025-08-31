import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "../Context/AuthProvider";
import Logout from "./Logout";
import About from "./About";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
      console.log(authUser); 
 

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">HOME</a>
      </li>
      <li>
        <a href="/course">COURSE</a>
      </li>
      <li>
        <a href="/Contact">CONTACT</a>
      </li>
      <li>
        <a href="/About">ABOUT</a>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        sticky ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-black cursor-pointer">BOOK STORE</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          <div className="navbar-end space-x-3">
            <div className="hidden md:block">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  className="grow outline-none"
                  required
                  placeholder="Search"
                />
              </label>
            </div>

            <label className="flex cursor-pointer gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                className="toggle"
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            { 
               authUser ? <Logout/> : 
            <div>
              <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-200 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}>
                Login
              </a>
              <Login/>
            </div>
        }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

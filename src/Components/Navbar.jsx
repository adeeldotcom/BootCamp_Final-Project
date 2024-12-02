import React, { useState } from 'react';
import Snap from "../assets/logo.svg";
import Up from '../assets/icon-arrow-up.svg';
import Down from '../assets/icon-arrow-down.svg';
import ToDo from '../assets/icon-todo.svg';
import Calendar from '../assets/icon-calendar.svg';
import Reminder from '../assets/icon-reminders.svg';
import Planning from '../assets/icon-planning.svg';
import '../index.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(""); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setDropdown(menu); 
  };

  const handleMouseLeave = () => {
    setDropdown(null); 
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="my-4 mx-4 md:my-7 md:mx-7">
      <div className="flex justify-between items-center">
      
        <div className="img">
          <img src={Snap} alt="logo" className="w-20 md:w-auto" />
        </div>

       
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

     
        <div className="hidden md:flex items-center justify-between flex-grow">
         
          <div className="navbar">
            <ul className="flex gap-8 ml-14 relative">
             
              <li
                className="cursor-pointer hover:font-semibold flex relative"
                onMouseEnter={() => handleMouseEnter("features")}
                onMouseLeave={handleMouseLeave}>
                <div className="flex items-center">
                  Features
                  <img
                    className="flex w-[12px] h-[8px] mt-[10px] ml-[4px]"
                    src={dropdown === "features" ? Up : Down}
                    alt=""
                  />
                </div>
                {dropdown === "features" && (
                  <div className="absolute bg-white shadow-lg p-4 mt-8 rounded-xl">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                        <img src={ToDo} alt="Todo Icon" className="w-4 h-4" />
                        Todo List
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                        <img src={Calendar} alt="Calendar Icon" className="w-4 h-4" />
                        Calendar
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                        <img src={Reminder} alt="Reminder Icon" className="w-4 h-4" />
                        Reminders
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                        <img src={Planning} alt="Planning Icon" className="w-4 h-4" />
                        Planning
                      </li>
                    </ul>
                  </div>
                )}
              </li>

             
              <li
                className="cursor-pointer hover:font-semibold flex relative"
                onMouseEnter={() => handleMouseEnter("company")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  Company
                  <img
                    className="flex w-[12px] h-[8px] mt-[10px] ml-[4px]"
                    src={dropdown === "company" ? Up : Down}
                    alt=""
                  />
                </div>
                {dropdown === "company" && (
                  <div className="absolute bg-white shadow-lg p-4 mt-8 rounded-xl">
                    <ul className="space-y-2">
                      <li className="cursor-pointer hover:font-bold">History</li>
                      <li className="cursor-pointer hover:font-bold">Our Team</li>
                      <li className="cursor-pointer hover:font-bold">Blog</li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="cursor-pointer hover:font-semibold">Careers</li>
              <li className="cursor-pointer hover:font-semibold">About</li>
            </ul>
          </div>

          <div className="btn flex gap-4">
            <button className="cursor-pointer hover:font-semibold">Login</button>
            <button className="bg-white border-2 border-black rounded-xl px-5 py-1 cursor-pointer hover:font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>

   
      {mobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
           
            <li className="cursor-pointer hover:font-semibold">
              <div className="flex items-center justify-between" onClick={() => setDropdown(dropdown === "features" ? "" : "features")}>
                Features
                <img
                  className="w-[12px] h-[8px]"
                  src={dropdown === "features" ? Up : Down}
                  alt=""
                />
              </div>
              {dropdown === "features" && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={ToDo} alt="Todo Icon" className="w-4 h-4" />
                    Todo List
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={Calendar} alt="Calendar Icon" className="w-4 h-4" />
                    Calendar
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={Reminder} alt="Reminder Icon" className="w-4 h-4" />
                    Reminders
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={Planning} alt="Planning Icon" className="w-4 h-4" />
                    Planning
                  </li>
                </ul>
              )}
            </li>

           
            <li className="cursor-pointer hover:font-semibold">
              <div className="flex items-center justify-between" onClick={() => setDropdown(dropdown === "company" ? "" : "company")}>
                Company
                <img
                  className="w-[12px] h-[8px]"
                  src={dropdown === "company" ? Up : Down}
                  alt=""
                />
              </div>
              {dropdown === "company" && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li className="cursor-pointer hover:font-bold">History</li>
                  <li className="cursor-pointer hover:font-bold">Our Team</li>
                  <li className="cursor-pointer hover:font-bold">Blog</li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:font-semibold">Careers</li>
            <li className="cursor-pointer hover:font-semibold">About</li>
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <button className="cursor-pointer hover:font-semibold w-full text-center py-2">Login</button>
            <button className="bg-white border-2 border-black rounded-xl px-5 py-2 cursor-pointer hover:font-semibold w-full">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


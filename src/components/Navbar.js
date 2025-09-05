import React, { useState } from "react";
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  return (
    <>
      <nav
      style={{
        color:props.mode==="dark"? "white":"black",
        backgroundColor:props.mode==="dark"? "#5a5a5a":"#d4eafa",
        
      }}

        className="flex items-center justify-between  w-full px-6 py-3  md:border-b-[1px] md:border-gray-300 shadow-xl  transition-colors duration-500 ease-in-out"
         
      >
        <div className="flex  items-center gap-1">
          <img
            src="logo99.png"
            alt=""
            style={{ height: "35px", width: "35px" }}
          />
          <h1 className="  text-2xl font-mono  ">TextUtils</h1>
        </div>

        <ul className="hidden md:flex gap-4">
          <li className="  ">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>

          {/*----------------------------------------------------- light to dark button ----------------------------------------------*/}
          
          <button
            onClick={props.handleToggle}
            className={`relative w-20 h-7 rounded-full transition-colors duration-300 flex items-center `}
            style={{
              backgroundColor: props.mode==="dark" ? "#374151" : "#ffffff", 
              boxShadow:
                "inset 2px 2px 2px #babecc, inset -2px -2px 2px #ffffff",
            }}
          >
            {/* Knob */}
            <div
              className={`absolute top-1 w-6 h-5 rounded-full shadow-md transform transition-transform duration-300`}
              style={{
                backgroundColor: props.mode==="dark" ? "#facc15" : "#d4eafa", 
                transform: props.mode==="dark" ? "translateX(48px)" : "translateX(4px)", 
              }}
            ></div>

            {/* Moon icon */}
            <span className="absolute left-2 top-0.5 text-[20px] text-gray-200">
              <ion-icon name="moon-outline"></ion-icon>
            </span>

            {/* Sun icon */}
            <span className="absolute right-2 top-0.5 text-[20px] text-yellow-400">
              <ion-icon name="sunny-outline"></ion-icon>
            </span>
          </button>
        </ul>

        {/*----------------------------------------------------- hamburger icon --------------------------------------------------*/}

        <div className="md:hidden flex items-center text-4xl cursor-pointer mt-2">
          <button>
            <ion-icon
              onClick={toggleMenu}
              name={isMenuOpen ? "close-outline" : "menu-outline"}
            ></ion-icon>
          </button>
        </div>
      </nav>

      {/*------------------------------------------------------------------ animated mobile menu --------------------------------------------------*/}

      <div
        style={{
        color:props.mode==="dark"? "white":"black",
        backgroundColor:props.mode==="dark"? "#5a5a5a":"#d4eafa"
      }}
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden  border-b-[1px] border-gray-300 shadow-md bg-[#5a5a5a]  ${
          isMenuOpen ? "max-h-40" : "max-h-0"
        } `}
      >
        <div className="  px-4 py-2  pb-6  ">
          <ul >
            <li className=" mx-2 my-1 ">
              <Link to="/">Home</Link>
            </li>
            <li className=" mx-2 my-1">
              <Link to="/about">About</Link>
            </li>

            {/*----------------------------------------------------- light to dark button ----------------------------------------------*/}

            <button
              onClick={props.handleToggle}
              className={`relative w-20 h-7 rounded-full transition-colors duration-300 flex items-center mt-4`}
              style={{
                backgroundColor: props.mode==="dark" ? "#374151" : "#ffffff", 
                boxShadow:
                  "inset 2px 2px 2px #babecc, inset -2px -2px 2px #ffffff",
              }}
            >
              {/* Knob */}
              <div
                className={`absolute top-1 w-6 h-5 rounded-full shadow-md transform transition-transform duration-300`}
                style={{
                  backgroundColor: props.mode==="dark" ? "#facc15" : "#d4eafa", 
                  transform: props.mode==="dark" ? "translateX(48px)" : "translateX(4px)", 
                }}
              ></div>

              {/* Moon icon */}
              <span className="absolute left-2 top-0.5 text-[20px] text-gray-200">
                <ion-icon name="moon-outline"></ion-icon>
              </span>

              {/* Sun icon */}
              <span className="absolute right-2 top-0.5 text-[20px] text-yellow-400">
                <ion-icon name="sunny-outline"></ion-icon>
              </span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

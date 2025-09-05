import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick, mode }) => {
  return (

    <div 
     className="  border-[1px] border-gray-200  ">
      {/* Header */}
      <button
        style={{ color: mode === "dark" ? "white" : "black" ,
            
        }}
        onClick={onClick}
        className={` w-full flex justify-between items-center py-4 px-6 text-left text-lg font-mono text-gray-800 ${mode === "dark" ? "hover:bg-amber-400" : "hover:bg-[#d4eafa]"} transition`}
      >
     
        <span>{title}</span>
           <div className=""></div>
        <span className="text-xl ">{isOpen ? "−" : "+"}</span>
        
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-50" : "max-h-0"
        }`}
      >
        <p 
        style={{ color: mode === "dark" ? "white" : "black" }}
        className=" text-sm px-6 py-6 font-mono border-t-[1px]  border-gray-200">{content}</p>
      </div>
    </div>
  );
};

export default function About(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // close if clicked again
  };

  return (
<>
<div style={{
        color:props.mode==="dark"? "white":"black",
       
        
      }} className="text-2xl  md:max-w-4xl max-w-xs sm:max-w-xs  mx-auto md:mx-auto font-mono mt-6">
    <h1 >About US</h1>


    <div 
    style={{
        color:props.mode==="dark"? "white":"black",
       
        
      }} className="  mt-6 border-[1px] border-gray-300 rounded-md shadow-md">
      <AccordionItem
        title="Behind The Code"
        content={  <span>
      Just some folks making text editing fast and stress-free. 
      Check out our{" "}
      <a 
        href="https://github.com/AdiSharma-007" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline"
      >
        GitHub
      </a>{" "}
      for more.
    </span>}
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
        mode={props.mode}
      />
      <AccordionItem
        title="What It Does?"
        content="TextUtils is a web app that helps you work with text quickly and easily. You can change your text to uppercase or lowercase, remove extra spaces, copy it, or even listen to it. It also shows word count, character count, and reading time. With a clean design and light/dark mode, TextUtils makes editing and analyzing text simple and convenient for everyone."
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
        mode={props.mode}
      />
      <AccordionItem
        title="Why Choose TextUtils?"
        content="TextUtils makes working with text fast, easy, and reliable. From messy to perfect TextUtils has you covered. It works directly in your browser and respects your privacy. Whether you're editing content or just cleaning up text, it saves you time and effort, making it the perfect companion for anyone who works with text regularly."

                    
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
        mode={props.mode}
      />
      </div>
    </div>
    </>
  );
}
import React from "react";

const Header = () => {
  const links = ["o mnie", "oferta", "kontakt"];

  const navigateFunction = (value)=>{
    const section = document.getElementById(value);
    section.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div
      id="header-container"
      className="w-full h-20 bg-black flex text-right justify-between items-center p-10"
    >
      <div className="flex md:gap-15 items-center gap-5">
        {links.map((value, key) => {
          return (
            <span
              onClick={()=>navigateFunction(value)}
              className="capitalize cursor-pointer md:text-2xl  hover:drop-shadow-3xl transition delay-50 duration-200 ease-in-out" 
              key={key}
            >
              {value}
            </span>
          );
        })}
      </div>
      <div>
        <span className="hidden sm:block border-1 p-4 rounded-4xl border-green-500 cursor-pointer hover:bg-green-500 transition delay-50 duration-200 ease-out">
          <a href="mailto:bartoszmiecznikowski853@gmail.com">Napisz do mnie</a> 
        </span>
      </div>
    </div>
  );
};

export default Header;

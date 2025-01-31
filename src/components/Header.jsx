import React from "react";

const Header = ({ navigateFunction }) => {
  const links = ["O Mnie", "Oferta", "Kontakt"];
  return (
    <div
      id="header-container"
      className="w-full h-20 bg-black flex text-right justify-between items-center p-10"
    >
      <div className="flex md:gap-15 items-center gap-5">
        {links.map((value, key) => {
          return (
            <span
              onClick={()=>navigateFunction}
              className="cursor-pointer md:text-2xl text-[.8rem] hover:drop-shadow-3xl transition delay-50 duration-200 ease-in-out" 
              key={key}
            >
              {value}
            </span>
          );
        })}
      </div>
      <div>
        <span className="border-1 p-4 rounded-4xl border-green-500 cursor-pointer hover:bg-green-500 transition delay-50 duration-200 ease-out">
          <a href="mailto:bartoszmiecznikowski853@gmail.com">Napisz do mnie</a> 
        </span>
      </div>
    </div>
  );
};

export default Header;

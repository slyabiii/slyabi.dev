import React from "react";
import Logo from "../assets/images/fox-min.png";

const Navbar = () => {
  return (
    <div className="fixed h-full w-[80px] px-2 bg-[#FFE6C7] flex-col justify-between items-center text-[#454545]">
      <div>
        <img class="" src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;

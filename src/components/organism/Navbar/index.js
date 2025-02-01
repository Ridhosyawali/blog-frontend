import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="lg:px-10 py-2 top-0 z-50 sticky shadow-2xl flex flex-row justify-between items-center bg-white">
      <div>
        <Logo />
      </div>
      <div className="flex flex-row uppercase gap-5">
        <a href="#">NewsLatter</a>
        <a href="#">Tech</a>
        <a href="#">Reviews</a>
        <a href="#">Entertainment</a>
        <a href="#">AI</a>
        <a href="#">MORE +</a>
      </div>
      <div className="flex flex-row gap-5">
        <a href="">
          <IoSearchOutline className="text-xl" />
        </a>
        <Button
          type={"button"}
          onClick={() => {}}
          className={
            "border hover:border-black hover:font-semibold px-2 py1 text-md "
          }
        >
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

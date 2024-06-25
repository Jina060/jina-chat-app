import React from "react";
import Button from "./button";

const Navbar = () => {
    return (
      // <div className="mt-14 mx-36 w-full">
        <div className="px-28 py-10 w-full">
      {/*Navbar*/}
      <div className="flex gap-36">
        {/*shortly logo*/}
        <div className="flex pr-36">
          <div className="pr-14">
        <h1 className="text-black font-bold text-3xl">Shortly</h1>
        </div>

        <div className="flex gap-7 justify-center items-center">
           <Button text="Features"/>
           <Button text="Pricing"/>
           <Button text="Resources"/>
        </div>
        </div>

        <div className="flex gap-7 pl-32">
          <Button text="Login" secondary/>
          <Button text="Sign up" secondary_2={true}/> 
        </div>
        </div>


      </div>
    )
}
export default Navbar;
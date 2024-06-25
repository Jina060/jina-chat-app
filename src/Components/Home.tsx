import React from "react";
import HomeImg from "../assets/home-img.svg";
import Button from "./button";

const Home = () => {
  return (
    <div className="flex w-full">
      <div className="pl-28 pt-20 pr-20">
        <h1 className="text-7xl text-black font-bold leading-none pb-2">
          More than just shorter links
        </h1>
        <p className="text-xl text-myAsh font-medium leading-normal mb-10">
          Build your brand's recognition and get detailed
          <br />
          insights on how your links are performing.
        </p>
        <Button text="Get started" secondary_2 />
      </div>

      <div className="img h-300 w-200">
        <img src={HomeImg} alt="home" />
      </div>
    </div>
  );
};
export default Home;

"use client";
import React, { useState } from "react";
import Body from "./Body";

const Hero: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Drinks"); // Default selected buttonss

  const buttonClasses = (buttonName: string) =>
    selectedButton === buttonName
      ? "px-6 py-2 bg-blue-600 text-white font-semibold"
      : "px-6 py-2 bg-black hover:bg-gray-800 text-white font-semibold";

  return (
    <div>
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/menuhero.png')", // Replace with your image path if needed
          height: "400px",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 text-center">
          <div>
            <h1 className="text-5xl md:text-4xl font-bold uppercase tracking-wider mb-4 font-oswald">
              MENU
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-md font-oswald">
              Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
            </p>
          </div>

          <div className="my-8 md:my-16 flex gap-4 justify-center font-oswald">
            <button
              onClick={() => setSelectedButton("Food")}
              className={buttonClasses("Food")}
            >
              Food
            </button>
            <button
              onClick={() => setSelectedButton("Drinks")}
              className={buttonClasses("Drinks")}
            >
              Drinks
            </button>
            <button
              onClick={() => setSelectedButton("Brunch")}
              className={buttonClasses("Brunch")}
            >
              Brunch
            </button>
          </div>
        </div>
      </section>

      {/* Pass selectedButton as a prop to the Body component */}
      <Body selectedButton={selectedButton} />
    </div>
  );
};

export default Hero;

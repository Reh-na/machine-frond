"use client";
import React from "react";

interface BodyProps {
  selectedButton: string;
}

const Body: React.FC<BodyProps> = ({ selectedButton }) => {
  const menuContent: { [key: string]: { title: string; price: string; description: string }[] } = {
    Food: [
      {
        title: "BURGER DELUXE",
        price: "$12",
        description: "Juicy beef patty, cheddar cheese, lettuce, tomato, secret sauce",
      },
      {
        title: "CLASSIC PIZZA",
        price: "$14",
        description: "Marinara sauce, mozzarella, pepperoni, and herbs",
      },
      {
        title: "GRILLED CHICKEN SANDWICH",
        price: "$13",
        description: "Grilled chicken breast, avocado, lettuce, tomato, aioli on a brioche bun",
      },
      {
        title: "VEGGIE WRAP",
        price: "$11",
        description: "Hummus, mixed greens, cucumber, roasted peppers, and feta cheese in a spinach wrap",
      },
      {
        title: "BBQ RIBS",
        price: "$18",
        description: "Slow-cooked ribs glazed with BBQ sauce, served with coleslaw and fries",
      },
    ],
    Drinks: [
      {
        title: "CINNAMON TOAST CRUNCH",
        price: "$16",
        description: "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon",
      },
      {
        title: "BAR 42 MARY",
        price: "$14",
        description: "Tito's, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
      },
      {
        title: "MOJITO CLASSIC",
        price: "$12",
        description: "White rum, fresh lime juice, mint leaves, soda water, and sugar",
      },
      {
        title: "ESPRESSO MARTINI",
        price: "$15",
        description: "Vodka, coffee liqueur, fresh espresso, and a hint of vanilla",
      },
      {
        title: "OLD FASHIONED",
        price: "$14",
        description: "Bourbon, sugar, Angostura bitters, and an orange twist",
      },
    ],
    Brunch: [
      {
        title: "AVOCADO TOAST",
        price: "$10",
        description: "Sourdough, smashed avocado, poached egg, chili flakes",
      },
      {
        title: "FRENCH TOAST",
        price: "$12",
        description: "Brioche, cinnamon syrup, fresh berries, whipped cream",
      },
      {
        title: "EGGS BENEDICT",
        price: "$14",
        description: "Poached eggs, Canadian bacon, English muffin, topped with hollandaise sauce",
      },
      {
        title: "PANCAKE STACK",
        price: "$12",
        description: "Fluffy pancakes served with maple syrup, butter, and fresh berries",
      },
      {
        title: "BREAKFAST BURRITO",
        price: "$13",
        description: "Scrambled eggs, chorizo, potatoes, cheddar, wrapped in a flour tortilla",
      },
    ]
  };

  const selectedMenu = menuContent[selectedButton] || null;

  return (
    <section className="relative bg-black text-white py-20 px-4 overflow-hidden">
           <div className="hidden md:flex absolute top-0 left-0 h-full w-16 md:w-32">
        <img
          src="/left.png" // Replace with your left image path
          alt="Left Side"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side Image */}
      <div className="hidden md:flex absolute top-0 right-0 h-full w-16 md:w-32">
        <img
          src="/right.png" // Replace with your right image path
          alt="Right Side"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-center text-4xl font-bold text-blue-600 tracking-widest mb-8 uppercase font-oswald">
          {selectedButton} Menu
        </h2>
        <div className="border border-white p-8 bg-black bg-opacity-60 relative">
          {selectedMenu ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {selectedMenu.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-3/4 flex items-center">
                      <h3 className="text-lg font-semibold tracking-wide font-oswald">
                        {item.title}
                      </h3>
                      <div className="flex-grow border-b border-4 border-dotted border-white mx-4"></div>
                    </div>
                    <p className="text-lg font-bold">{item.price}</p>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 pl-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-300">No items available for {selectedButton}.</p>
          )}
        </div>
        <div className="absolute top-0 left-0 mt-[-50px] transform -translate-x-1/3 hidden md:block">
          <img
            src="/cock.png" // Replace with actual image path
            alt="Cocktail Decoration 1"
            className="h-40"
          />
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/3 hidden md:block">
          <img
            src="/cock2.png" // Replace with actual image path
            alt="Cocktail Decoration 2"
            className="h-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Body;

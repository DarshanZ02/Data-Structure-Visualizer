import React from "react";
import { useState , useEffect } from "react";

const LinkedListPage = () => {
  const linkedListTypes = [
    { name: "Simple Queue", alertMessage: "Simple Queue Selected!" },
    { name: "Circular Queue", alertMessage: "Circular Queue Selected!" },
    { name: "Priority Queue", alertMessage: "Priority Selected!" },
    { name: "Deque (Double-Ended Queue)", alertMessage: "Deque Selected!" },
  ];



  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-3xl font-bold text-blue-600 mb-6">Linked List Visualizer</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {linkedListTypes.map((type) => (
          <div
            key={type.name} style={{padding:'1.5rem 2rem' , border:"1px solid white"}}
            className={` shadow-lg rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer ${
                      isDarkMode ? "bg-black-800 hover:bg-black-700" : "bg-white"
                    }`}
          >
            <center><h2 className="text-xl font-semibold text-blue-500">{type.name}</h2></center>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedListPage;

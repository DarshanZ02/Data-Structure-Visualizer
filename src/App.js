import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkedListPage from "./linked-list/LinkedListPage";
import QueueListPage from "./queue/QueueListPage";
import TreeListPage from "./tree/TreeListPage";
import ArrayVisualization from "./array/ArrayVisualization";
import StackVisualization from "./stack/StackVisualization";

function App() {
  const dataStructures = [
    { name: "Array", description: "Learn how arrays work with animations.", route: "/array" },
    { name: "Linked List", description: "Visualize linked list operations step by step.", route: "/linked-list" },
    { name: "Stack", description: "Explore stack operations like push and pop."  ,route:"/stack"},
    { name: "Queue", description: "Understand queue mechanics with animations.", route: "/queue-list" },
    { name: "Heap", description: "Learn how heaps manage priority in real time." },
    { name: "Tree", description: "Visualize tree traversal and operations like insertion and deletion.", route: "/tree-list" },
    { name: "Graph", description: "Understand graph algorithms like BFS, DFS, and shortest path." },
    { name: "Matrix", description: "Explore matrix operations like multiplication, addition, and more." },
    { name: "Hash Table", description: "Understand how hash functions and hash tables work." },
  ];

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-white pb-4">
        {/* Background Video and Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80"></div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center min-h-screen">
        <div style={{borderBottom:'1px solid white'}}>

          <header className="text-center mb-10 pt-7 sm:pt-0 lg:pt-1">
            <h1 className="text-4xl font-bold text-blue-600 text-left pl-4">
              Data Structure Visualizer
            </h1>
            <Link to="/">
              <img
                src="./main-logo.png"
                className="block md:hidden"
                style={{ height: "35%", width: "35%", float: "right", marginTop: "-7.3rem", paddingLeft: "1rem" }}
                alt="logo"
              />
            </Link>
            <p className="text-lg text-gray-300 text-left px-4">
              <marquee behavior="scroll" direction="left">
                Explore data structures through interactive animations.
              </marquee>
            </p>
          </header>
        </div>



          {/* Data Structures Links */}
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {dataStructures.map((ds) => (
                    <Link
                      to={ds.route || "#"}
                      key={ds.name}
                      className="shadow-lg rounded-lg p-6 bg-black-800 hover:bg-black-700 hover:scale-105 transition-transform cursor-pointer border border-white"
                    >
                      <h2 className="text-2xl font-semibold text-blue-500">{ds.name}</h2>
                      <p className="text-gray-400 mt-2">{ds.description}</p>
                    </Link>
                  ))}
                </div>
              }
            />
            <Route path="/linked-list" element={<LinkedListPage />} />
            <Route path="/queue-list" element={<QueueListPage />} />
            <Route path="/tree-list" element={<TreeListPage />} />
            <Route path="/array" element={<ArrayVisualization />} />
            <Route path="/stack" element={<StackVisualization />} />
          </Routes>
        </div>

        {/* Footer */}
        {/* <footer className="mt-4 mb-3">
          <center>
            <h4 style={{ fontWeight: 'bold' }}>Learning DSA to grab FAANG/MAANG</h4>
          </center>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;

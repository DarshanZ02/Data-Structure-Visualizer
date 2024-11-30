import React from "react";

const LinkedListPage = () => {
  const linkedListTypes = [
    { name: "Singly Linked List", alertMessage: "Singly Linked List Selected!" },
    { name: "Doubly Linked List", alertMessage: "Doubly Linked List Selected!" },
    { name: "Circular Linked List", alertMessage: "Circular Linked List Selected!" },
  ];



 
  

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-3xl font-bold text-blue-600 mb-6">Linked List Visualizer</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {linkedListTypes.map((type) => (
          <div
            key={type.name} style={{padding:'1.5rem 3rem' ,border:'1px solid white'}}
            className={` shadow-lg rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer ${
                     "bg-black-800 hover:bg-black-700"  
                    }`} 
          >
            <h2 className="text-xl font-semibold text-blue-500" style={{textAlign:'center'}} >{type.name}</h2>
              
             
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedListPage;

import React, { useState } from "react";
import "./StackVisualization.css";

const StackVisualization = () => {
  const [stack, setStack] = useState([]);
  const [top, setTop] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  // Push operation
  const handlePush = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a value!");
      return;
    }
    const updatedStack = [...stack, inputValue];
    setStack(updatedStack);
    setTop(top + 1);
    generateCodeForPush(inputValue);
    setInputValue("");
  };

  // Generate C++ code for Push
  const generateCodeForPush = (value) => {
    setGeneratedCode(`
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> stack = {${stack.map((val) => val).join(", ")}};
    int top = ${top + 1};
    stack.push_back(${value});
    cout << "After Push: ";
    for (int i : stack) cout << i << " ";
    cout << endl;
    return 0;
}
    `);
  };

  // Pop operation
  const handlePop = () => {
    if (stack.length === 0) {
      alert("Stack is empty!");
      return;
    }
    const updatedStack = [...stack];
    updatedStack.pop();
    setStack(updatedStack);
    setTop(top - 1);
    generateCodeForPop();
  };

  // Generate C++ code for Pop
  const generateCodeForPop = () => {
    setGeneratedCode(`
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> stack = {${stack.map((val) => val).join(", ")}};
    int top = ${top - 1};
    if (!stack.empty()) {
        stack.pop_back();
        cout << "Stack Popped" << endl;
    } else {
        cout << "Stack is empty!" << endl;
    }
    return 0;
}
    `);
  };

  // Clear stack
  const handleClear = () => {
    setStack([]);
    setTop(-1);
    setGeneratedCode(`
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> stack;
    int top = -1;
    cout << "Stack Cleared" << endl;
    return 0;
}
    `);
  };

  // Copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="stack-visualization" style={{borderTop:'1px solid white'}}>
       
       <div>
        <h1 style={{fontWeight:'bold' , fontSize:'30px' , color:'rgb(37 99 235 / var(--tw-text-opacity, 1))'}}>Stack Visualization</h1>
       </div>
     
      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handlePush} className="push">
          Push
        </button>
        <button onClick={handlePop} className="pop">
          Pop
        </button>
        <button onClick={handleClear} className="clear">
          Clear Stack
        </button>
      </div>
        <h2 style={{marginBottom:'40px', float:'left'}}>Top: {top}</h2>

      {/* Main container */}
      <div className="container">
        {/* Stack Section */}
        <div className="stack-section">
          <div
            className="visualization"
            style={{
              height: `${stack.length * 60 + 20}px`, // Adjust height dynamically
            }}
          >
            {stack.map((value, index) => (
              <div
                key={index}
                className={`stack-element ${index === top ? "top-element" : ""}`}
                style={{
                  bottom: `${index * 60}px`,
                }}
              >
                {value}
                <span className="index">{index}</span>
              </div>
            ))}
            {top >= 0 && (
              <div
                className="top-arrow"
                style={{
                  bottom: `${top * 60 + 50}px`, // Position the arrow dynamically
                }}
              >
                
              </div>
            )}
          </div>
        </div>

        {/* Code Section */}
        <div className="pseudo-code">
          <h2>Generated Code</h2>
          <div className="code-terminal">
            <pre>{generatedCode}</pre>
            <button className="copy-code-btn" onClick={handleCopyCode}>
              Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackVisualization;

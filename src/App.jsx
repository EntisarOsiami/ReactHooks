import { useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0); 

  return (
    <>
      <div class="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
        <div>
          <h1 className="text-3xl font-bold mb-4">React Numbers App</h1>
        </div>
        <div className=" p-8 bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-md">
          <div className="justify-start items-start flex flex-col">
            <h2 className="text-2xl font-bold mb-5">Calculator</h2>
            <p>Click the buttons to increase or decrease the number.</p>
            <div> number is {number}</div>
            <div className="flex space-x-4 mt-6 mb-6 justify-center grid grid-cols-2 gap-4 w-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumber((number) => number + 1)}
              >
                increase
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded"
                onClick={() => setNumber((number) => number - 1)}
              >
                decrease
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumber((number) => number / 2)}
              >
                divide by 2
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumber((number) => number * 2)}
              >
                multiply by 2
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid col-span-2"
                onClick={() => setNumber((number) => number % 2)}
              >
                modulo 2
              </button>
            </div>
          </div>
          <button
            className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
            onClick={() => setNumber(0)}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

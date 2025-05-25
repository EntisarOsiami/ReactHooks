import { useState } from "react";

function Number() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  return (
    <>
      <div>
        <h1 className="text-3xl item-center flex justify-center  p-3 font-bold mb-4">
          React Numbers App
        </h1>
      </div>
      <div class="flex gap-4 justify-center items-center p-5 h-screen">
        <div className=" p-8 bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-md">
          <div className="justify-start items-start flex flex-col">
            <h2 className="text-2xl font-bold mb-5">Calculator Number-1</h2>
            <p>Click the buttons to preform math operation to the number.</p>
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
        <div className=" p-8 bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-md">
          <div className="justify-start items-start flex flex-col">
            <h2 className="text-2xl font-bold mb-5">Calculator Number-2</h2>
            <p>Click the buttons to preform math operation to the number.</p>
            <div> number is {number2}</div>
            <div className="flex space-x-4 mt-6 mb-6 justify-center grid grid-cols-2 gap-4 w-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumber2((number2) => number2 + 1)}
              >
                increase
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded"
                onClick={() => setNumber2((number2) => number2 - 1)}
              >
                decrease
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumber2((number2) => number2 / 2)}
              >
                divide by 2
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumber2((number2) => number2 * 2)}
              >
                multiply by 2
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid col-span-2"
                onClick={() => setNumber2((number2) => number2 % 2)}
              >
                modulo 2
              </button>
            </div>
          </div>
          <button
            className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
            onClick={() => setNumber2(0)}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Number;

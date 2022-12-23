import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Jee = () => {
  const [message, setMessage] = useState();
  const [doubts, setDoubts] = useState([]);
  const onchangeHandler = (e) => {
    if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };
  const onSubmitHandler = () => {
    setDoubts([...doubts,message]);
  };
  return (
    <>
      <section class="text-gray-600 body-font bg-black">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              The JEE Community
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed font-bold text-white">
              "Get Guidance", "Post a Query" OR "Get help solving a solution".
            </p>
            <div class="flex justify-center">
              {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <Image height={100} width={100} src="/jee.png" />
          </div>
        </div>

        <div class="flex flex-wrap -m-4"></div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="physics.jpg"
              alt="blog"
            />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">
                PHYSICS
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Kinematics Guidance for JEE
              </h1>

              <div class="flex items-center flex-wrap ">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <Link href="">Solve for 0.1 SOL</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {doubts.map((item) => {
          return (
            <>
              <div className="text-white">
                <h1>{item}</h1>
              </div>
            </>
          );
        })}
        <div class="w-full ">
          <form class=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-black">
            <div class="mb-4">
              <label
                class="block text-white text-xl font-bold mb-2"
                for="Post a query..."
              >
                Create a Post
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                value={message}
                name="message"
                onChange={onchangeHandler}
                type="text"
                placeholder="Post a query..."
              />
            </div>

            <div class="flex items-center justify-between">
              <button
                onSubmit={onSubmitHandler}
                class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                PUBLISH YOUR DOUBT
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Jee;

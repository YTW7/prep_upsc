import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Jee = () => {
  const [title, setTitle] = useState();
  const [description , setDescription] = useState()
  const [price , setPrice] = useState()
  const handlerChange = (e) => {
    if (e.target.name == "title") {
      setTitle(e.target.value);
    }
    if(e.target.name=="description"){
      setDescription(e.target.value)
    }
    if(e.target.name="price"){
      setPrice(e.target.value)
    }

  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {title , description , price}
    let res  = await fetch("http://localhost:3000/api/indianHistory",{
      method : "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(data)
    })
    let responce = await res.json()
    console.log(responce)
    setTitle("")
    setDescription("")
    setPrice("")
  };
  return (
    <>
      <section class="text-gray-600 body-font bg-black">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              The INDIAN HISTORY Subject Community
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
            <Image height={70} width={180} src="/history.png" />
          </div>
        </div>

        <div class="flex flex-wrap -m-4"></div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="timeline.jpg"
              alt="blog"
            />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">
                INDIAN HISTORY
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Any innovative technique to memorize huge list of events.
              </h1>

              <div class="flex items-center flex-wrap ">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <Link href="">Solve for 0.1 SOL</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="w-full ">
        <form
            onSubmit={onSubmitHandler}
            class="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="title" class="sr-only">
                  Title
                </label>
                <input
                  onChange={handlerChange}
                  id="title"
                  value={title}
                  name="title"
                  type="title"
                  required
                  class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label for="description" class="sr-only">
                  Description
                </label>
                <input
                  onChange={handlerChange}
                  id="description"
                  name="description"
                  type="description"
                  value={description}
                  autocomplete="current-password"
                  required
                  class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label for="price" class="sr-only">
                  Price
                </label>
                <input
                  onChange={handlerChange}
                  id="price"
                  name="price"
                  type="price"
                  value={price}
                  autocomplete="price"
                  required
                  class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="News?"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Publish 
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Jee;

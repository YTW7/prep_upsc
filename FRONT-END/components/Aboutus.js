import React, { useState } from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
export default function Aboutus() {
  const [showLessOne, setShowLessOne] = useState(true)
  const [textOne, setTextOne] = useState("Read More")
  const [showingless, setshowingless] = useState(true);
  const [text, setText] = useState("Read More")
  const switchView = () => {
    if (showingless == true) {
      setshowingless(false)
      setText("Read Less")
    }
    if (showingless == false) {
      setshowingless(true)
      setText("Read More")
    }
  }
  const switchViewOne = () => {
    if (showLessOne == true) {
      setShowLessOne(false)
      setTextOne("Read Less")
    }
    if (showLessOne == false) {
      setShowLessOne(true)
      setTextOne("Read More")
    }
  }
  return (
    <div id='About'>


      <section class="text-gray-600 body-font overflow-hidden mt-20">
        <div class="container  mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-black text-xs font-medium tracking-widest ">
                #PREP-UPSC
              </span>
              <h2 class="sm:text-xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 bg-yellow-200 p-2 rounded-lg">
                FLOWCHART
              </h2>
              <div className="bg-gray-200 rounded-lg p-4">
                {showLessOne ? (
                  <>
                    <p class="leading-relaxed mb-8  text-lg ">
                      1.User Opens
                      Our Platform
                      and
                      joins his desired subject
                      community...
                      <br />
                      2.User can post queries
                      and doubts by paying some crypto.
                      OR
                      either solve other people's
                      doubt and earn crypto.

                    </p>
                    <a
                      onClick={switchViewOne}
                      class="text-black bg-yellow-200 p-2 rounded-md   inline-flex items-center mt-2 mx-2 cursor-pointer "
                    >
                      {textOne}
                      {
                        <AiOutlineArrowDown className="mx-1 " />
                      }
                      <Image src="/logo.png" height={50} width={50} class="rounded-lg"/> 

                    </a>
                  </>
                ) : (
                  <>
                    <p class="leading-relaxed mb-8  text-lg ">

                    </p>
                    <a
                      onClick={switchViewOne}
                      class="text-black bg-yellow-200 p-2 rounded-md   inline-flex items-center mt-2 mx-2 cursor-pointer"
                    >
                      {textOne}
                      {
                        <AiOutlineArrowUp className="mx-1 " />

                      }
                       <Image src="/logo.png" height={50} width={50} class="rounded-lg"/> 
                    </a>
                  </>
                )}

              </div>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">

              </div>
            </div>

            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-black text-xs font-medium tracking-widest">
              #PREP-UPSC
              </span>
              <h2 class="sm:text-xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 bg-blue-300 p-2 rounded-lg ">
                OUR VISION
              </h2>
              <div className="bg-gray-200 rounded-lg p-2">
                {showingless ? (
                  <>
                    <h6 class="leading-relaxed mb-8 text-lg ">
                      Our platform reduces the huge cost paid by
                      students over EdTech platforms while preparing for
                      competetive exams whereas they can get
                      guidance and doubt solutions
                      from our Subject-Based
                      Community Platform "PREP-UPSC"
                      for paying as low as they want,
                      that too in SOL cryptocurrency.
                      <ul className="mt-2">
                        <li className="mt-2">

                        </li>
                        <li className="mt-2">


                        </li>
                      </ul>
                    </h6>
                    <a
                      onClick={switchView}
                      class="text-black bg-blue-300 p-2 rounded-md   inline-flex items-center mt-2 mx-2  cursor-pointer"
                    >
                      {text}
                      {
                        <AiOutlineArrowDown className="mx-1 " />
                      }
                       <Image src="/logo.png" height={50} width={50} class="rounded-lg"/> 
                    </a>
                  </>
                ) : (
                  <>
                    <h6 class="leading-relaxed mb-8 text-lg ">
                     
                    </h6>
                    <a
                      onClick={switchView}
                      class="text-black bg-blue-300 p-2 rounded-md   inline-flex items-center mt-2 mx-2 cursor-pointer"
                    >
                      {text}
                      {
                        <AiOutlineArrowUp className="mx-2 " />
                      }
                      <Image src="/logo.png" height={50} width={50} class="rounded-lg"/>
                    </a>
                  </>
                )}
              </div>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
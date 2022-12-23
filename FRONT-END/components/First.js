import React from 'react'
import Image from 'next/image'
const First = () => {
  return (
    <>
    <div
    id='homepage'>
     <section class="text-gray-600 body-font bg-black mt-2 rounded-xl">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div class="rounded-lg h-90  ">
            <h1 class="title-font sm:text-6xl text-4xl font-bold mb-4 ml-10 text-white font-ubuntu capitalize">
              welcome To
            </h1>
            <h1 class="title-font sm:text-6xl text-4xl mx-5 p-8 mt-10  bg-blue-400 rounded-lg font-thin mb-4  text-white font-ubuntu capitalize">
              <div class="font-bold">Get Help</div>
              <br /> 
              <div className='bg-black rounded-xl p-5' >
              One-Stop Decentralized Platform for Competitive Exam Aspirants
              </div> 
            </h1>
             
          </div>
          
        </div>
        
        {/* //<img class="mt-30 bg-[length:100px_100px]" src="solana.png" alt="" /> */}
      <div class="bg-black rounded-xl p-5">
        <Image class="ml-auto mr-auto pt-30 bg-black self-center mt-100" src="/solana.png" alt="" width={300} height={300}></Image>
        </div>
        
      </section>

      </div>
    </>
  )
}

export default First
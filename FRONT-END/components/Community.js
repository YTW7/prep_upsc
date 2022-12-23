import React from "react";
import Image from "next/image";
import Link from "next/link";

const Community = () => {
  return (
    <div id="COMMUNITIES">
      <section class="text-white body-font bg-black w-full rounded-xl">

 

        <h1 class="  text-4xl font-medium title-font text-center text-white mt-20 pt-20">OUR COMMUNITIES</h1>

        {/* 1st card  */}
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  width={180}
                  height={70}
                  className="mx-auto mt-5"
                  src="/jee.png"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Competetive Exam Community
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    JEE
                  </h1>
                  <p class="leading-relaxed mb-3">
                    The Joint Entrance Examination, JEE Main is conducted for
                    admission to BE/BTech and BArch/BPlan courses at NITs,
                    IIITs, other Centrally Funded Technical Institutions
                    (CFTIs), Institutions/Universities funded/recognized by
                    participating State Governments. JEE Main is also an
                    eligibility test for JEE Advanced, which is conducted for
                    admission to IITs. They are considered as institutes of national importance.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <Link href="/Jee">JOIN NOW</Link>
                      </button>
                    </a>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd card */}
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  width={180}
                  height={70}
                  className="mx-auto mt-5"
                  src="/neet.png"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Competetive Exam Community
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    NEET
                  </h1>
                  <p class="leading-relaxed mb-3">
                    NEET is the only national-level medical entrance examination
                    for admission into MBBS, BDS, B.Sc. Nursing, AYUSH courses
                    offered by top government and private medical colleges in
                    India including AIIMS and JIPMER. The exam is conducted by
                    National Testing Agency (NTA), which provides the results to
                    the Directorate General of Health Services under Ministry of
                    Health and Family Welfare and State Counselling Authorities
                    for seat allocation.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <Link href="/Neet">JOIN NOW</Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd card */}
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  width={180}
                  height={70}
                  className="mx-auto mt-5"
                  src="/gate.png"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Competetive Exam Community
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    GATE
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Graduate Aptitude Test in Engineering is an All-India test
                    authorized and managed in eight regions across the nation.
                    The exam is conducted by the GATE Committee, faculty members
                    from IISc, and seven other IITs on behalf of the Ministry of
                    Human Resources Development, National Coordinating Board,
                    and Department of Education. The purpose of the GATE exam is
                    to test students’ knowledge in subjects like Engineering and
                    Science.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <Link href="/Gate">JOIN NOW</Link>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

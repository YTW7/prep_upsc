import React from "react";
import { Link } from "react-scroll";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { truncate } from "../utils/string";
import Script from "next/script";
import Head from "next/head";

require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = ({ connected, publicKey }) => {
  return (
    <>
      <Head>
        <script>
          // It's best to inline this in `head` to avoid FOUC (flash of unstyled
          content) when changing pages or themes
        </script>
      </Head>
      <Script src="../path/to/flowbite/dist/flowbite.bundle.js" />

      <div>
        <header class="text-white body-font bg-black width-1 rounded-xl">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <Link
                to="homepage"
                spy={true}
                smooth={true}
                offset={20}
                duration={1000}
                className="mx-4 cursor-pointer hover:text-yellow-400"
              >
                HOME
              </Link>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={20}
                duration={1000}
                className="mx-4 cursor-pointer hover:text-yellow-400"
              >
                ABOUT US
              </Link>
              <Link
                to="COMMUNITIES"
                spy={true}
                smooth={true}
                offset={20}
                duration={1000}
                className="mx-4 cursor-pointer hover:text-yellow-400"
              >
                COMMUNITIES
              </Link>

              {/* <a class="hover:text-gray-900">Fourth Link</a> */}
            </nav>
            <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
              {/* <svg src="../public/logo.png" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
              <img src="/logo1.png" class="w-10 h-10" alt="logo" />
              <span class="ml-3 text-xl text-white">Get Help</span>
            </a>
            <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
              {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >
      <img class="w-8 h-8 mr-2 rounded-full" src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png" alt=""/>
        Wallet Name
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> */}
              <button
                id="theme-toggle"
                type="button"
                class="text-red-500 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-xl p-2.5"
              >
                <svg
                  id="theme-toggle-dark-icon"
                  class="w-5 h-5 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  class="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <WalletMultiButton className="phantom-button">
                <img
                  class="w-8 h-8 mr-2 rounded-full bg-red-500"
                  src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png"
                  alt=""
                />
                <span className="text-sm font-black text-red-600">
                  {connected
                    ? truncate(publicKey.toString())
                    : "Connect Wallet"}
                </span>
              </WalletMultiButton>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;

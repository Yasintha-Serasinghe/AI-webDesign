import React from "react";
import Back from "../Assets/yasaka-pagoda-sannen-zaka-street-kyoto-japan.jpg";
import { Link } from "react-router-dom";

export default function hero() {  // first section
  const sectionStyle = {
    backgroundImage: `url(${Back})`,
  };
  return (
    <div>
      <section
        style={sectionStyle}
        className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply min-h-screen"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Pixel Perfect: AI Image Generation at Your Fingertips
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Discover a seamless blend of human ingenuity and artificial
            intelligence as you explore a vast canvas of possibilities. Whether
            you're an artist seeking inspiration or a creative soul yearning to
            bring your ideas to life, our platform offers the tools and
            resources to make it happen.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/reg">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Join Now
              </button>
            </Link>
          </div>

          <div></div>
          <form action="#">
            <div class="  mt-12 items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div class="relative w-full">
                <input
                  class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your prompt"
                  required=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  class=" bg bg-purple-400 hover:bg-purple-800 py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg "
                >
                  Generate
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

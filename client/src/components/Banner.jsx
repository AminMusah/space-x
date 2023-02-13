import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="relative h-screen bg-center bg-no-repeat bg-cover section-a">
      <div className="absolute bottom-[75px] left-[20px] sm:bottom-[200px] sm:left-[150px] max-w-[560px] section-inner">
        <h4 className="text-22 mb-2 font-light uppercase">Upcoming Launch</h4>
        <h2 className="text-[40px] sm:text-[50px] font-bold mb-4 duration-500 ease-in-out delay-200 uppercase">
          lunar exploitation
        </h2>
        <Link
          to="#"
          className="btn relative inline-block pointer text-center min-width-[130px] py-[15px] px-[50px] mt-[10px] border border-white uppercase font-bold overflow-hidden z-[2]"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white text-black z-[-1] hover translate-y-full transition-all"></div>
          <span>Learn More</span>
        </Link>
      </div>
    </section>
  );
}

export default Banner;

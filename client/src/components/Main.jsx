import { useState, useEffect } from "react";
import MiniLoader from "./MiniLoader";
import axios from "axios";

function Main() {
  const [loading, setLoading] = useState(false);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const getShips = async () => {
      const res = await axios.get(`https://api.spacexdata.com/v3/ships`);
      setShips(res.data);
      console.log(res.data);
    };
    getShips();
  }, []);

  return (
    <div>
      <form className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative mx-auto w-10/12">
        <div className="flex flex-col items-start">
          <label className="mt-4">Type</label>
          <input
            type="text"
            className="border border-blue rounded p-2 w-full text-black"
          />
        </div>
        <div className="mb-2 flex flex-col items-start justify-center">
          <label className="mt-4">Original Launch</label>
          <input
            type="text"
            className="border border-blue rounded p-2 w-full text-black"
          />
        </div>
        <div className="mb-2 flex flex-col items-start justify-center ">
          <label className="mt-4">Type</label>
          <input
            type="text"
            className="border border-blue rounded p-2 w-full text-black"
          />
        </div>

        <button className="relative sm:mt-[40px] mt-[10px] bottom-0 border-white border font-inherit cursor-pointer flex items-center justify-center w-full h-10 py-2 px-12 font-medium text-lg uppercase rounded-lg transition-all">
          {loading ? <MiniLoader /> : ""}
          <span className=" absolute">Search</span>
        </button>
      </form>

      <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
        {ships.map((ship, index) => {
          return (
            <div
              key={ship.id}
              className="bg-light-blue p-4 flex flex-col items-center justify-center transition-all duration-200 overflow-hidden"
            >
              <img
                src={ship.image}
                alt=""
                className="h-64 w-full object-cover aspect-ratio-square"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;

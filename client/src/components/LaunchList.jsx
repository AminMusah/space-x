import React from "react";
import Loader from "./Loader";

function LaunchList({ loading, launch }) {
  return (
    <div className="flex justify-center items-center h- h-max m-8">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="m-8 text-5xl flex items-center justify-center">
            Launches
          </h1>

          <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
            {launch.map((launches) => {
              return (
                <div
                  key={launches.flight_number}
                  className="bg-light-blue p-4 flex flex-col items-center justify-center transition-all duration-200 overflow-hidden"
                >
                  <img
                    src={launches.links.mission_patch || "/img/starship.jpg"}
                    alt=""
                    className="h-64 w-full object-cover aspect-ratio-square"
                  />
                  <div className="flex xm w-full mt-4">
                    <p className="text-sm">Mission Name:</p>
                    <span className="text-sm">{launches.mission_name}</span>
                  </div>
                  <div className="flex w-full mt-4">
                    <p className="text-sm">Rocket Name:</p>
                    <span className="text-sm">
                      {launches.rocket.rocket_name}
                    </span>
                  </div>
                  <div className="flex w-full mt-4">
                    <p className="text-sm">Launch Year:</p>
                    <span className="text-sm">{launches.launch_year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default LaunchList;

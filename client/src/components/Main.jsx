import { useState, useEffect } from "react";
import MiniLoader from "./MiniLoader";
import axios from "axios";
import Loader from "./Loader";

function Main() {
  const [loading, setLoading] = useState(false);
  const [miniloading, setMiniLoading] = useState(false);
  const [launch, setLaunch] = useState([]);

  const [selectedMission, setSelectedMission] = useState("Select Mission");
  const [selectedRocket, setSelectedRocket] = useState("Select Rocket");
  const [selectedFlightNumber, setSelectedFlightNumber] = useState(1);

  const handleMissionChange = (event) => {
    setSelectedMission(event.target.value);
  };

  const handleRocketChange = (event) => {
    setSelectedRocket(event.target.value);
  };

  const handleFlightNumberChange = (event) => {
   setSelectedFlightNumber(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setMiniLoading(true);
    getLaunch(event.target.value)
  };

  useEffect(() => {
    const getLaunches = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
        setLaunch(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    };
    getLaunches();
  }, []);

  const getLaunch = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setMiniLoading(true);
      const res = await axios.get(
        `https://api.spacexdata.com/v3/launches/${selectedFlightNumber}`
      );
      setLaunch(res.data);
      console.log(res.data);
      setLoading(false);
      setMiniLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative mx-auto w-10/12"
        onSubmit={handleSearch}
      >
        <div className="flex flex-col items-start mt-4">
          <label className="mt-4">Mission</label>
          <select
            value={selectedMission}
            onChange={handleMissionChange}
            className="flex flex-col items-start text-black w-full px-2 h-8 overflow-hidden"
          >
            <option value={selectedMission}>{selectedMission}</option>
            {launch.map((launch) => (
              <option key={launch.mission_name} value={launch.mission_name}>
                {launch.mission_name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-start mt-4">
          <label className="mt-4">Rocket</label>
          <select
            value={selectedRocket}
            onChange={handleRocketChange}
            className="flex flex-col items-start text-black w-full px-2 h-8 overflow-hidden"
          >
            <option value={selectedRocket}>{selectedRocket}</option>
            {launch.map((launch) => (
              <option
                key={launch.rocket.rocket_id}
                value={launch.rocket.rocket_name}
              >
                {launch.rocket.rocket_name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-start mt-4">
          <label className="mt-4">Flight Number</label>
          <select
            value={selectedFlightNumber}
            onChange={handleFlightNumberChange}
            className="flex flex-col items-start text-black w-full px-2 h-8 overflow-hidden"
          >
            <option value={selectedFlightNumber}>{selectedFlightNumber}</option>
            {launch.map((launch) => (
              <option
                key={launch.flight_number}
                value={launch.flight_number}
              >
                {launch.flight_number}
              </option>
            ))}
          </select>
        </div>

        <button className="relative sm:mt-[50px] mt-[45px] bottom-0 border-white border font-inherit cursor-pointer flex items-center justify-center w-full h-10 py-2 px-12 font-medium text-lg uppercase rounded-lg transition-all">
          {miniloading ? <MiniLoader /> : ""}
          <span className=" absolute">Search</span>
        </button>
      </form>
      <div className="flex justify-center items-center h- h-max m-8">
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Main;

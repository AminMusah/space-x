import { useState, useEffect } from "react";
import MiniLoader from "./MiniLoader";
import axios from "axios";
import LaunchList from "./LaunchList";
import Pagination from "./Pagination";

function Main() {
  const [loading, setLoading] = useState(false);
  const [miniloading, setMiniLoading] = useState(false);
  const [launch, setLaunch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [error, setError] = useState(false);
  

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
    getLaunch(e.target.value)
  };

  //get All launches
  useEffect(() => {
    const getLaunches = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/`);
        setLaunch(res.data);
        console.log(res.data);
        setLoading(false);
        setError(false)
      } catch (error) {
        setError(true);
        setLoading(false);
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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = launch.slice(firstPostIndex, lastPostIndex)

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
      {error ? <p className="flex justify-center items-center m-40">No Launches</p> : ""}
      <LaunchList loading={loading} launch={currentPosts}/>
      <Pagination totalPosts={launch.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default Main;

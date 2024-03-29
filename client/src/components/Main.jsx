import { useState, useEffect } from "react";
import MiniLoader from "./MiniLoader";
import axios from "axios";
import LaunchList from "./LaunchList";
import Pagination from "./Pagination";
import Popup from "./PopUp";
import production from "../../production/base";

function Main() {
  const [loading, setLoading] = useState(false);
  const [miniloading, setMiniLoading] = useState(false);
  const [launch, setLaunch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [error, setError] = useState(false);
  const [flightNumber, setFlightNumber] = useState('1'); // State to hold flight number input
  const [missionId, setMissionId] = useState('EE86F74'); // State to hold Mission Id input
  const [rocketId, setRocketId] = useState('falcon1'); // State to hold Rocket Id input
  const [launchInfo, setLaunchInfo] = useState(null); // State to hold launch info
  const [missionInfo, setMissionInfo] = useState(null); // State to hold Mission info
  const [rocketInfo, setRocketInfo] = useState(null); // State to hold Rocket info
  const [showPopup, setShowPopup] = useState(false);

  const handleMissionChange = (e) => {
    setMissionId(e.target.value);
  };

  const handleRocketChange = (e) => {
    setRocketId(e.target.value);
  };

  const handleFlightNumberChange = (e) => {
    setFlightNumber(e.target.value);
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
    setMiniLoading(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setMiniLoading(true);
    handlePopupOpen();
  };

  //get All launches
  useEffect(() => {
    const getLaunches = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${production}/api/`);
        setLaunch(res.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    getLaunches();
  }, []);

  //get a single launch by flight number
  useEffect(() => {
    const getLaunch = async () => {
      try {
        if (flightNumber !== "") {
          axios
            .get(`${production}/api/flight/${flightNumber}`)
            .then((response) => {
              setLaunchInfo(response.data);
              setMiniLoading(false);
            })
            .catch((error) => {
              setMiniLoading(false);
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error)
        setMiniLoading(false);
      }
    };
    getLaunch()
  }, [flightNumber]);

  //get a single launch by mission
  useEffect(() => {
    const getLaunch = async () => {
      try {
        if (missionId !== "") {
          axios
            .get(`${production}/api/mission/${missionId}`)
            .then((response) => {
              setMissionInfo(response.data);
              setMiniLoading(false);
            })
            .catch((error) => {
              setMiniLoading(false);
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error)
        setMiniLoading(false);
      }
    };
    getLaunch()
  }, [missionId]);

  //get a single launch by Rocket
  useEffect(() => {
    const getRocket = async () => {
      try {
        if (rocketId !== "") {
          axios
            .get(`${production}/api/rocket/${rocketId}`)
            .then((response) => {
              setRocketInfo(response.data);
              setMiniLoading(false);
            })
            .catch((error) => {
              setMiniLoading(false);
            });
        }
      } catch (error) {
        setMiniLoading(false);
      }
    };
    getRocket()
  }, [rocketId]);

  //pagination
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = launch.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      {error ? (
        ""
      ) : (
        <form
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative mx-auto w-10/12"
        >
          <div className="flex flex-col items-start mt-4">
            <label className="mt-4">Mission</label>
            <select
              value={missionId}
              onChange={handleMissionChange}
              className="flex flex-col items-start text-black w-full p-[5px] h-8 overflow-hidden rounded-lg transition-all"
            >
              <option value={missionId}>{missionId}</option>
              {launch.map((launch) => (
                <option key={launch.mission_name} value={launch.mission_id}>
                  {launch.mission_id}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start mt-4">
            <label className="mt-4">Rocket</label>
            <select
              value={rocketId}
              onChange={handleRocketChange}
              className="flex flex-col items-start text-black w-full p-[5px] h-8 overflow-hidden rounded-lg transition-all"
            >
              <option value={rocketId}>{rocketId}</option>
              {launch.map((launch) => (
                <option
                key={launch.mission_name}
                  value={launch.rocket.rocket_id}
                >
                  {launch.rocket.rocket_id}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start mt-4">
            <label className="mt-4">Flight Number</label>
            <select
              value={flightNumber}
              onChange={handleFlightNumberChange}
              className="flex flex-col items-start text-black w-full p-[5px] h-8 overflow-hidden rounded-lg transition-all "
            >
              <option value={flightNumber}>{flightNumber}</option>
              {launch.map((launch) => (
                <option key={launch.mission_name} value={launch.flight_number}>
                  {launch.flight_number}
                </option>
              ))}
            </select>
            
          </div>

          <button onClick={handleSearch} className="relative sm:mt-[55px] mt-[45px] bottom-0 border-white border font-inherit cursor-pointer flex items-center justify-center w-full h-8 py-2 px-12 font-medium text-lg uppercase rounded-lg transition-all hover:bg-white hover:text-black">
            {miniloading ? <MiniLoader /> : ""}
            <span className=" absolute">Search</span>
          </button>
        </form>
      )}
      {error ? (
        <p className="flex justify-center items-center mt-40 w-full">No Launches :( </p>
      ) : (
        ""
      )}
      <Popup launchInfo={launchInfo} missionInfo={missionInfo} rocketInfo={rocketInfo} showPopup={showPopup} handlePopupClose={handlePopupClose}/>
      <LaunchList loading={loading} launch={currentPosts} />
      <Pagination
        totalPosts={launch.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        data-testid='pagination'
      />
    </div>
  );
}

export default Main;

function Popup({
  launchInfo,
  rocketInfo,
  missionInfo,
  showPopup,
  handlePopupClose,
}) {
  return (
    <div className="flex justify-center">
      {showPopup && (
        <div className="absolute top-[160vh] inset-0 z-10 flex items-center justify-center shadow-lg">
          <div className="bg-white text-xs w-4/5 sm:w-1/2 p-2 rounded-lg relative">
            <div className="bg-white p-8 rounded-lg">
                <div>
                  <h1 className="text-3xl text-black font-bold mb-4">
                    Mission: {launchInfo.mission_name}
                  </h1>{" "}
                  <p className="text-xs text-black mb-4 font-bold">
                    Launch Details: {launchInfo.details}
                  </p>
                  <div>
                <h1 className="text-xs text-black font-bold mb-4">Rocket Name: {rocketInfo.rocket_name}</h1>
                <p className="text-xs text-black mb-4 font-bold">Company: {rocketInfo.company}</p>
                <p className="text-xs text-black mb-4 font-bold">Rocket Description: {rocketInfo.description}</p>
                <h1 className="text-2xl text-black font-bold mb-4"> Mission Name:{missionInfo.mission_name}</h1>
                <p className="text-sm text-black mb-4 font-bold">Mission Manufacturer: {missionInfo.manufacturers}</p>
                <p className="text-xs text-black mb-4 font-bold">Mission Description:  <br />{missionInfo.description}</p>
              </div>
                </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-[#474bff] text-white font-bold py-2 px-4 rounded mr-2 absolute right-0 top-0"
              type="button"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

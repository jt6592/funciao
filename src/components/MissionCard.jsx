import React from "react";
import allPuzzles from "../common/allPuzzles";

const MissionCard = (props) => {
  const { index, missionStatus } = props;
  return (
    <div className="flex flex-col">
      {/* <div className="flex-col border">
        <div className="flex justify-center">
          <div className="mr-2 mb-2">{allPuzzles[index].name}</div>
          <div>status : {mission.status}</div>
        </div>
        <div className="flex text-left">
          <div>任務描述 : {allPuzzles[index].description}</div>
        </div>
      </div> */}
    </div>
  );
};

export default MissionCard;

{
  /* <div className="px-8 mb-2">
<div className="bg-white h-60 rounded-xl">
  <div className="flex p-5">
    <img
      className="h-8 w-8"
      src="https://static.kolable.com/avatars/weblab/2bfdfd24-732a-43c8-8aa8-722e4b521941"
      alt=""
    />
    <div className="flex">
      <div className="text-xl">任務{missionData}</div>
    </div>
  </div>
</div>
</div> */
}

import SchoolBageIcon from "../img/mission_badge_0_school.png";
import JyunsBadgeIcon from "../img/mission_badge_1_jyuns.png";
import CihuiBadgeIcon from "../img/mission_badge_2_cihui.png";
import LinBadgeIcon from "../img/mission_badge_3_lin.png";
import NanziBadgeIcon from "../img/mission_badge_4_nanzi.png";
import WallBadgeIcon from "../img/mission_badge_5_wall.png";

import FinishedIcon from "../img/status-finished.png";
import UnfinishedIcon from "../img/status-pendding.png";

import React, { useContext, useEffect } from "react";
import {
  useCollectionData,
  useCollectionOnce,
  useCollection
} from "react-firebase-hooks/firestore";
import UserDataService from "../services/UserService";
import allPuzzles from "../common/allPuzzles";
import { useHistory } from "react-router-dom";
import AuthContext from "../user/AuthContext.js";

const Missions = () => {
  const { authData } = useContext(AuthContext);
  const userId = "guest";
  const badgeIconList = [
    SchoolBageIcon,
    JyunsBadgeIcon,
    CihuiBadgeIcon,
    LinBadgeIcon,
    NanziBadgeIcon,
    WallBadgeIcon
  ];
  const [missions, loading, error] = useCollectionData(
    UserDataService.getMissionsCollection(userId),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  let history = useHistory();

  // useEffect(() => {
  //   if (!loading) {
  //   }
  // }, [loading]);

  return (
    <div className="pt-14 py-20 bg-gray-100">
      <div className="text-center">
        <div>Mission List</div>

        {error && <strong>Error: {error}</strong>}
        {loading && <div>Loading...</div>}

        <div className="flex flex-col">
          {missions &&
            missions.map((mission, index) => {
              return (
                <button
                  onClick={() => {
                    history.push("/missions/" + index);
                  }}
                  className="flex-grow hover:shadow-sm shadow-lg bg-white rounded-xl p-2 m-4 flex flex-col"
                >
                  <div className="flex">
                    <img
                      className="badgeIcon"
                      src={badgeIconList[index]}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="flex text-left items-center mb-2">
                        <img
                          className="statusIcon mr-2"
                          src={
                            mission.status === "finished"
                              ? FinishedIcon
                              : UnfinishedIcon
                          }
                          alt=""
                        />
                        <div className="text-xl">{allPuzzles[index].name}</div>
                      </div>
                      <div className="flex text-left">
                        <div>{allPuzzles[index].description}</div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Missions;

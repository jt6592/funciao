import React from "react";
import { Link } from "react-router-dom";
import GearIcon from "../img/icon-gear.png";
import FlagIcon from "../img/icon-flag.png";
import MissionListIcon from "../img/icon-missionlist.png";
import MyMissionIcon from "../img/icon-mymission.png";

const TabBar = () => {
  return (
    <div className="tabBar-pin fixed w-full left-0 z-10 bottom-0">
      <div className=" max-w-xl mx-auto text-white">
        <ul className="tabBar flex justify-around divide-x">
          <li>
            <Link to="/information">
              <div className="flex flex-col items-center">
                <img src={GearIcon} className="tabIcon" alt="" />
                <span className="text-xs">資訊欄</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/tutorial">
              <div className="flex flex-col items-center">
                <img src={FlagIcon} className="tabIcon" alt="" />
                <span className="text-xs">冒險大廳</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/missions">
              <div className="flex flex-col items-center">
                <img src={MissionListIcon} className="tabIcon" alt="" />
                <span className="text-xs">任務公告</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/my-mission">
              <div className="flex flex-col items-center">
                <img src={MyMissionIcon} className="tabIcon" alt="" />
                <span className="text-xs">我的任務</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabBar;

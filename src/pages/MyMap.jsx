import React, { useState, useEffect, useContext, useRef } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import defaultSites from "../common/defaultSites";
import allPuzzles from "../common/allPuzzles";
import { useHistory } from "react-router-dom";
import { useDocument, useObject } from "react-firebase-hooks/firestore";
import UserDataService from "../services/UserService";
import AuthContext from "../user/AuthContext.js";
import MissionStatusCard from "../components/MissionStatusCard";

const MyMap = () => {
  const { authData, getAuthData } = useContext(AuthContext);
  const userId = authData;

  const myStyle = new Icon({
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    iconSize: [25, 25]
  });

  let history = useHistory();

  const state = {
    center: defaultSites[5].location,
    zoom: 16
  };

  const [sites, setSites] = useState(null);
  const [snapshot, loading, error] = useDocument(
    UserDataService.getUser(userId)
  );
  const [current, setCurrent] = useState({
    currentMission: -1,
    currentStage: -1
  });

  useEffect(() => {
    if (!authData) {
      getAuthData();
      console.log(authData);
    }

    if (!loading) {
      let newCurrent = snapshot.data();
      let index = snapshot.data().currentMission;
      if (index >= 0) {
        setSites(allPuzzles[index].stages);
        setCurrent(newCurrent);
      } else {
        setSites(defaultSites);
      }
    }
  }, [loading, authData]);

  const handleOnclick = (index) => {
    setSites(allPuzzles[index].stages);
    let newCurrent = { currentMission: index, currentStage: 0 };
    setCurrent(newCurrent);
    UserDataService.updateUser(userId, newCurrent);
    history.push("/my-mission");
  };

  return (
    <div className="pt-14 flex flex-col text-center">
      <div>Hi, {authData}</div>
      <div className="flex justify-center">
        <MissionStatusCard />
      </div>

      <Map center={state.center} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        {sites &&
          sites.map((site, index) => {
            return (
              <Marker key={index} position={site.location}>
                <Popup>
                  <div className="flex flex-col">
                    <div>{site.name}</div>

                    <div>
                      {current && current.currentMission < 0 ? (
                        <div className="flex">
                          <button
                            className="bg-green-300"
                            onClick={() => {
                              handleOnclick(index);
                            }}
                          >
                            接任務！
                          </button>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </Map>
    </div>
  );
};

export default MyMap;

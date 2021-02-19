import React, { useState, useEffect, useContext } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import UserDataService from "../services/UserService";
import allPuzzles from "../common/allPuzzles";
import AuthContext from "../user/AuthContext.js";

const MissionStatusCard = () => {
  const { authData, getAuthData } = useContext(AuthContext);
  const userId = authData;
  const [snapshot, loading, error] = useDocument(
    UserDataService.getUser(userId)
  );
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!loading) {
      // console.log(snapshot.data());
      setCurrent(snapshot.data());
      // setMissionStatus(snapshot.data());
      ///更新 userId/missoins, userId/stages
    }
  }, [loading]);
  return (
    <div className="flex justify-center">
      {loading ? (
        <div></div>
      ) : current && current.currentMission >= 0 ? (
        <div>{allPuzzles[current.currentMission].name}</div>
      ) : (
        <div>快看看離你最近的任務</div>
      )}
      {loading ? (
        <div></div>
      ) : current && current.currentStage >= 0 ? (
        <div>({current.currentStage}/3)</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MissionStatusCard;

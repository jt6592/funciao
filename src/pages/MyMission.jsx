import React, { useState, useEffect, useContext } from "react";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import UserDataService from "../services/UserService";
import { useHistory } from "react-router-dom";
import allPuzzles from "../common/allPuzzles";
import HintCard from "../components/HintCard";
import AuthContext from "../user/AuthContext.js";
import MissionStatusCard from "../components/MissionStatusCard";

const MyMission = () => {
  const { authData, getAuthData } = useContext(AuthContext);
  const userId = authData;
  const [snapshot, loading, error] = useDocument(
    UserDataService.getUser(userId)
  );
  const [current, setCurrent] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [success, setSuccess] = useState(0);
  let history = useHistory();

  const handleSubmitAnswer = () => {
    let ans =
      allPuzzles[current.currentMission].stages[current.currentStage].answer;

    if (answer === ans) {
      let newCurrent;

      if (current.currentStage === 2) {
        //只有三關,任務破完
        UserDataService.updateMissionsStagesCollection(
          userId,
          "mission" + current.currentMission,
          "stage" + current.currentStage,
          { status: "finished" }
        );
        UserDataService.updateMissionsCollection(
          userId,
          "mission" + current.currentMission,
          {
            status: "finished"
          }
        );
        alert("棒 這任務破了");
        newCurrent = {
          ...current,
          currentMission: -1,
          currentStage: -1
        };
        UserDataService.updateUser(userId, newCurrent);
      } else {
        UserDataService.updateMissionsStagesCollection(
          userId,
          "mission" + current.currentMission,
          "stage" + current.currentStage,
          { status: "finished" }
        );
        alert("棒 這關破了");
        newCurrent = {
          ...current,
          currentStage: current.currentStage + 1
        };
        UserDataService.updateUser(userId, newCurrent);
      }

      setCurrent(newCurrent);
      history.push("/");
    } else {
      alert("再想想");
    }
  };
  const handleQuit = () => {
    // alert("放棄將會重置整個任務");
    let resetCurrent = {
      currentMission: -1,
      currentStage: -1
    };
    setCurrent(resetCurrent);
    UserDataService.updateUser(userId, resetCurrent);
  };
  useEffect(() => {
    console.log(success);
    if (!authData) {
      getAuthData();
      // console.log(authData);
    }

    if (!loading) {
      // console.log(snapshot.data());
      setCurrent(snapshot.data());
      // setMissionStatus(snapshot.data());
      ///更新 userId/missoins, userId/stages
    }
  }, [loading, authData]);

  return (
    <div className="pt-14 py-20 bg-gray-100">
      <div className="text-center">
        <div className="mb-2 ">Mission List</div>

        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        {current && current.currentMission < 0 ? (
          <div className="">
            沒有進行中的任務...
            <br />
            快去主地圖看看最近的任務在哪裡吧！
          </div>
        ) : (
          <div>
            {current && (
              <div className="bg-white rounded-xl shadow m-2 p-2">
                {/* <div className="flex justify-center">
                  <MissionStatusCard />
                </div> */}
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
                {current && (
                  <button
                    onClick={handleQuit}
                    className="px-2 py-1 bg-red-400 hover:opacity-50 text-white rounded-lg m-2"
                  >
                    放棄任務
                  </button>
                )}
              </div>
            )}

            {/* 撈進行中的資料 */}
            {current && (
              <div className="bg-white rounded-xl shadow m-2 p-2">
                <div>Q</div>
                <div>
                  {
                    allPuzzles[current.currentMission].stages[
                      current.currentStage
                    ].question
                  }
                </div>
              </div>
            )}

            {current && (
              <div className="bg-white rounded-xl shadow m-2 p-2">
                <div>A</div>
                <div className="flex justify-center">
                  <input
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setAnswer(e.target.value);
                    }}
                    name="answer"
                    className="border-2 mr-2"
                    type="text"
                  />
                  <button
                    onClick={handleSubmitAnswer}
                    className="border-2 bg-funBlue hover:opacity-50 text-white rounded-lg px-2 py-1"
                  >
                    送出
                  </button>
                </div>
              </div>
            )}

            {current && (
              <div className="bg-white rounded-xl shadow m-2 p-2">
                <div>H</div>
                <div className="flex justify-center">
                  {allPuzzles[current.currentMission].stages[
                    current.currentStage
                  ].hints.map((hint, index) => {
                    return <HintCard hint={hint} index={index} />;
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMission;

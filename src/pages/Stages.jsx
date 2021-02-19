import React, { useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import UserDataService from "../services/UserService";
import allPuzzles from "../common/allPuzzles";
import { useParams } from "react-router-dom";

const Stages = (props) => {
  const userId = "guest";
  const { missionNo } = useParams();
  const missionId = "mission" + missionNo;
  const [stages, loading, error] = useCollectionData(
    UserDataService.getMissionsStagesCollection(userId, missionId),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  useEffect(() => {
    if (!loading) {
      // console.log(stages);
    }
  }, [loading]);

  return (
    <div className="pt-14 py-20 bg-gray-100">
      <div className="text-center">
        <div>Stage List</div>

        {error && <strong>Error: {error}</strong>}
        {loading && <div>Loading...</div>}

        <div className="">
          {stages &&
            stages.map((stage, index) => {
              return (
                <div
                  onClick={() => {
                    console.log(missionNo);
                  }}
                  className="shadow-sm bg-white rounded-xl p-2 m-4 flex flex-col"
                >
                  <div className="flex flex-col">
                    <div className="flex-col">
                      <div className="flex justify-center">
                        <div className="mr-2 mb-2">
                          {allPuzzles[missionNo].stages[index].name}
                        </div>
                        <div>status : {stage.status}</div>
                      </div>
                      <div className="flex text-left">
                        <div>
                          {allPuzzles[missionNo].stages[index].description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Stages;

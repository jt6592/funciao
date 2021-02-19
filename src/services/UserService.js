import firebase from "../firebase";

const db = firebase.collection("/users");

const getAll = () => {
  return db;
};

const createUser = (userId) => {
  return db.doc(userId).set({
    currentMission: -1,
    currentStage: -1
  });
};

const createUserMissions = (userId, missionId) => {
  return db.doc(userId).collection("missions").doc(missionId).set({
    status: "unfinished"
  });
};

const createUserMissionsStages = (userId, missionId, stageId) => {
  return db
    .doc(userId)
    .collection("missions")
    .doc(missionId)
    .collection("stages")
    .doc(stageId)
    .set({
      status: "unfinished"
    });
};

const updateUser = (id, value) => {
  return db.doc(id).update(value);
};

const removeUser = (id) => {
  return db.doc(id).delete();
};

const getUser = (userName) => {
  return db.doc(`${userName}`);
};

const queryUser = (userName) => {
  return db.doc(`${userName}`).get();
};

const getMissionsCollection = (userName) => {
  return db.doc(userName).collection("missions");
};

const getMissionsStagesCollection = (userName, missionId) => {
  return db
    .doc(userName)
    .collection("missions")
    .doc(missionId)
    .collection("stages");
};

const updateMissionsCollection = (userName, missionId, data) => {
  return db.doc(userName).collection("missions").doc(missionId).update(data);
};

const updateMissionsStagesCollection = (userName, missionId, stageId, data) => {
  return db
    .doc(userName)
    .collection("missions")
    .doc(missionId)
    .collection("stages")
    .doc(stageId)
    .update(data);
};

export default {
  getAll,
  getUser,
  queryUser,
  createUser,
  createUserMissions,
  createUserMissionsStages,
  updateUser,
  removeUser,
  getMissionsCollection,
  updateMissionsCollection,
  getMissionsStagesCollection,
  updateMissionsStagesCollection
};

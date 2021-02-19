import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../user/AuthContext.js";
import UserDataService from "../services/UserService";
import newUser from "../common/newUser";
import { useHistory } from "react-router-dom";
//目前兼任註冊頁

const GuidBook = () => {
  const { authData, getAuthData } = useContext(AuthContext);
  const userId = authData;
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    getAuthData();
  }, [authData]);

  return (
    <div className="pt-14 py-20 bg-gray-100 text-center">
      <div className="text-center">枋橋尋寶</div>
      <div className="shadow-sm bg-white rounded-xl p-2 m-4 flex flex-col">
        <div className="text-left mb-2">
          <span className="text-funBlue mr-2">枋橋城</span>
          是台北地區最熱鬧的城市，有數十萬的居民以及來自世界各地、各行各業的人在此貿易、旅行。
        </div>
        <div className="text-left mb-2">
          在這座城市裡，當然也有冒險者這樣的職業。
          只要登記成為冒險者，就可以觀看任務公告，領取任務。
        </div>
        <div className="text-left">
          當然囉，完成任務是有報酬的！完成所有任務後，冒險者可以前往公會領取屬於他們的酬勞！
        </div>
      </div>

      <div className="shadow-sm bg-white rounded-xl p-2 m-4 flex flex-col">
        <ul className="flex-col text-left">
          <li className="mb-2">
            <span className="text-funBlue mr-2">冒險主地圖</span>
            你可以在這裡看到所有的任務位置，並點選圖標領取任務！當你領取任務後，會顯示關卡位置。如果你已經接受任務，除非放棄任務，否則不能再接受新任務。
          </li>
          <li className="mb-2">
            <span className="text-funBlue mr-2">任務公告</span>
            你可以在這裡看到所有的任務、關卡資訊，以及目前的進行狀態。
          </li>
          <li className="mb-2">
            <span className="text-funBlue mr-2">我的任務</span>
            在這裡查看你正在執行的任務關卡，或者放棄qq。請注意，放棄任務會重置該任務紀錄。
          </li>
        </ul>
      </div>
      <div className="shadow-sm bg-white rounded-xl p-2 m-4 flex flex-col">
        <div className="mb-2">在這裡登記成為冒險者</div>
        <div>
          <input
            onBlur={(e) => {
              setInputName(e.target.value);
            }}
            className="border py-1 mr-1 rounded-lg"
            type="text"
          />
          <button
            className="bg-funBlue py-1 px-4 text-white rounded-lg transition duration-500 hover:opacity-50"
            onClick={() => {
              handleCreate(inputName);
            }}
          >
            送出
          </button>
        </div>
      </div>
    </div>
  );
};

const createUser = (userId) => {
  UserDataService.createUser(userId, newUser);
  for (let i = 0; i < 6; i++) {
    UserDataService.createUserMissions(userId, "mission" + i);
    for (let j = 0; j < 3; j++) {
      UserDataService.createUserMissionsStages(
        userId,
        "mission" + i,
        "stage" + j
      );
    }
  }
};

const checkUser = async (userId) => {
  let user = await UserDataService.queryUser(userId);
  if (user.data()) {
    return true;
  }
  return false;
};

const handleCreate = (inputName) => {
  if (!inputName) {
    return;
  }
  let userId = inputName;
  checkUser(userId)
    .then((result) => {
      if (result) {
        alert(userId + " 歡迎回來！");
      } else {
        createUser(userId);
      }
      localStorage.setItem("userId", userId);
    })
    .catch((result) => {
      console.log({ "create error": result });
    });
};

export default GuidBook;

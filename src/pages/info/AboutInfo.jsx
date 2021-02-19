import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../user/AuthContext.js";

const AboutInfo = () => {
  const { authData, getAuthData } = useContext(AuthContext);
  const userId = authData;

  useEffect(() => {
    localStorage.removeItem("userId");
    getAuthData();
  }, []);

  return (
    <div className="pt-14 py-20 ">
      <div className="shadow-sm bg-white rounded-xl p-2 m-4 flex flex-col">
        <ul className="flex flex-col">
          <li className="mb-2">
            🌞 枋橋尋寶地圖是
            <a
              className="text-funBlue"
              href="https://jing-teng.github.io/"
              target="_blank"
            >
              我（Developer）
            </a>
            和我的朋友（Designer），以及
            <a
              className="text-funBlue"
              href="https://www.facebook.com/%E6%9E%8B%E6%A9%8B%E6%96%87%E5%8C%96%E5%8D%94%E6%9C%83-200479789978964/"
              target="_blank"
            >
              枋橋文化協會（Idea）
            </a>
            共同製作的戶外實境遊戲。
            我負責產品的企劃、流程以及開發，遊戲監製由深耕在地多年、有豐富活動經驗與人文知識莊老師擔任
          </li>
          <li className="mb-2">⭐ 獲選為2020年「信義房屋-社區一家」優選作品</li>
          <li className="">
            👍 目前還是在草創階段，如果你有好點子讓他長大，歡迎你聯繫我
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutInfo;

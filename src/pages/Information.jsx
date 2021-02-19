import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../user/AuthContext.js";

const Information = () => {
  const { authData, getAuthData } = useContext(AuthContext);
  const userId = authData;

  useEffect(() => {
    localStorage.removeItem("userId");
    getAuthData();
  }, []);

  return (
    <div className="pt-14 py-20 text-center">
      <div className="mb-2">Information</div>
      <div className="flex flex-col divide-y">
        <div className="hover:shadow-sm shadow-md bg-white rounded-xl p-2 mx-4 my-2 flex flex-col">
          <Link to="/member">冒險者公會</Link>
        </div>
        <div className="hover:shadow-sm shadow-md bg-white rounded-xl p-2 mx-4 my-2 flex flex-col">
          <Link to="/fun">探索枋橋城</Link>
        </div>
        <div className="hover:shadow-sm shadow-md bg-white rounded-xl p-2 mx-4 my-2 flex flex-col">
          <Link to="/about">聯繫製作團隊</Link>
        </div>
      </div>
    </div>
  );
};

export default Information;

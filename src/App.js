import React from "react";

import "./styles.css";

import TabBar from "./layout/TabBar.jsx";
import NavBar from "./layout/NavBar.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyMap from "./pages/MyMap.jsx";
import Information from "./pages/Information.jsx";
import Missions from "./pages/Missions.jsx";
import GuildBook from "./pages/GuildBook.jsx";
import MyMission from "./pages/MyMission.jsx";
import Page404 from "./pages/Page404.jsx";
import Stages from "./pages/Stages.jsx";
import { AuthProvider } from "./user/AuthContext.js";
import AboutInfo from "./pages/info/AboutInfo.jsx";
import FunInfo from "./pages/info/FunInfo.jsx";
import MemberInfo from "./pages/info/MemberInfo.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="max-w-xl mx-auto h-screen bg-gray-100">
        <AuthProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" render={() => <MyMap />} />
              <Route exact path="/information" render={() => <Information />} />
              <Route exact path="/tutorial" render={() => <GuildBook />} />
              <Route exact path="/missions" render={() => <Missions />} />
              <Route
                exact
                path="/missions/:missionNo"
                render={() => <Stages />}
              />

              <Route exact path="/my-mission" render={() => <MyMission />} />

              <Route path="/about" exact render={() => <AboutInfo />} />
              <Route path="/member" exact render={() => <MemberInfo />} />
              <Route path="/fun" exact render={() => <FunInfo />} />
              <Route path="/*" exact render={() => <Page404 />} />
            </Switch>
            <TabBar />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;

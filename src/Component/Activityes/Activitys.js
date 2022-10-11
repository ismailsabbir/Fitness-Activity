import React, { useEffect, useState } from "react";

import "./Activitys.css";
import logo from "../../images/logo1.jpg";
import Activity from "../Activity/Activity";
import Cart from "../Cart/Cart";
const Activitys = () => {
  const [activities, setactivities] = useState([]);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setactivities(data));
  }, []);
  return (
    <div className="activites">
      <div className="header">
        <img src={logo} alt="" />
        <h1>FITNESS-ACTIVE-CENTER</h1>
      </div>
      <div className="all-container">
        <div className="activity-container">
          {activities.map((activity) => (
            <Activity activity={activity} key={activity.id}></Activity>
          ))}
        </div>
        <div className="information-container">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Activitys;

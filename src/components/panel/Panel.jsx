import React, {useState} from "react";
import Widget from "../widgets/Widget";
import './panel.css';

function Panel() {
  return (
    <div className="panel">
      <h2 className="panelTitle">Foodsie</h2>
      <div className="panelItems">
        <span className="panelItem">Popular</span>
        <span className="panelItem active">Suggested</span>
        <span className="panelItem">Extreme</span>
      </div>
      <div className="penelCover">
        <div className="panelCoverImg">
          <img src="../../assets/img/1.jpg" alt="" className="wigetItemCoverImg"/>
        </div>
        <div className="panelCoverDesc">
          <h1 className="panelCoverDescTitle">Beginner Yoga</h1>
          <div className="panelcoverDescTip">
            A relaxing 45 minute workout for beginners
          </div>
          <div className="panelCoverDescButton">
              <button className="greenBtn">Start now</button>
          </div>
        </div>
      </div>
      <div className="panelFeatures">
          <Widget />
      </div>
    </div>
  );
}

export default Panel;

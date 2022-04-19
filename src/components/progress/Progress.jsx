import React from "react";
import "./progress.css";

function Progress() {
  return (
    <div className="progress">
      <div className="progressWrapper">
        <div className="progressUser">
          <h4 className="progressUserTitle">Siavash Khani</h4>
          <img
            src="../../assets/profile.jpg"
            alt=""
            className="progressUserImg"
          />
        </div>
        <div className="progressDesc">
          <div className="progressDescTitle">You are almost there!</div>
          <p className="progressDescp">
            We picked out for you a set of meals for today to complete your
            goal!
          </p>
          <i class="ri-arrow-right-line arrow"></i>
        </div>
        <div className="progressBox">
          <div className="progressBoxTitle">Progress</div>
          <div className="progressBars">
            <div className="progressItem">
              <div className="progressInfo">
                <div className="progressInfoTitles">
                  <div className="progressInfoIcon"></div>
                  <div className="progressInfoTitle">sleep</div>
                </div>
                <div className="progressInfoNum title1">85%</div>
              </div>
              <div className="progressBar">
                <div className="barOne"></div>
              </div>
            </div>
          </div>

          <div className="progressBars">
            <div className="progressItem">
              <div className="progressInfo">
                <div className="progressInfoTitles">
                  <div className="progressInfoIcon blue"></div>
                  <div className="progressInfoTitle">Water</div>
                </div>
                <div className="progressInfoNum title2">85%</div>
              </div>
              <div className="progressBar">
                <div className="barOne blue"></div>
              </div>
            </div>
          </div>

          <div className="progressBars">
            <div className="progressItem">
              <div className="progressInfo">
                <div className="progressInfoTitles">
                  <div className="progressInfoIcon"></div>
                  <div className="progressInfoTitle">Colories</div>
                </div>
                <div className="progressInfoNum title3">85%</div>
              </div>
              <div className="progressBar">
                <div className="barOne green"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Progress;

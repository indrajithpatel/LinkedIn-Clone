import React from "react";
import "./LeftSideBar.css";

function LeftSideBar() {
  const recentItems = [
    "javascript",
    "webdevelopment",
    "programming",
    "india",
    "D3.js",
  ];
  return (
    <React.Fragment>
      <div className="leftsidebar">
        <div className="leftsidebar__profiledetails">
          <img alt="" src="https://media-exp1.licdn.com/dms/image/C4E03AQFDUILKoXRgXw/profile-displayphoto-shrink_100_100/0/1542254366268?e=1626307200&v=beta&t=kA8iXsfIrnJTObOWWdtq6z4-psLwlQBVEG73rraPvVc" />
          <a>Indrajith Patel R</a>
          <span>Frontend Lead at Informatica</span>
        </div>
        <div className="leftsidebar__stats">
          <p>Who viewed your profile</p>
          <p className="leftsidebar__statsNumber">79</p>
        </div>
        <div className="leftsidebar__stats">
          <p>Connections</p>
          <p className="leftsidebar__statsNumber">2148</p>
        </div>
      </div>

      <div className="leftsidebar__bottom">
        <p>Recent</p>
        <div className="leftsidebar__bottom__recent">
          {recentItems.map((item) => {
            return (
              <div className="leftsidebar__bottom__recent_Item">
                <span># </span>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default LeftSideBar;

import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./RightSideBar.css";

function RightSideBar() {
  return (
    <>
    <div className="rightsidebar">
      <section>
        <h1>LinkedIn News</h1>
        <InfoIcon></InfoIcon>
      </section>
      <ul>
        <li>
          <a>
            <div>
              <p>New COVID cases under 2 lakh </p>
              <span>19h ago . 2939 readers</span>
            </div>
          </a>
        </li>
        <li>
        <a>
            <div>
              <p>How WFH affects smoking Habits </p>
              <span>1h ago . 532 readers</span>
            </div>
          </a></li>
        <li>
        <a>
            <div>
              <p>Airlines say bye bye to booze</p>
              <span>12h ago . 176,076 readers</span>
            </div>
          </a></li>
        <li> <a>
            <div>
              <p>A promotion gap may be looming </p>
              <span>10h ago . 1650 readers</span>
            </div>
          </a></li>
        <li> <a>
            <div>
              <p>India's top-ranked universities</p>
              <span>22h ago . 1229 readers</span>
            </div>
          </a></li>
      </ul>
    </div>

    <div className="rightsidebar">
      <section>
        <h1>Today's top courses</h1>
        <InfoIcon></InfoIcon>
      </section>
      <ol type="1">
        <li>
          <a>
            <div>
              <p>What is Graphic Design </p>
              <span>Sean Adams</span>
            </div>
          </a>
        </li>
        <li>
        <a>
            <div>
              <p> Design Thinking: Understanding the Principles </p>
              <span>Chris Nodder</span>
            </div>
          </a></li>
        <li>
        <a>
            <div>
              <p>ACommunicating with Confidence</p>
              <span>Jeff Ansell</span>
            </div>
          </a></li>
      </ol>
    </div>
    </>
  );
}

export default RightSideBar;

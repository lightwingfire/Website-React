// import logo from './logo.svg';
import './App.css';
import './style.css';
import { mouth, registerMoveEvents } from './script';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    registerMoveEvents();
  });
  return (
    <div className="App">
      <header>
        <h1 >Jakob Coughlan</h1>
      </header>
      <div id="bg" >
        <div className="div-right">
          {/* <a href="projects.htm"> */}
          <Link to="/Projects">
            <button className="mid">&lt;= Projects</button>
          </Link>
        </div>
        <div className="div-right">
          <a href="Jakob Coughlan Resume.pdf">
            <button className="mid">Resume ={'>'}</button>
          </a>
        </div>
        <div className="jakob">
          <div>
            <div id="eye">
              <div id="eyeBall"></div>
            </div>
            <div id="eye2">
              <div id="eyeBall2"></div>
            </div>
            <img className="anim" alt="Jakob" useMap="#workmap" />

            <map name="workmap">
              <area shape="rect" coords="470,325,700,510" alt="Computer" href="#" onClick={mouth} title="Open Mouth" />
            </map>
          </div>
          <div >
            <img id="mouth" alt="mouth" useMap="#teethMap" />

            <map name="teethMap">
              <area shape="rect" coords="52,70,128,130" href="mailto:jakob.s.coughlan@gmail.com" target="_blank" alt="Email" title="Email" />
              <area shape="" coords="160,70,250,131" href="https://www.linkedin.com/in/jakobcoughlan/" target="_blank" alt="Linkedin" title="Linkedin" />
              <area shape="" coords="285,70,380,130" href="https://github.com/lightwingfire" target="_blank" alt="Github" title="Github" />
              <area shape="" coords="400,40,470,130" href="https://twitter.com/lightwing22" target="_blank" alt="Twitter" title="Twitter" />
              <area shape="" coords="500,70,590,130" href="https://www.youtube.com/channel/UCjXcP36wSpopWOkrin7fHHQ" target="_blank" alt="Youtube" title="Youtube" />
            </map>
          </div>

          <div>
            <img className="bottom" alt="jakob jaw" />
          </div>

        </div>

      </div>
    </div>

  );
}

export default App;

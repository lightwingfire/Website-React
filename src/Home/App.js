import './App.css';
import './style.css';
import { useEyeTracking } from './useEyeTracking';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [mouthOpen, setMouthOpen] = useState(false);
  const eyeStyle = useEyeTracking();
  return (
    <div className="App">
      <header>
        <h1 >Jakob Coughlan</h1>
      </header>
      <div id="bg" >
        <div className="div-right">
          <Link to="/Projects" className="mid">&lt;= Projects</Link>
        </div>
        <div className="div-right">
          <a href="/Jakob%20Coughlan%20Resume.pdf" className="mid">Resume =&gt;</a>
        </div>
        <div className="portrait-stage">
          <div className="jakob">
            <div>
              <div id="eye">
                <div id="eyeBall" style={eyeStyle}></div>
              </div>
              <div id="eye2">
                <div id="eyeBall2" style={eyeStyle}></div>
              </div>
              <div className="portrait-top">
                <img className="anim" src="/jakob-top2.png" width="1160" height="515" alt="Jakob" useMap="#workmap" />
                <img className="portrait-blink" src="/jakob-top2-closed.png" width="1160" height="515" alt="" aria-hidden="true" />
              </div>

              <map name="workmap">
                <area shape="rect" coords="470,325,700,510" alt="Toggle mouth" href="#" onClick={(event) => { event.preventDefault(); setMouthOpen((open) => !open); }} title="Toggle mouth" />
              </map>
            </div>
            <div >
              <img id="mouth" src="/mouth.png" alt="Contact and social links" useMap="#teethMap" style={{ display: mouthOpen ? 'block' : 'none' }} />

              <map name="teethMap">
                <area shape="rect" coords="52,70,128,130" href="mailto:jakob.s.coughlan@gmail.com" target="_blank" rel="noreferrer" alt="Email" title="Email" />
                <area shape="rect" coords="160,70,250,131" href="https://www.linkedin.com/in/jakobcoughlan/" target="_blank" rel="noreferrer" alt="Linkedin" title="Linkedin" />
                <area shape="rect" coords="285,70,380,130" href="https://github.com/lightwingfire" target="_blank" rel="noreferrer" alt="Github" title="Github" />
                <area shape="rect" coords="400,40,470,130" href="https://twitter.com/lightwing22" target="_blank" rel="noreferrer" alt="Twitter" title="Twitter" />
                <area shape="rect" coords="500,70,590,130" href="https://www.youtube.com/channel/UCjXcP36wSpopWOkrin7fHHQ" target="_blank" rel="noreferrer" alt="Youtube" title="Youtube" />
              </map>
            </div>

            <div className="portrait-jaw">
              <img className="jaw-frame jaw-rest" src="/jakob-bottom2.png" width="1160" height="358" alt="Jakob jaw" />
              <img className="jaw-frame jaw-middle" src="/jakob-bottom3.png" width="1160" height="358" alt="" aria-hidden="true" />
              <img className="jaw-frame jaw-deep" src="/jakob-bottom4.png" width="1160" height="358" alt="" aria-hidden="true" />
            </div>

          </div>
        </div>

      </div>
    </div>

  );
}

export default App;

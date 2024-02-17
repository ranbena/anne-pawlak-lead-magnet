import { Form } from './Form';
import {
  CheckCircleFilled,
  InstagramFilled,
  ProfileFilled,
} from '@ant-design/icons';
import Tooltip from 'antd/es/tooltip';
import AnneImage from '../assets/anne.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <div>
          <span className="links">
            <a
              href="https://smart.bio/fortunes_exploits/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Bio" color="#624dc3">
                <ProfileFilled />
              </Tooltip>
            </a>
            <a
              href="https://www.instagram.com/fortunes_exploits"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Instagram" color="#624dc3">
                <InstagramFilled />
              </Tooltip>
            </a>
          </span>
        </div>
      </header>
      <section className="main">
        <div>
          <div className="text">
            <div>
              <h1>CONTENT HOOKS FOR 2024</h1>
              <h2>50+ content starters that will make them stop scrolling</h2>
              <Form />
            </div>
          </div>
          <div className="visual" />
        </div>
      </section>
      <section className="desc">
        <div>
          <h3>
            <em>This pdf</em> is helping you if..
          </h3>
          <div className="text">
            <p>
              <CheckCircleFilled className="checkIcon" />
              ... you have an idea for online content or creative but don't know
              how to start or create an engaging beginning.
              <br />
              <br />
              Find out how what makes your followers stop scrolling, increase
              your views.
            </p>
            <p>
              <CheckCircleFilled className="checkIcon" />
              ... you are afraid that your marketing content is not powerful
              enough to get your message across with all the competition in
              2024.
              <br />
              <br />
              Find out how you can increase the number of your viewers and turn
              them into followers.
            </p>
            <p>
              <CheckCircleFilled className="checkIcon" />
              ... you have no idea how strategic use of hooks increases your
              chances of really finding out how your audience ticks so you can
              turn them into buyers.
              <br />
              <br />
              These proven hook ideas can be used for personality profiling of
              your audience.
            </p>
          </div>
        </div>
      </section>
      <section className="about">
        <div>
          <img src={AnneImage} alt="Anne Pawlak" />
          <div>
            <h3>
              Hi,
              <br />
              I’m Anne
            </h3>
            <p>
              Das Nachrichten-System von Kinnectric ersetzt SMS, Anrufe und
              Voicemail.
              <br />
              <br /> Unsere integrierten Foren werden die Art und Weise, wie du
              mit Gruppeninteressen und Diskussionen umgehen kannst, verändern.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

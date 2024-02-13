import { Form } from './Form';
import { InstagramFilled, ProfileFilled } from '@ant-design/icons';
import Tooltip from 'antd/es/tooltip';
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
          <p>
            ... you have an idea for online content or creative but don't know
            how to start or create an engaging beginning.
            <br />
            <br />
            Find out how what makes your followers stop scrolling, increase your
            views.
          </p>
          <p>
            ... you are afraid that your marketing content is not powerful
            enough to get your message across with all the competition in 2024.
            <br />
            <br />
            Find out how you can increase the number of your viewers and turn
            them into followers.
          </p>
          <p>
            ... you have no idea how strategic use of hooks increases your
            chances of really finding out how your audience ticks so you can
            turn them into buyers.
            <br />
            <br />
            These proven hook ideas can be used for personality profiling of
            your audience.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

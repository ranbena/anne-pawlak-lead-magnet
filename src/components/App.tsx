import { Form } from './Form';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="visual" />
        <div className="text">
          <div>
            <h1>Anne Pawlak</h1>
            <h2>You're in the right place</h2>
            <Form />
          </div>
          <div className="footer">
            I agree to the privacy policy and automatically register for the
            Anne Pawlak's newsletter with this submission of my email.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

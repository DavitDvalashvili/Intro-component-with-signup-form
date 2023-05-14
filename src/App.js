import "./App.css";
import Form from "./components/Form.jsx"

export default function App() {
  return (
    <div className="App">
      <div className="textBox">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="signUpBox">
        <div className="signUpPricing">
          <p><span>Try it free 7 days</span> <span>then $20/mo. thereafter</span> </p>
        </div>
        <Form/>
      </div>
    </div>
  );
}

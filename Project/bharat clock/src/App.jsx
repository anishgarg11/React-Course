import ClockHeading from "./components/Clock heading.jsx";
import ClockSlogan from "./components/ClockSlogan.jsx";
import CurrentTime from "./components/CurrentTime.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <center>
        <ClockHeading />
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </div>
  );
}

export default App;

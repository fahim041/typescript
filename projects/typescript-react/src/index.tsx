import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import User from "./classes/User";

const App = () => {
  return (
    <div>
      <User />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

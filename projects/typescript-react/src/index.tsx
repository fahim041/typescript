import ReactDOM from "react-dom";
import ReduxApp from "./redux/components/Redux";

const App = () => {
  return <ReduxApp />;
};

ReactDOM.render(<App />, document.querySelector("#root"));

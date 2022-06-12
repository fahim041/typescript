import { Provider } from "react-redux";
import { store } from "../redux_state";
import RepositoriesList from "./RepositoriesList";

const ReduxApp: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <h1>Search for a package</h1>
      <RepositoriesList />
    </Provider>
  );
};

export default ReduxApp;

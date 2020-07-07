import { createStore } from "redux";
import reducer from "../reducers";

export default function configureStore() {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}

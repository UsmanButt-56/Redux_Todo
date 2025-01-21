import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./Components/Redux/Store.js";
import { Provider } from "react-redux";
import ContextProvider from "./Components/Context/ContextProvider";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ContextProvider>
  </Provider>
);
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./i18n";
import ReactFullpage from "@fullpage/react-fullpage";
import { Toolbar } from "./toolbar/Toolbar";

interface IFullpageProps {
  children: JSX.Element;
}

const Fullpage = ({ children }: IFullpageProps) => {
  return (
    <ReactFullpage
      // scrollingSpeed={10}

      scrollHorizontally /* Because we are using the extension */
      keyboardScrolling
      licenseKey={""}
      render={() => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Toolbar />
      </div>
      {/* <Fullpage children={<App />} /> */}
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

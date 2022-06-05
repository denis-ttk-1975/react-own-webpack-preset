import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const title = "React with Webpack and Babel и Денис Редис";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();

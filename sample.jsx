// this file is sandbox of Syunsoku

import { Syunsoku } from "./Syunsoku";

/** @jsx Syunsoku.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
const container = document.getElementById("root")
// ReactDOM.render(element, container)
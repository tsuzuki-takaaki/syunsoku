import { Syunsoku } from "./syunsoku/Syunsoku"

/** @jsxRuntime classic */
/** @jsx Syunsoku.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Syunsoku</h2>
  </div>
);

const container = document.getElementById("root")
Syunsoku.render(element, container)

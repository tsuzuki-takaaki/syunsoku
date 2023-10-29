"use strict";

var _Syunsoku = require("./Syunsoku");
// this file is sandbox of Syunsoku

/** @jsx Syunsoku.createElement */
const element = _Syunsoku.Syunsoku.createElement("div", {
  id: "foo"
}, _Syunsoku.Syunsoku.createElement("a", null, "bar"), _Syunsoku.Syunsoku.createElement("b", null));
const container = document.getElementById("root");
_Syunsoku.Syunsoku.render(element, container);

import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";
const newEmojipedia = emojipedia.map(function(x) {
  return x.meaning.substring(0, 100);
});

console.log(newEmojipedia);

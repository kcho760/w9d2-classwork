// Add your import statements for View and Game here
// const Game = require("../ttt_node/game.js")
import Game from "../ttt_node/game.js";
const View = require("./ttt-view.js")

document.addEventListener("DOMContentLoaded", () => {
  let g1 = new Game()
  const figure = document.querySelector(".ttt")
  let v1 = new View(g1, figure)

  const squares = document.querySelectorAll("li")
  squares.forEach(square => {
    square.addEventListener("click",v1.handleClick.bind(v1))
  })
});

// addEventListener = (typeofevent, handler) => {
//   eventObj = new Event(typeofevent)
//   handler(eventObj)
// }

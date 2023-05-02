class View {
  constructor(game, el) {
    this.el = el
    this.game = game
    this.setupBoard()
  }
  
  setupBoard() {
    console.log(this.el)
    const ul = document.createElement("ul") // This creates a ul as a variable 
    this.el.appendChild(ul)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li")
        li.dataset.position = [i,j]
        ul.appendChild(li)
      }
    }
  }
  
  handleClick(e) {
    let square = e.target
    const pos = square.dataset.position
    let new_arr = []
    for (let i = 0; i < pos.length; i++) {
      if (pos[i] !== ",") {
        new_arr.push(parseInt(pos[i]));
      }
    }
    console.log(new_arr)
    this.game.playMove(new_arr)
  }

  makeMove(square) {
    
  }
  
  handleGameOver() {
  }
}

module.exports= View
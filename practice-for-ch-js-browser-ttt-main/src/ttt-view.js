class View {
  constructor(game, el) {
    this.el = el
    this.game = game 
  }
  
  setupBoard() {
    // console.log(this.el)
    const ul = document.createElement("ul") // This creates a ul as a variable 
    this.el.appendChild(ul)
    for (let i = 0; i < 9; i++) {
      let li = document.createElement("li")
      ul.appendChild(li)
    }
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

module.exports= View
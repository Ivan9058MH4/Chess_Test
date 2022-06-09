function sayHi () {
  alert('hello chess')
}
sayHi()
let chess = document.createElement("chess")
for (let x = 0; x < 8; x++) {
let tr = document.createElement("tr")
for (let y = 0; y < 8; y++) {
  let td = document.createElement("td")
  td.width = 50
  td.height = 50
  td.bgColor = (x + y) % 2 ? "black" : "blue"
  tr.appendChild(td)
}
chess.appendChild(tr)
}
document.body.appendChild(chess) 
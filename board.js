function sayHi () {
    alert('Привет, юный Карпов!!!')
}
sayHi()
var chess = document.createElement("chess")
for (var x = 0; x < 8; x++) {
  var tr = document.createElement("tr")
  for (var y = 0; y < 8; y++) {
    var td = document.createElement("td")
    td.width = 50
    td.height = 50
    td.bgColor = (x + y) % 2 ? "black" : "blue"
    tr.appendChild(td)
  }
  chess.appendChild(tr)
}
document.body.appendChild(chess)
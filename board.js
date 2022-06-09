function sayHi () {
  alert('Please, click OK to start')
}
sayHi()
let table = document.createElement("table")
for (let x = 0; x < 8; x++) {
let tr = document.createElement("tr")
for (let y = 0; y < 8; y++) {
  let td = document.createElement("td")
  td.width = 50
  td.height = 50
  td.bgColor = (x + y) % 2 ? "black" : "LightYellow"
  tr.appendChild(td)
}
table.appendChild(tr)
}
document.body.appendChild(table) 
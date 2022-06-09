//function sayHi () {
  //alert('Please, click OK to start')
//}
//sayHi()
let table = document.createElement("table")
for (let x = 0; x < 8; x++) {
let row = document.createElement("tr")
for (let y = 0; y < 8; y++) {
  let td = document.createElement("td")
  row.appendChild(td)
}
table.appendChild(row)
}
document.body.appendChild(table) 
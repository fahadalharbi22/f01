var names = ["Fahad Sultan Al-Harbi", "Salem Fawaz Al-Balawi", "Maher Mohammed Al-Atwi", "Abdulaziz Majid Al-Ghamdi"];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
var shuffledNames = shuffleArray(names);


var tbody = document.querySelector("#nameTable tbody");


tbody.innerHTML = "";


shuffledNames.forEach(function (name) {
  var row = document.createElement("tr");
  var cell = document.createElement("td");
  cell.textContent = name;
  row.appendChild(cell);
  tbody.appendChild(row);
});
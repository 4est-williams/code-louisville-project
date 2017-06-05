let html = "";
let message = "";
let pick;

//pick a random number that is the length of the array
function randomNumber() {
  pick = Math.floor(Math.random() * parkList.length);
}

//this function is to pull the information from the array and write it to the document
function print() {
  message += "<h2>" + parkList[pick].name + "</h2>" + parkList[pick].picture + "<p>" + parkList[pick].description + "</p>";
  document.write(message);
}

randomNumber();
print();

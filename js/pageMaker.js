let message = '';


//this is a function called the Fisher-Yates shuffle.
//it takes all of the items in parkList and randomizes order in order to make the webpage more interesting
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

randomParkList = shuffle(parkList);

for (var i = 0; i < parkList.length; i++) {
  if (randomParkList[i][activePage] != undefined) {
    message += "<h2>" + randomParkList[i].name + "</h2>" + randomParkList[i].picture + "<p>" + randomParkList[i][activePage] + "</p>";
  } else {
  }
}

document.write(message);

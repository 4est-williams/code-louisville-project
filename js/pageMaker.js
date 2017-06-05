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

const randomParkList = shuffle(parkList);

for (var i = 0; i < randomParkList.length; i++) {
  if (randomParkList[i][activePage] != undefined) {
    message += '<div class="'+randomParkList[i].className + '">';
    message += "<h2>" + randomParkList[i].name + "</h2>";
    message += randomParkList[i].picture;
    message += "<p>" + randomParkList[i][activePage] + "</p>";
    message += '</div>';
  } else {
  }
}

document.write(message);

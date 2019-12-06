export function makingNumberFunction(resultArray, checkArray) {
  for (var i = 0; i < 5; i++) {
    resultArray[i] = [];
    while (resultArray[i].length < 5) {
      var num = Math.floor(Math.random() * 25) + 1;
      var hasNumber = true;
      for (var j = 0; j < checkArray.length; j++) {
        if (checkArray[j] === num) {
          hasNumber = false;
        }
      }
      if (hasNumber) {
        resultArray[i].push(num);
        checkArray.push(num);
      }
    }
  }
}

export function makingBingoFunction(bingoArray, answerArray) {
  for (var i = 0; i < bingoArray.length; i++) {
    answerArray.push(bingoArray[i]);
  }
  for (var a = 0; a < bingoArray.length; a++) {
    var verticalAnswer = [];
    for (var j = 0; j < bingoArray.length; j++) {
      verticalAnswer.push(bingoArray[j][a]);
    }
    answerArray.push(verticalAnswer);
  }
  var diagonal1 = [];
  var diagonal2 = [];
  for (var b = 0; b < bingoArray.length; b++) {
    for (var c = 0; c < bingoArray[b].length; c++) {
      if (b === c) diagonal1.push(bingoArray[c][b]);
      if (b + c === 4) diagonal2.push(bingoArray[c][b]);
    }
  }
  answerArray.push(diagonal1);
  answerArray.push(diagonal2);
}

export function checkingBingoFunction(clickedNumber, answerArray) {
  var isComplete = [];
  for (var i = 0; i < answerArray.length; i++) {
    var answerCount = 0;
    for (var j = 0; j < answerArray[i].length; j++) {
      for (var k = 0; k < clickedNumber.length; k++) {
        if (answerArray[i][j] === clickedNumber[k]) answerCount++;
      }
    }

    if (answerCount === answerArray[i].length) {
      isComplete.push(i);
    }
  }
  return isComplete;
}

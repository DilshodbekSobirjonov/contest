
    class CreateBox {
      constructor(boxNumber, boxPercent, quizName, quizAnswer) {
        this.boxNumber = boxNumber;
        this.boxPercent = boxPercent;
        this.quizName = quizName;
        this.quizAnswer = quizAnswer;
      }
    }

    const boxs = [
      new CreateBox('12', '30%', 'sonlar', 'jpdweio'),
      new CreateBox('13', '50%', 'raqamlar', 'jpd54724554weio'),
      new CreateBox('14', '70%', 'sonlar', 'jpdw52547547eio'),
      new CreateBox('13', '70%', 'sonlar', 'jpdweio'),
      new CreateBox('14', '70%', 'sonlar', 'jpdw6547557ei565652654o'),
      new CreateBox('1345', '70%', 'sonlar', 'jpdweio'),
      new CreateBox('1142', '70%', 'sonlar', 'jpd2564362weio'),
      new CreateBox('14143', '70%', 'sonlar', 'jpdweio'),
    ];

    function CreateElement(boxArray) {
      for (let i = 0; i < boxArray.length; i++) {
        var boxF = document.createElement('div');
        boxF.classList.add('box');

        var mainBox = document.createElement('div');
        mainBox.classList.add('box-main');

        var divLength = document.createElement('div');
        divLength.classList.add('box-length');
        divLength.textContent = boxArray[i].boxNumber;

        var divPercent = document.createElement('div');
        divPercent.classList.add('box-percent');
        divPercent.textContent = boxArray[i].boxPercent;

        var quizBox = document.createElement('div');
        quizBox.classList.add('quiz-name');
        quizBox.textContent = boxArray[i].quizName;

        var frontBox = document.createElement('div');
        frontBox.classList.add('box-front');

        var frontText = document.createElement('div');
        frontText.classList.add('front-text');
        frontText.textContent = 'masala javobi';

        var frontAnswer = document.createElement('div');
        frontAnswer.classList.add('quiz-answer');
        frontAnswer.textContent = boxArray[i].quizAnswer;

        mainBox.appendChild(divLength);
        mainBox.appendChild(divPercent);
        mainBox.appendChild(quizBox);

        frontBox.appendChild(frontText);
        frontBox.appendChild(frontAnswer);

        boxF.appendChild(mainBox);
        boxF.appendChild(frontBox);

        section.appendChild(boxF);
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
  	let section = document.querySelector('#section');
  	CreateElement(boxs);
});

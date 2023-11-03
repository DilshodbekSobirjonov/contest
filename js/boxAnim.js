document.addEventListener('DOMContentLoaded', function() {
  let boxes = document.querySelectorAll('.box');
  let boxMains = document.querySelectorAll('.box-main');
  let boxFronts = document.querySelectorAll('.box-front');

  console.log(boxFronts);

  document.addEventListener('click', function(event) {
    for (let i = 0; i < boxes.length; i++) {
      if (
        event.target.closest('.box') === boxes[i] ||
        event.target.closest('.box-main') === boxMains[i] ||
        event.target.closest('.box-front') === boxFronts[i]
      ) {
        boxes[i].classList.toggle('box-active');
        boxMains[i].classList.toggle('box-main-active');
        boxFronts[i].classList.toggle('box-front-active');
      }
    }
  });
});

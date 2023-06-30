// const copyAlert = document.querySelector('.copied');
// const copyCode = document.querySelectorAll('.code');

// copyCode.forEach((code) => {
//   code.querySelector('button').addEventListener('click', function(){
//     let inputValue = document.querySelector('input.code__content');

//     console.log(inputValue);

//     inputValue.select();

//     document.execCommand('copy');
//     copyAlert.classList.add('show');
//     setTimeout(() => {
//       copyAlert.classList.remove('show');
//     }, 2500);
//   })
// })


const parrent = [...document.querySelectorAll('.code')];
const infoLabel = document.querySelector('.copied');

const infoShow = function(el){
  el.classList.add('show');

  setTimeout(function(){
    el.classList.remove('show')
  }, 1500)
}

function copyFunction(textInput) {
  textInput.select();
  document.execCommand("copy");
  infoShow(infoLabel);
}

parrent.map(function(item){
  const currentInput =  item.querySelector('.code__content');
  const currentButton =  item.querySelector('.code__btn');

  currentButton && currentButton.addEventListener('click', () => copyFunction(currentInput));
});





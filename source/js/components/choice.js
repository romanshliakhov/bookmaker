document.addEventListener('DOMContentLoaded', function(){
  const categories = document.querySelector('.categories');
const categoriesTrigger = categories.querySelector('.categories__head');
const categoriesList = categories.querySelector('.categories__body');
const tagsParrent = document.querySelector('.categories__choosed');

function categoriesActiveClass(toggleElement, targetElement, activeClass = 'active') {
  document.addEventListener("click", function (event) {
    if (!targetElement.contains(event.target) && event.target !== toggleElement) {
      targetElement.classList.remove(activeClass);
    } else if (event.target === toggleElement) {
      targetElement.classList.toggle(activeClass);
    }
  });
}

categoriesActiveClass(categoriesTrigger, categoriesList);
// const categoriesOptions = categories.querySelectorAll('.categories__option');

// categoriesOptions.forEach(item => {
//   const checkbox = categories.querySelector('.categories__checkbox');
//   const checkboxValue = categories.querySelector('.categories__checkbox-name');

//   item.addEventListener('change', function(e) {
//     if (checkbox.checked == true) {
//       console.log('checked');

//       const optionsName = checkboxValue.innerText;

//       console.log(optionsName);
//     } else {
//       console.log('no checked');
//     }


//     // console.log(checkbox);
//     // console.log(checkboxValue);
//   })

//   // console.log(item);
// })

  const categoryCheckbox = categories.querySelectorAll('.categories__checkbox');
  const inputData = [];

  categoryCheckbox.forEach(function(item) {
    item.addEventListener('click', function(e){

      checkedHandler(this);
    })
  });

  function checkedHandler(input) {
    const inputValue = input.value;
    const inputName = input.getAttribute('data-name');
    const inputIndex = inputData.findIndex(obj => obj.value === inputValue);

    if (inputIndex !== -1) {
      inputData.splice(inputIndex, 1);

    } else {
      inputData.push({
        value: inputValue,
        name: inputName
      });
    }

    createTagList(tagsParrent, inputData);
  }

  function createTagList(parrent, data) {
    parrent.innerHTML = '';


    data.forEach(obj => {
      const markup = `
        <li class="categories__choose" data-value="${obj.value}">
          <span class="categories__choose-name">${obj.name}</span>
          <span class="categories__choose-delete" data-id="${obj.value}">
            <svg width='24' height='24'>
              <use href='img/sprite/sprite.svg#close'></use>
            </svg>
          </span>
        </li>
      `;

      parrent.insertAdjacentHTML('afterbegin', markup);
    });

    removeTag(parrent);
  }

  function removeTag(parrent) {
    const removeTagBtns =  parrent.querySelectorAll('.categories__choose-delete');

    removeTagBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();

        const currentBtnId = this.getAttribute('data-id');
        const inputIndex = inputData.findIndex(obj => obj.value === currentBtnId);

        if (inputIndex !== -1) {
          inputData.splice(inputIndex, 1);

          // document.querySelectorAll('.categories__checkbox')[inputIndex];

          document.querySelector(`.categories__checkbox[value='${currentBtnId}']`).checked = false;
        }

        createTagList(tagsParrent, inputData);
      })
    })
  }

})

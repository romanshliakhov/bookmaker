// Select
let selects = document.querySelectorAll('.access__variant-choose');

let selectScript = function (select) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".access__variant-current");

    item.addEventListener("click", (event) => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        if (el === "choosen" && selectCurrent.innerHTML !== text) {
            selectCurrent.innerText = text;
        }

        item.classList.toggle("is-active");
    });
    document.addEventListener("click", function (event) {
        if (!item.contains(event.target)) {
          item.classList.remove("is-active");
        }
    });
  });
}

selectScript(selects);


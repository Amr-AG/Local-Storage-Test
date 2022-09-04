let bord = document.querySelector(" .bord");
let switchlist = document.querySelectorAll(".switcher li");

if (window.localStorage.getItem("color")) {
  // [1] change backgroundcolor bord by lockalStorage Set
  bord.style.backgroundColor = window.localStorage.getItem("color");
  bord.style.transition = "1.5s";

  // [2] Remove Active From All lis
  switchlist.forEach((e) => {
    e.classList.remove("active");
  });

  // [3] Add Active To Selected li from LocalStorage
  document
    .querySelector(`[data-name="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

switchlist.forEach((li) => {
  li.addEventListener("click", (e) => {
    switchlist.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (li.classList.contains("active")) {
      bord.style.transition = "1.5s";
      bord.style.backgroundColor = e.currentTarget.dataset.name;
    }

    // Set Color in LocaleStorage
    window.localStorage.setItem("color", e.currentTarget.dataset.name);
  });
});

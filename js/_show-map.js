import { darkVeil } from "./_dark-veil";

export function initShowMap() {
  let btnShowMap = document.querySelector(".js-show-map");
  let mapMini = document.querySelector(".js-map-mini");

  btnShowMap.addEventListener("mouseenter", () => {
    mapMini.classList.add("--active");
  });

  // Если не по iframe щелчок то скрываем
  document.addEventListener("click", function (e) {
    mapMini.classList.remove("--active");
  });

  btnShowMap.addEventListener("click", function (e) {
    // Закрываем маленькую
    mapMini.classList.remove("--active");
    // Открываем плёнку и разворачиваем карту
    darkVeil.classList.add("--active");
    mapMini.classList.add("--active-full");
  });

  darkVeil.addEventListener("click", function (e) {
    mapMini.classList.remove("--active-full");
    darkVeil.classList.remove("--active");
  });
}
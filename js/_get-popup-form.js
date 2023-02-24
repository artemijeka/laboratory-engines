import { darkVeil } from "./_dark-veil";

export function initGetPopupForm() {
  let btnGetPopup = document.querySelector(".js-get-popup-form");
  let popupForm = document.querySelector(".js-popup-form");
  let popupFormClose = popupForm.querySelector(".js-popup-form-close");
  let popupFormPhone = popupForm.querySelector(".js-popup-form-phone");

  let popupFormSubmit = popupForm.querySelector(".js-popup-form-submit");
  let phoneYes = false;

  let popupFormCheckbox = popupForm.querySelector(".js-popup-form-checkbox");
  let checked = false;

  btnGetPopup.addEventListener("click", function (e) {
    darkVeil.classList.add("--active", "--no-x");
    popupForm.classList.add("--active");
    // refreshBtnSubmit();
  });

  [darkVeil, popupFormClose].forEach((btCl) => {
    btCl.addEventListener("click", function (e) {
      popupForm.classList.remove("--active");
      darkVeil.classList.remove("--active", "--no-x");
    });
  });

  popupFormCheckbox.addEventListener("click", function (e) {
    // refreshBtnSubmit();
  });

  popupFormPhone.addEventListener("input", function (e) {
    // refreshBtnSubmit();
  });

  function refreshBtnSubmit() {
    checked = popupFormCheckbox.checked;
    // phoneYes = checkPhoneYes();

    // if (phoneYes && checked) {
    //   popupFormSubmit.classList.remove("--disabled");
    // } else {
    //   popupFormSubmit.classList.add("--disabled");
    // }
  }

  // function checkPhoneYes() {
  //   if (popupFormPhone.value.length !== 18 || popupFormPhone.value.length !== 19) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}

("use strict");

import { initMinicontactsTime } from "./_minicontacts-time";
import { initShowMap } from "./_show-map";
import { initGetPopupForm } from "./_get-popup-form";
import { phoneMask } from "./libs/_phone-mask";

document.addEventListener("DOMContentLoaded", function () {
  try {
    initMinicontactsTime();
  } catch (err) {
    console.error("TRY-CATCH ERROR: minicontactsTime", err);
  }

  try {
    initShowMap();
  } catch (err) {
    console.error("TRY-CATCH ERROR: initShowMap", err);
  }

  try {
    initGetPopupForm();
  } catch (err) {
    console.error("TRY-CATCH ERROR: initGetPopupForm", err);
  }

  try {
    phoneMask('input[type=tel]');
  } catch (err) {
    console.error("TRY-CATCH ERROR: phoneMask", err);
  }
});

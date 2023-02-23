export function minicontactsTime() {
  let mct = document.querySelector(".minicontacts__time");
  let comHours = mct.dataset.hours;
  let comTimezone = mct.dataset.timezone;
  let comDays = mct.dataset.days;

  let opened = true;

  let curDay = new Date().getDay();
  if (comDays.split("-")[0] < curDay && comDays.split("-")[1] > curDay) {
    const dtf = Intl.DateTimeFormat("ru", {
      timeZone: comTimezone,
      hour: "numeric",
      hour12: false,
    });
    let curHour = dtf.format();

    if (curHour >= comHours.split("-")[0] && comHours.split("-")[1] > curHour) {
      opened = true;
    } else {
      opened = false;
    }
  } else {
    opened = false;
  }

  if (opened) {
    mct.classList.add("--opened");
  } else {
    mct.classList.remove("--opened");
  }
}

/**
 * Phone input mask | Маска ввода телефона
 * @author  https://codesandbox.io/s/ylvn0?file=/src/index.js
 * @author  web.master-artem.ru
 * @version 1.2 - 17.02.2023
 * @source (cacher) https://snippets.cacher.io/snippet/bb6b9c623872bb343fbd
 * @source (gist) https://gist.github.com/artemijeka/06fe9f88614253212814f6f4fb533a5e
 *
 * @param { String || Node } sonoan - Selector of phone input OR Node
 **/
export function phoneMask(sonoan) {
  let phoneInputAll = [];

  if (typeof sonoan === "string") {
    phoneInputAll = document.querySelectorAll(sonoan);
  } else if (typeof sonoan === "object") {
    // console.log("typeof sonoan");
    // console.log(typeof sonoan);
    phoneInputAll[0] = sonoan;
  }

  // console.log('phoneInputAll');
  // console.log(phoneInputAll);

  const prefixNumber = (str) => {
    if (str === "7") {
      return "7 (";
    }
    if (str === "8") {
      return "8 (";
    }
    if (str === "9") {
      return "7 (9";
    }
    return "7 (";
  };

  phoneInputAll.forEach(function (phoneInput) {
    // console.log('phoneInput')
    // console.log(phoneInput)
    phoneInput.addEventListener("blur", () => {
      if (phoneInput.value.length != 18) {
        phoneInput.value = "";
      }
    });

    phoneInput.addEventListener("input", (e) => {
      const value = phoneInput.value.replace(/\D+/g, "");
      const numberLength = 11;

      let result;
      if (phoneInput.value.includes("+8") || phoneInput.value[0] === "8") {
        result = "";
      } else {
        result = "+";
      }

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ") ";
            break;
          case 7:
            result += "-";
            break;
          case 9:
            result += "-";
            break;
          default:
            break;
        }
        result += value[i];
      }

      phoneInput.value = result;
    });
  });
}

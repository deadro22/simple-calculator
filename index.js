import calcButtonsContent from "./calc.def.js";

const controlsContainer = document.getElementsByClassName("calc-controls")[0];
const calcDisplay = document.getElementById("opr_scr_disp");
const calcRes = document.getElementById("opr_scr_res");
const btnCount = 19;
const maxNumLength = 11;

let calcResNum = null;
let prevSign = "";
let eqS = false;
let dotsCount = 0;

const calculateOnSign = (sign, b) => {
  switch (sign) {
    case "+":
      calcResNum += b;
      break;
    case "-":
      calcResNum -= b;
      break;
    case "x":
      calcResNum *= b;
      break;
    case "÷":
      calcResNum /= b;
      break;
    case "%":
      calcResNum %= b;
      break;
  }
};

const makeSignHtml = (ct) => {
  return `<span>${ct}</span>`;
};

for (let i = 0; i <= btnCount; i++) {
  const elem = document.createElement("button");
  elem.textContent = calcButtonsContent[i].content;
  elem.style.color = calcButtonsContent[i].color;
  elem.addEventListener("click", (ev) => {
    const btnConf = calcButtonsContent[i];
    if (btnConf.op && typeof btnConf.op === "function") {
      if (btnConf.content === "AC") {
        calcResNum = null;
        eqS = false;
        prevSign = "";
      } else if (btnConf.content === "C") {
        dotsCount = 0;
      }
      btnConf.op(ev, calcRes.textContent);
    } else {
      if (calcRes.textContent.length <= maxNumLength) {
        if (btnConf.t_op) {
          if (btnConf.content === "=") {
            calculateOnSign(prevSign, Number(calcRes.innerHTML));
            eqS = true;
            dotsCount = 0;
            calcDisplay.innerHTML += calcRes.innerHTML;
            calcRes.innerHTML = calcResNum;
            prevSign = "=";
          } else {
            calcDisplay.innerHTML +=
              calcRes.innerHTML + makeSignHtml(btnConf.content);
            dotsCount = 0;
            if (prevSign === "=") {
              calcResNum = Number(calcRes.innerHTML);
              calcDisplay.innerHTML =
                calcRes.innerHTML + makeSignHtml(btnConf.content);
            }

            if (calcResNum) {
              if (!eqS) {
                calculateOnSign(prevSign, Number(calcRes.innerHTML));
                console.log(calcResNum);
              }
            } else {
              calcResNum = Number(calcRes.innerHTML);
            }
            prevSign = btnConf.content;
            calcRes.innerHTML = "";
          }
        } else {
          if (btnConf.content === ".") {
            dotsCount++;
            if (dotsCount <= 1) {
              calcRes.innerHTML += btnConf.content;
            }
          } else {
            calcRes.innerHTML += btnConf.content;
          }
        }
      }
    }
  });
  controlsContainer.appendChild(elem);
}

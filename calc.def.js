const clearScreen = (ev) => {
  document.getElementById("opr_scr_disp").innerText = "";
  document.getElementById("opr_scr_res").innerText = "";
};

const clearRes = (ev) => {
  document.getElementById("opr_scr_res").innerHTML = "";
};

const addSignMP = (ev, tc) => {
  let f;
  if (tc[0] === "-") {
    f = tc.replace("-", "");
  } else {
    f = "-" + tc;
  }

  document.getElementById("opr_scr_res").innerHTML = f;
};

const calcButtonsContent = [
  { content: "AC", color: "cyan", op: clearScreen },
  { content: "+/-", color: "cyan", op: addSignMP },
  { content: "%", color: "cyan", t_op: true },
  { content: "÷", color: "rgb(209, 81, 81)", t_op: true },
  { content: "7", color: "" },
  { content: "8", color: "" },
  { content: "9", color: "" },
  { content: "x", color: "rgb(209, 81, 81)", t_op: true },
  { content: "4", color: "" },
  { content: "5", color: "" },
  { content: "6", color: "" },
  { content: "-", color: "rgb(209, 81, 81)", t_op: true },
  { content: "1", color: "" },
  { content: "2", color: "" },
  { content: "3", color: "" },
  { content: "+", color: "rgb(209, 81, 81)", t_op: true },
  { content: "C", color: "", op: clearRes },
  { content: "0", color: "" },
  { content: ".", color: "" },
  { content: "=", color: "rgb(209, 81, 81)", t_op: true },
];

export default calcButtonsContent;

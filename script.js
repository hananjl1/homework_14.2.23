let theStyles = {
  fontfamilies: {
    fontFamily1: "monospace",
    fontFamily2: "arial",
  },
  fontColors: {
    fontColor1: "red",
    fontColor2: "blue",
  },
};

function textChanger() {
  document.getElementById("p1").innerHTML = "New text!";
}

// Change Font
function fontMonospace() {
  document.getElementById("p1").style.fontFamily =
    theStyles.fontfamilies.fontFamily1;
}
function fontArial() {
  document.getElementById("p1").style.fontFamily =
    theStyles.fontfamilies.fontFamily2;
}
function fontLarger() {
  document.getElementById("p1").style.fontSize = "20px";
}
function fontSmaller() {
  document.getElementById("p1").style.fontSize = "10px";
}
function fontRed() {
  document.getElementById("p1").style.color = theStyles.fontColors.fontColor1;
}
function fontBlue() {
  document.getElementById("p1").style.color = theStyles.fontColors.fontColor2;
}

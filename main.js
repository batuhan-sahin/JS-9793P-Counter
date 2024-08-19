let num = 0;

function increaseCounter() {
  document.getElementById("counter").style.color = "#f44336";
  num++;
  document.getElementById("counter").innerHTML = num;
}

function reset() {
  num = 0;
  document.getElementById("counter").innerHTML = num;
  document.getElementById("counter").style.color = "#47b247";
}

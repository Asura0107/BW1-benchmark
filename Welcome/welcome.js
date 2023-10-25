const doublecheck = function () {
  const btn = document.getElementById("proceed-button");
  const check = document.getElementById("check");

  btn.disabled = true;

  check.addEventListener("change", function () {
    // se la check cambia allora il mio btn da inizialmente disabled diventa enabled, altrimenti rimane disabled
    btn.disabled = !check.checked;
  });
};

window.onload = function () {
  doublecheck();
};

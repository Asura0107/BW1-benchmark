let checkbox = document.querySelector("input[id=check]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});

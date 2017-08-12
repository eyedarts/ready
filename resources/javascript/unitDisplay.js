// Check and set display value of site blocks

function unitDisplay(unitNumber) {
  unitNumber = "unit" + unitNumber;
  var img = document.getElementById(unitNumber);

  if (img.style.display == "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }

}

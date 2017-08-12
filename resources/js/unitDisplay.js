// Check and set display value of site blocks

function unitDisplay(unitNumber) {
  unitNumber = "unit" + unitNumber;
    var unitBox = document.getElementById(unitNumber);
    
  if (unitBox.style.display == "" || unitBox.style.display == "none") {
    unitBox.style.display = "flex";
    
  } else {
    unitBox.style.display = "none";
  }

}

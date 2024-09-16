function toggleVisibility(id, element) {
  var content = document.getElementById(id);
  var toggleState = element.getAttribute("data-toggle");

  // Toggle content visibility
  if (content.style.display === "none") {
    content.style.display = "block";
    element.setAttribute("data-toggle", "minus");
    element.querySelector("span").innerText = "-";
  } else {
    content.style.display = "none";
    element.setAttribute("data-toggle", "plus");
    element.querySelector("span").innerText = "+";
  }
}

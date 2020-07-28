function displaySection(isLong) {
  let longSection = document.getElementById("long_version");
  let longButton = document.getElementById("long_button");
  let shortSection = document.getElementById("short_version");
  let shortButton = document.getElementById("short_button");

  longSection.style.display = isLong ? "block" : "none";
  longButton.style.fontWeight = isLong ? "bold" : "normal";
  shortSection.style.display = isLong ? "none" : "block";
  shortButton.style.fontWeight = isLong ? "normal" : "bold";
}

function dropDown() {
  let navbar = document.getElementById("navbar");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

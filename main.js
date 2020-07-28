function displaySection(isLong) {
  let longSection = document.getElementById("long_version");
  let shortSection = document.getElementById("short_version");

  longSection.style.display = isLong ? "block" : "none";
  shortSection.style.display = isLong ? "none" : "block";
}

document.getElementById("profileButton").addEventListener("click", function () {
  const profile = document.getElementById("profile");
  if (profile.style.display === "block") {
    profile.style.display = "none";
  } else {
    profile.style.display = "block";
  }
});

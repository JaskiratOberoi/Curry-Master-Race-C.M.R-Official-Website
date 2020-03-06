let spotifyPanel = document.getElementById("spotify"),
  spotifyButton = document.getElementById("spotify-btn");

spotifyButton.addEventListener(
  "click",
  function() {
    spotifyPanel.classList.toggle("hidden");
  },
  false
);

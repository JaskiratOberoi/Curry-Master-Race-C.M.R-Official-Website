let spotifyPanel = document.getElementById("spotify"),
  spotifyButton = document.getElementById("spotify-btn"),
  redditPanel = document.getElementById("reddit"),
  redditButton = document.getElementById("reddit-btn");

spotifyButton.addEventListener(
  "click",
  function() {
    spotifyPanel.classList.toggle("hidden");
  },
  false
);

// redditButton.addEventListener(
//   "click",
//   function() {
//     redditPanel.classList.toggle("hidden");
//   },
//   false
// );

const follow = document.getElementById("follow");

follow.addEventListener("click", () => {
  follow.textContent = follow.textContent === "Follow" ? "Following" : "Follow";
});
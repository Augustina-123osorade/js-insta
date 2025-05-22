export function toggleLike() {
    // Select all elements with the "like-button" class
  document.querySelectorAll(".like-button").forEach((btn) => {
    // Add a click event to each button
    btn.addEventListener("click", () => {
        // Select the heart path inside the button
      const heart = btn.querySelector(".heart-icon");
      // Check if the heart is currently liked (filled red)
      const isLiked = heart.getAttribute("fill") === "red";

      if (isLiked) {
        // If already liked, set it back to unliked state (no fill, gray stroke)
        heart.setAttribute("fill", "none");
        heart.setAttribute("stroke", "gray"); // stroke goes back to gray
      } else {
        // If not liked, set both fill and stroke to red
        heart.setAttribute("fill", "red");
        heart.setAttribute("stroke", "red"); // stroke turns red on like 
      }
    });
  });
}
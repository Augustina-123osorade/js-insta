import { cardData } from "./cardData.js";
import { renderCards } from "./renderCards.js";
import { toggleLike } from "./toggleLike.js";
import { addCopyright } from "./copyright.js";
import { formModal } from "./formModal.js";
import { createRightContainer } from "./newPost.js";

// Call the function to render the cards into the section with ID "bodyPart"
renderCards(cardData);

// Attach event listeners to like buttons so they respond when clicked
toggleLike();

//Call the function to add the copyright to footer
addCopyright();

//New Post Button
createRightContainer();

// Form modal
formModal();

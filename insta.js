import { cardData } from './cardData.js';
import { renderCards } from './renderCards.js';
import { toggleLike } from './toggleLike.js';
import { addCopyright } from './copyright.js';

// Call the function to render the cards into the section with ID "bodyPart"
renderCards(cardData);

// Attach event listeners to like buttons so they respond when clicked
toggleLike();
addCopyright();
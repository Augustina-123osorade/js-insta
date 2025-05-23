// This function creates and inserts the card elements into the DOM using the cardData
// It accepts the data array and the ID of the container where cards will be inserted.

export function renderCards(cardData) {
  // Get the parent container from the DOM where cards will be appended
  const section = document.getElementById("bodyPart");
  
  //passing the arrow function into .forEach() to use during the loop.
 // Loop through each card data item

  cardData.forEach((item, index) => {
    // Create a div for each card
    const container = document.createElement("div");
    container.className = "card-component";
    container.id = `${
      ["first", "second", "third", "fourth", "fifth", "sixth"][index]
    }Section_1a`;

    // Create an image element and set its attributes

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.alt;

    const cardDataDiv = document.createElement("div");
    cardDataDiv.className = "card-data";
    cardDataDiv.id = `${
      ["first", "second", "third", "fourth", "fifth", "sixth"][index]
    }Section_1b`;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.title;

    const button = document.createElement("button");
    button.className = "like-button";
    button.innerHTML = `
    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <g id="Like Icon">
        <path id="Union"
          d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
          class="heart-icon"  stroke-width="2" />
      </g>
    </svg>
    <span class="sr-only">Like Button</span>
  `;

    cardDataDiv.appendChild(paragraph);
    cardDataDiv.appendChild(button);
    container.appendChild(img);
    container.appendChild(cardDataDiv);

    section.appendChild(container);
  });
}
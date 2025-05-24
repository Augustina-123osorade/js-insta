export function createRightContainer() {
    const header = document.querySelector("header");

  const button = document.createElement("button");
  button.id = "right_container";
  button.classList.add("modal-btn");

  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = "./assets/plus.png";
  img.alt = "Plus Icon";
  img.id = "plusIcon";
  imgDiv.appendChild(img);

  const textDiv = document.createElement("div");
  const paragraph = document.createElement("p");
  paragraph.textContent = "New Post";
  textDiv.appendChild(paragraph);

  button.appendChild(imgDiv);
  button.appendChild(textDiv);
  header.appendChild(button);
};
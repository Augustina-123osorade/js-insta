export function formModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  const btn = document.querySelector(".modal-btn");

  // Handle modal open
  btn.addEventListener("click", function () {
    modalOverlay.innerHTML = ""; // Clear previous modal content
    modalOverlay.classList.add("open-modal");

    // Modal container
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-container");
    modalDiv.innerHTML = `<button class="close-btn"><i class="fas fa-times"></i></button>`;

    // HTML form inside the modal
    const formModal = document.createElement("form");
    formModal.setAttribute("action", "/submit");
    formModal.setAttribute("method", "POST");
    formModal.setAttribute("class", "modal-form");

    const modalHeader = document.createElement("p");
    modalHeader.textContent = "Image Upload Form";

    const imageTitle = document.createElement("div");
    imageTitle.classList.add("form-row-1");
    imageTitle.innerHTML = `
      <label for="image-title" class="form-label">Image Title</label>
      <input type="text" class="form-input" id="image-title" placeholder="Enter a descriptive title..." value="" />`;

    const fileUpload = document.createElement("div");
    fileUpload.classList.add("form-row-2");
    fileUpload.innerHTML = `
      <input type="file" class="upload" name="image-file" id="image-file" accept=".jpg, .jpeg, .png" required />`;

    const submitButton = document.createElement("div");
    submitButton.innerHTML = `
      <input type="submit" value="Submit" disabled class="submit-btn" />`;

    formModal.appendChild(modalHeader);
    formModal.appendChild(imageTitle);
    formModal.appendChild(fileUpload);
    formModal.appendChild(submitButton);

    modalDiv.appendChild(formModal);
    modalOverlay.appendChild(modalDiv);

    const closeBtn = modalDiv.querySelector(".close-btn");
    const titleTextbox = formModal.querySelector(".form-input");
    const imageInput = formModal.querySelector(".upload");
    const submitBtn = formModal.querySelector(".submit-btn");

    // Close modal
    closeBtn.addEventListener("click", function () {
      modalOverlay.classList.remove("open-modal");
    });

    function validateForm() {
      const title = titleTextbox.value.trim();
      const file = imageInput.files[0];
      const validTypes = ["image/jpeg", "image/png"];

      if (title.length > 2 && file && validTypes.includes(file.type)) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", "");
      }
    }

    titleTextbox.addEventListener("input", validateForm);
    imageInput.addEventListener("change", validateForm);

    formModal.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = titleTextbox.value.trim();
      const file = imageInput.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function () {
        const imageUrl = reader.result;
        const newCard = document.createElement("article");
        newCard.classList.add("card");

        newCard.innerHTML = `
          <img src="${imageUrl}" alt="${title}" class="card-img" />
          <footer class="card-data">
            <p>${title}</p>
            <button class="like-button" aria-label="like button">
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                  stroke-width="2"
                  stroke="#212121"
                  fill="none"
                />
              </svg>
              <span class="sr-only">Like Button</span>
            </button>
          </footer>
        `;

        const bodySection = document.getElementById("bodyPart");
        bodySection.appendChild(newCard);

        modalOverlay.classList.remove("open-modal");
        formModal.reset();
      };

      reader.readAsDataURL(file);
    });
  });

  // Global like button handler
  document.addEventListener("click", function (e) {
  const btn = e.target.closest(".like-button");
  if (!btn) return;

  const svg = btn.querySelector("svg");
  const path = svg?.querySelector("path");
  if (!path) return;

  const isLiked = btn.classList.toggle("liked");

  if (isLiked) {
    path.setAttribute("fill", "#e63946");
    path.removeAttribute("stroke");
    path.style.opacity = "1";
  } else {
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#212121");
    path.style.opacity = "0.6";
  }
  });

}

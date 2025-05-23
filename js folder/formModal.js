export function formModal() {
  /*
=============== 
- Creating the modal using JS
===============
*/
  const modalOverlay = document.querySelector(".modal-overlay");

  // Modal container
  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal-container");
  modalDiv.innerHTML = `<button class="close-btn"><i class="fas fa-times"></i></button>`;
  // End of Modal container

  // HTML form inside the modal
  const formModal = document.createElement("form");
  const attribute = {
    action: "/submit",
    method: "POST",
    class: "modal-form",
  };

  Object.entries(attribute).forEach(([key, value]) => {
    formModal.setAttribute(key, value);
  });

  // Create form-modal header
  const modalHeader = document.createElement("p");
  modalHeader.textContent = "Image Upload Form";

  // Create Image Title TextBox
  const imageTitle = document.createElement("div");
  imageTitle.classList.add("form-row-1");
  imageTitle.innerHTML = `
<label for="image-title" class="form-label">Image Title</label>
<input type="text" class="form-input" id="image-title" placeholder="Enter a descriptive title..." value="" />`;

  // Create File Upload Option
  const fileUpload = document.createElement("div");
  fileUpload.classList.add("form-row-2");
  fileUpload.innerHTML = `
<input type="file" class="upload" name="image-file" id="image-file" accept=".jpg, .jpeg, .png" required />`;

  // Create Submit button
  const submitButton = document.createElement("div");
  submitButton.innerHTML = `
<input type="submit" value="Submit" disabled class="submit-btn" />`;

  formModal.appendChild(imageTitle);
  formModal.appendChild(fileUpload);
  formModal.appendChild(submitButton);

  // End of HTML form inside the modal

  modalDiv.appendChild(formModal);
  modalOverlay.appendChild(modalDiv);

  /*
=============== 
- End of modal creation using JS
===============
*/

  /*
=============== 
- Get Elements
===============
*/

  const btn = document.querySelector(".modal-btn");
  const closeBtn = document.querySelector(".close-btn");
  const titleTextbox = document.querySelector(".form-input");
  const submitBtn = document.querySelector(".submit-btn");

  /*
=============== 
- Clicking the New Post button opens the modal overlay.
===============
*/
  btn.addEventListener("click", function (e) {
    modalOverlay.classList.add("open-modal");
  });

  /*
=============== 
- Clicking the close (X) button hides the modal overlay.
===============
*/
  closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("open-modal");
  });

  /*
=============== 
- Disable the Submit button if the Image Title is empty or less than 3 characters.
===============
*/
  titleTextbox.addEventListener("input", function (e) {
    if (e.target.value.trim() !== "" && e.target.value.length > 2) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "");
    }
  });
}

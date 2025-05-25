const logo = document.getElementById("menuBar");

const logoImage = document.createElement("img");

logoImage.src = "/assets/Logo.svg"

logoImage.id = "logoImg"

logoImage.alt = "logo"

logo.appendChild(logoImage);


const header = document.querySelector("header");
const firstContainer = document.createElement("div");
const leftContainer = document.createElement("div");
const textContainer = document.createElement("div");

firstContainer.id = "first_container"
leftContainer.id = "left_container"
textContainer.id = "textContainer"

const avatar = document.createElement("img");
avatar.src = "/assets/Avatar.svg"

avatar.id = "avatarImg"

avatar.alt = "Avatar"

// avatar.className = "AvatarProfile"

leftContainer.appendChild(avatar);
firstContainer.appendChild(leftContainer);
header.appendChild(firstContainer);

const personName = document.createElement("p");
const profession = document.createElement("p");
const editProfile = document.createElement("button");
// const span = document.createElement("span")

personName.textContent = "Bessie Coleman"
profession.textContent = "Civil Aviator"
// editProfile.textContent = "Edit Profile"
editProfile.innerHTML = `<svg width="16" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="13.0676" y="4.87506" width="11.6506" height="3.21396" transform="rotate(135 13.0676 4.87506)" fill="#212121"/>
<path d="M14.2035 1.4662C14.8311 2.09377 14.8311 3.11125 14.2035 3.73881L13.6354 4.30697L11.3628 2.03436L11.9309 1.4662C12.5585 0.83864 13.576 0.83864 14.2035 1.4662Z" fill="#212121"/>
<path d="M1.54021 13.4837L2.55674 10.8408L4.82935 13.1134L2.18637 14.1299C1.782 14.2854 1.38468 13.8881 1.54021 13.4837Z" fill="#212121"/>
</svg> <span>Edit Profile</span>`

textContainer.appendChild(personName);
textContainer.appendChild(profession);
textContainer.appendChild(editProfile);
leftContainer.appendChild(textContainer);

// Wait for the New Post button to be created by newpost.js, then move it to the correct position
setTimeout(() => {
  const newPostButton = document.getElementById("right_container");
  if (newPostButton && firstContainer) {
    // Move the button from header to firstContainer
    firstContainer.appendChild(newPostButton);
  }
}, 100);

editProfile.addEventListener("click", function showModal (){

     // Remove existing modal if present
  const existing = document.getElementById("dynamicModal");
  if (existing) existing.remove();

  // Create modal container
  const modal = document.createElement("div");
  modal.className = "editModal";
  modal.id = "dynamicModal";

  // Create modal content
  const content = document.createElement("div");
  content.className = "editModal-content";

  // Close button
  const close = document.createElement("span");
  close.className = "close";
  close.innerHTML = "&times;";
  close.onclick = () => modal.style.display = "none";
  content.appendChild(close);

  // Create form
  const form = document.createElement("form");
  form.innerHTML = `
    <h3>Edit Info</h3>
    <label>Full Name:</label><br>
    <input type="text" id="editName" placeholder = "John Doe"><br>
     <label>Bio:</label><br>
     <textarea id="bio" name="biography" rows="5" cols="32" placeholder = "Biography"></textarea><br>
    <label>Profile Image</label><br>
    <input type = "file" id = "profileImg" accept = "image/*">
    <button type="submit" id = "popSave">Save</button>
  `;

  // Handle form submission
  form.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("editName").value;
    const userBio = document.getElementById("bio").value;
    const profileImg = document.getElementById("profileImg")
    //get uploaded file
    const uploadedFile = profileImg.files[0];
 //  Validation: Check if any field is empty
  if (name === "" || userBio === "" || !uploadedFile) {
    alert("Please fill in all fields before submitting.");
    return; // Stop the form submission
  }
    // Check character limits
  if (name.length < 3 || name.length > 30) {
    alert("Name must be between 3 and 30 characters.");
    return;
  }

  if (userBio.length < 10 || userBio.length > 100) {
    alert("Biography must be between 10 and 10 characters.");
    return;
  }
    // console.log(uploadedFile);
    //creating a url for the uploaded image
    avatar.src=URL.createObjectURL(uploadedFile);
    personName.textContent = name;
    profession.textContent = userBio;

    // alert("Saved: " + name + userBio);
    modal.style.display = "none";
  };

  content.appendChild(form);
  modal.appendChild(content);
  document.body.appendChild(modal);

  // Show modal
  modal.style.display = "flex";

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.style.display = "none";
  });
});





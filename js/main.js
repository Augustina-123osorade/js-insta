const logo = document.getElementById("menuBar");

const logoImage = document.createElement("img");

logoImage.src = "../assets/Logo.svg"

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
avatar.src = "../assets/Avatar.svg"

avatar.id = "avatarImg"

avatar.alt = "Avatar"

leftContainer.appendChild(avatar);
firstContainer.appendChild(leftContainer);
header.appendChild(firstContainer);

const personName = document.createElement("p");
const profession = document.createElement("p");
const editProfile = document.createElement("button");
// const span = document.createElement("span")

personName.textContent = "Bessie Coleman"
profession.textContent = "Civil Aviator"
editProfile.textContent = "Edit Profile"

textContainer.appendChild(personName);
textContainer.appendChild(profession);
textContainer.appendChild(editProfile);
firstContainer.appendChild(textContainer);


//create the edit button
// const editButton = document.createElement("button");
// editButton.textContent = "Edit";
// document.body.appendChild(editButton);

// //create modal element
// const modal = document.createElement("div");
// modal.className = "editModal";
// document.body.appendChild(modal);

editProfile.addEventListener("click", function showModal (){

     // Remove existing modal if present
  const existing = document.getElementById("dynamicModal");
  if (existing) existing.remove();

  // Create modal container
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "dynamicModal";

  // Create modal content
  const content = document.createElement("div");
  content.className = "modal-content";

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
     <textarea id="bio" name="biography" rows="5" cols="40" placeholder = "Biography"></textarea><br>
    <label>Profile Image</label><br>
    <input type = "file" id = "profileImg" accept = "image/*"><br>
    <button type="submit">Save</button>
  `;

  // Handle form submission
  form.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("editName").value;
    const userBio = document.getElementById("bio").value;
    const profileImg = document.getElementById("profileImg")
    //get uploaded file
    const uploadedFile = profileImg.files[0];
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



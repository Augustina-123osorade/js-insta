# Insta-Spots

A collaborative photo-sharing web project, developed by a team of 12, it began as a static site using HTML and CSS, but is now converted to JavaScript for dynamic functionality, and eventually evolved into a fully functional React application.


## 🌐 Live Site
[View Insta-Spots](https://insta-spots.vercel.app/)

---

## 🎯 Project Goals
- **Phase 1**: Build a static site using HTML & CSS
- **Phase 2**: Convert the previously static site (built with HTML & CSS) to JavaScript

---


## 📁 Project Structure – `insta-spots`

```
origin/
├── main 
├── group1-main
│   ├── feature-a
│   └── feature-b
└── group2-main
    ├── feature-x
    └── feature-y
```

---


# 🔁 Contribution Flow

- The team is divided into two groups, each maintaining its own main branch: `group1-main` and `group2-main`.
- Team members create feature branches (e.g., `feature-a`, `feature-b`, etc.) under their respective group branch.
- After completing their tasks, members merge their feature branches into their group’s main branch.
- Once group projects are completed, team leads collaborate to merge both `group1-main` and `group2-main` into the final main/master branch.

---

## 🤝 Git Contribution Process & Quality Assurance

We continue to follow the collaboration process used in [teesmile/insta-spots](https://github.com/teesmile/insta-spots/edit/main/README.md).

---

## 🗓️ Project Delivery Plan

| GROUP | Skill Set   | Team Leads                                                                | Members|
|-------|-------------|--------------------------------------------------------------------------| -----|
| 1     | Intermediate | Anthony Ugwuja (Team Lead), Deborah Fabusuyi (Asst. Lead) |Funmilola Akanbi, Rolaq, Angelina Onuoha, Zoe, 
| 2     | Beginners    |  Arnold Kwame Anyor  | OgheneO'Tega (R.O.T), Omogbolahan Apata, Kachi, Blessing, Augustina Osorade

---

## 📋 Task Assignments

| Task                        | Description                        | Group   |
|-----------------------------|----------------------------------|---------|
| Create header               | Build the app header layout       | Group 1 |
| Modal for edit button       | Modal to edit profile information |         |
| Background (mobile/desktop) | Responsive backgrounds            |         |
|-----------------------------|----------------------------------|---------|
| Create images               | Implement images dynamically      | Group 2 |
| Modal for new post          | Modal to create new posts          |         |
| Toggle like                 | Implement like/unlike with toggle |         |
| Focus image                 | Modal to preview images with title|         |


---

## 🔍 Requirements Breakdown

- Cards displaying images should be created programmatically (previously hardcoded).
- Each card must include an image, title, and heart icon.
- The **"Edit Profile"** button should trigger a modal allowing users to:
  - Update profile image, name, and job title.
  - Restrict uploads to images only (no CSV, XLS, PDF, etc.).
- The **"New Post"** modal:
  - Must not allow submission of empty cards.
  - Should validate required fields and disable the submit button until filled.
  - Should check for duplicate image names.
- Input validation rules:
  - Minimum of 2 characters.
  - Name, job title, and image must not be empty.
- The **heart icon** must toggle color on like/unlike.
- Clicking an image opens a **preview modal** with the title.
  - The preview should have a fixed size and be responsive across devices.
- The **New Post** button functionality must include:
  - Image, title, and heart icon.
  - No pagination – background should use `vh`, not a fixed height.

---

## 🧠 Scrum Methodology

- **Daily Stand-ups**: 15-minute meetings at 9 PM daily.
- **Tracking**: Scrum board used to manage project delivery process.
<br><br><br>
<img width="1251" alt="Screenshot 2025-05-25 at 19 31 34" src="https://github.com/user-attachments/assets/751da0ed-7cf6-4116-8189-4826316863df" />




export function addCopyright () {
    const right = document.querySelector(".copyright");

    const para = document.createElement("p");
    para.innerHTML = "2024 &copy; Spots";

    para.style.color = "gray";

    right.appendChild(para);
}
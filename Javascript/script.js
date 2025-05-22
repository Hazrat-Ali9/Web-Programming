// 1. Change text of an element
function changeText() {
  document.getElementById("main-heading").innerText = "Text Changed by JavaScript!";
}

// 2. Add a new paragraph dynamically
function addElement() {
  const newPara = document.createElement("p");
  newPara.innerText = "This is a new paragraph added with JS!";
  document.getElementById("content").appendChild(newPara);
}

// 3. Change style of an element
function changeStyle() {
  const heading = document.getElementById("main-heading");
  heading.style.color = "red";
  heading.style.fontSize = "40px";
  heading.style.backgroundColor = "#f0f0f0";
}

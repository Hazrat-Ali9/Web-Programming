function removeHeading() {
  const heading = document.getElementById("main-heading");
  if (heading) {
    heading.remove();
  }
}
function addImage() {
  const img = document.createElement("img");
  img.src = "Photo.png";  // Relative path to your image
  img.alt = "Local Image from Folder";
  img.style.marginTop = "10px";
  img.width = 200;

  document.getElementById("image-container").appendChild(img);
}

function toggleVisibility() {
  const target = document.getElementById("toggle-target");
  if (target.style.display === "none") {
    target.style.display = "block";
  } else {
    target.style.display = "none";
  }
}
function countParagraphs() {
  const paragraphs = document.getElementsByTagName("p");
  const count = paragraphs.length;
  document.getElementById("paragraph-count").innerText = `There are ${count} paragraph(s) on this page.`;
}

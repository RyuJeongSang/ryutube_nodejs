import axios from "axios";

const removeCommentBtn = document.getElementsByClassName("jsRemoveComment");
const commentNumber = document.getElementById("jsCommentNumber");

function decreaseNumber() {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
}

function removeComment(event) {
  event.target.parentNode.style.display = "none";
  decreaseNumber();
}

async function desendComment(event) {
  const videoId = window.location.href.split("/videos/")[1];
  const commentId = event.target.parentNode.id;
  const response = await axios({
    url: `/api/${videoId}/comment/${commentId}/remove`,
    method: "POST",
  });
  if (response.status === 200) {
    removeComment(event);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  desendComment(event);
}

function init() {
  for (let i = 0; i < removeCommentBtn.length; i += 1) {
    console.log(removeCommentBtn[i].parentNode);
    removeCommentBtn[i].addEventListener("click", handleSubmit);
  }
}

if (removeCommentBtn) {
  init();
}

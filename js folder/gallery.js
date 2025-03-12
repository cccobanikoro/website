const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFulImg(pic) {
  fullImgBox.style.display = 'flex';
  fullImg.src = pic;
}
function closeFulImg() {
  fullImgBox.style.display = 'none';
}
const inputFile = document.querySelector("#input-file");
const imageView = document.querySelector("#img-view");

inputFile.addEventListener("change", () => {
  let imgfile = inputFile.files[0];
  let imgLink = URL.createObjectURL(imgfile);
  imageView.style.backgroundImage = `url(${imgLink})`;
});

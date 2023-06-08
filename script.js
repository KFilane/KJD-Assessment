<script>
function myFunction(images) {
  var expandImg = document.getElementById("expandedImg");
  var imagesText = document.getElementById("imagestext");
  expandImg.src = images.src;
  imagesText.innerHTML = images.alt;
  expandImg.parentElement.style.display = "block";
}
</script>
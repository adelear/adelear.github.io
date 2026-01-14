let slideIndexes = {};

function showSlides(n, galleryId) {
  let slides = document.querySelectorAll(`#${galleryId} .slide`);

  if (!slideIndexes[galleryId]) {
    slideIndexes[galleryId] = 1;
  }

  if (n > slides.length) slideIndexes[galleryId] = 1;
  if (n < 1) slideIndexes[galleryId] = slides.length;

  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndexes[galleryId] - 1].style.display = "block";
}

function plusSlides(n, galleryId) {
  slideIndexes[galleryId] += n;
  showSlides(slideIndexes[galleryId], galleryId);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow-container").forEach(gallery => {
    slideIndexes[gallery.id] = 1;
    showSlides(1, gallery.id);
  });
});

const accordionButtons = document.querySelectorAll(".accordion__item-heading");

accordionButtons.forEach((btn) => btn.addEventListener("click", toggleFaq));

function toggleFaq() {
  this.classList.toggle("active");

  const content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

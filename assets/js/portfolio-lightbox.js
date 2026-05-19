(function () {
  "use strict";

  var galleryEl = document.querySelector(".case-study__gallery");
  if (!galleryEl || typeof GLightbox === "undefined") return;

  var galleryId = galleryEl.getAttribute("data-gallery") || "portfolio";

  galleryEl.querySelectorAll(".case-study__figure img").forEach(function (img) {
    if (img.closest("a.glightbox")) return;

    var link = document.createElement("a");
    link.href = img.currentSrc || img.src;
    link.className = "glightbox";
    link.setAttribute("data-gallery", galleryId);
    link.setAttribute("aria-label", "Увеличи снимката");

    var figure = img.parentElement;
    figure.insertBefore(link, img);
    link.appendChild(img);
  });

  GLightbox({
    selector: ".glightbox",
    loop: true,
    touchNavigation: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
  });
})();

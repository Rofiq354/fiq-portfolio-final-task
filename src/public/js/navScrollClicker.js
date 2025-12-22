document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perubahan URL

    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Efek scroll halus
        block: "start", // Berhenti di bagian atas section
      });
    }
  });
});

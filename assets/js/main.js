document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const curtain = entry.target.querySelector(".curtain-cover");
          curtain.classList.add("revealed");
          observer.unobserve(entry.target); // animiraj samo jednom
        }
      });
    },
    {
      threshold: 0.5, // prilagodi ako treba ranije ili kasnije otkrivanje
    }
  );

  document.querySelectorAll(".curtain-wrapper").forEach((section) => {
    observer.observe(section);
  });
});

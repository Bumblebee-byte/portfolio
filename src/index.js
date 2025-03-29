document.addEventListener("DOMContentLoaded", function () {
  // Typing animation
  const text = "Computer Science Student";
  const typingTextElement = document.querySelector(".typing-text");

  if (typingTextElement) {
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        typingTextElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    setTimeout(typeWriter, 1000);
  }

  // Scroll animations
  const aboutText = document.querySelectorAll(".about-text");
  const skillTags = document.querySelectorAll(".skill-tag");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function handleScrollAnimation() {
    aboutText.forEach((text, index) => {
      if (isInViewport(text)) {
        setTimeout(() => {
          text.style.opacity = "1";
          text.style.transform = "translateY(0)";
        }, 300 * index);
      }
    });

    skillTags.forEach((tag, index) => {
      if (isInViewport(tag)) {
        setTimeout(() => {
          tag.style.opacity = "1";
          tag.style.transform = "translateY(0)";
        }, 100 * index);
      }
    });
  }

  // Initialize scroll animations
  handleScrollAnimation();
  window.addEventListener("scroll", handleScrollAnimation);

  // Form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      console.log("Form submitted:", formData);
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    });
  }

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Show/hide based on scroll
    window.addEventListener("scroll", function () {
      backToTop.style.display = window.pageYOffset > 300 ? "block" : "none";
    });
  }

  // Ripple effect for buttons
  document.querySelectorAll(".ripple-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      const ripple = document.createElement("span");
      ripple.className = "ripple";

      const rect = button.getBoundingClientRect();
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

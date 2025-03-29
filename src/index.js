document.addEventListener("DOMContentLoaded", function () {
  const text = "Computer Science Student";
  const typingTextElement = document.querySelector(".typing-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingTextElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing animation with a slight delay
  setTimeout(typeWriter, 1000);

  // Animate about text and skill tags on scroll
  const aboutText = document.querySelectorAll(".about-text");
  const skillTags = document.querySelectorAll(".skill-tag");

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll animation
  function handleScrollAnimation() {
    aboutText.forEach((text, index) => {
      if (isInViewport(text)) {
        setTimeout(() => {
          text.style.opacity = "1";
          text.style.transform = "translateY(0)";
          text.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        }, 300 * index);
      }
    });

    skillTags.forEach((tag, index) => {
      if (isInViewport(tag)) {
        setTimeout(() => {
          tag.style.opacity = "1";
          tag.style.transform = "translateY(0)";
          tag.style.transition = "all 0.3s ease";
        }, 100 * index);
      }
    });
  }

  // Initial check and add scroll event listener
  handleScrollAnimation();
  window.addEventListener("scroll", handleScrollAnimation);

  // Form submission handling
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      // Here you would normally send the data to your server
      // For demonstration, we'll just log it and show an alert
      console.log("Form submitted:", formData);

      // Show success message (in real implementation, this would happen after successful AJAX request)
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      this.reset();
    });
});
// Back to top functionality
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Create ripple effect
  const button = this;
  const ripple = document.createElement("span");

  ripple.className = "ripple";
  ripple.style.left =
    event.clientX - button.getBoundingClientRect().left + "px";
  ripple.style.top = event.clientY - button.getBoundingClientRect().top + "px";

  button.appendChild(ripple);

  // Remove ripple after animation completes
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

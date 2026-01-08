
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero_text");
  const foodCards = document.querySelectorAll(".food_list_card");
  const orderSection = document.querySelector(".order_text_wrapper");
  const productCards = document.querySelectorAll(".product_card");
  const feedbackImg = document.querySelector(".feedback_img");
  const feedbackText = document.querySelector(".feedback_text");
  const downloadSection = document.querySelector(".download .container");

  if (heroText) heroText.setAttribute("data-aos", "fade-up");

  foodCards.forEach((card, index) => {
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", index * 100);
  });

  if (orderSection) orderSection.setAttribute("data-aos", "fade-left");

  productCards.forEach((card, index) => {
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", index * 150);
  });

  if (feedbackImg) feedbackImg.setAttribute("data-aos", "zoom-in");
  if (feedbackText) feedbackText.setAttribute("data-aos", "fade-left");

  if (downloadSection) downloadSection.setAttribute("data-aos", "fade-up");

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });
});

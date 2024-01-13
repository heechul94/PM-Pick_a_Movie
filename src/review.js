const reviewer = document.querySelector(".reviewer-input");
const reviewText = document.querySelector(".review-text");
const reviewPassword = document.querySelector(".review-password");
const reviewList = document.querySelector(".review-list");
const submitBtn = document.querySelector(".review-submit-btn");

const reviewId = location.href.split("?")[1];

function submitReview() {
  submitBtn.addEventListener("submit", (event) => event.preventDefault());
  let newReview = { reviewer: reviewer.value, text: reviewText.value, password: reviewPassword.value };

  let reviews = JSON.parse(localStorage.getItem(`${reviewId}`)) || [];

  if (!reviewer.value.trim() || !reviewText.value.trim()) {
    alert("작성자와 리뷰를 모두 입력하세요!");
    return;
  } else {
    reviews.push(newReview);
    localStorage.setItem(`${reviewId}`, JSON.stringify(reviews));
    reviewer.value = null;
    reviewText.value = null;
    reviewPassword.value = null;

    // document.querySelector(".reviewer-input").value = "";
    // document.querySelector(".review-text").value = "";
    // document.querySelector(".review-password").value = "";
  }

  displayReviews();
}

function removeReview() {
  localStorage.removeItem(`${reviewId}`);
  displayReviews();
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem(`${reviewId}`)) || [];

  reviewList.innerHTML = "";

  if (reviews.length > 0) {
    reviews.forEach(function (review) {
      let reviewWriter = `<span class ="review-user">${review.reviewer}</span>`;
      let reviewContent = `<div class ="review-content">${review.text}</div>`;
      let reviewCard = `<div class="review-card">${reviewWriter + reviewContent}</div>`;
      reviewList.innerHTML += reviewCard;
    });
  }
}

window.onload = function () {
  displayReviews();
};

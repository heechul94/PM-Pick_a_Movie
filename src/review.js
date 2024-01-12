function submitReview() {
  let reviewer = document.querySelector(".reviewer-input").value;
  let reviewText = document.querySelector(".review-text").value;
  let reviewPassword = document.querySelector(".review-password").value;
  let newReview = { reviewer: reviewer, text: reviewText };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (!reviewer.trim() || !reviewText.trim()) {
    alert("작성자와 리뷰를 모두 입력하세요!");
    return;
  } else {
    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    localStorage.setItem("review-password", JSON.stringify(reviewPassword));

    document.querySelector(".reviewer-input").value = "";
    document.querySelector(".review-text").value = "";
    document.querySelector(".review-password").value = "";
  }

  displayReviews();
}

function removeReview() {
  localStorage.removeItem("reviews");
  localStorage.removeItem("review-password");

  displayReviews();
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let reviewList = document.querySelector(".review-list");

  reviewList.innerHTML = "";

  if (reviews.length > 0) {
    reviews.forEach(function (review) {
      let reviewWriter = `<div class ="review-writer">${review.reviewer}</div>`;
      let reviewContent = `<div class ="review-content">${review.text}</div>`;
      let reviewFull = `<div class="review-full">${reviewWriter + reviewContent}</div>`;
      reviewList.innerHTML += reviewFull;
    });
  }
}

window.onload = function () {
  displayReviews();
};

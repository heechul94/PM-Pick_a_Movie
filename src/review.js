function submitReview() {
  let reviewer = document.querySelector(".reviewer").value;
  let reviewText = document.querySelector(".review-Text").value;
  let revivewPassword = document.querySelector(".revivew-Password").value;
  let newReview = { reviewer: reviewer, text: reviewText };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (!reviewer.trim() || !reviewText.trim()) {
    alert("작성자와 리뷰를 모두 입력하세요!");
    return;
  } else {
    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    localStorage.setItem("revivew-Password", JSON.stringify(revivewPassword));

    document.querySelector(".reviewer").value = "";
    document.querySelector(".review-Text").value = "";
    document.querySelector(".revivew-Password").value = "";
  }

  displayReviews();
}

function removeReview() {
  localStorage.removeItem("reviews");
  localStorage.removeItem("revivew-Password");

  displayReviews();
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let reviewList = document.querySelector(".review-List");

  reviewList.innerHTML = "";

  if (reviews.length > 0) {
    reviews.forEach(function (review) {
      let reviewWriter = `<div class ="review-Writer">${review.reviewer}</div>`;
      let reviewContent = `<div class ="review-Content">${review.text}</div>`;
      let reviewFull = `<div class="review-Full">${reviewWriter + reviewContent}</div>`;
      reviewList.innerHTML += reviewFull;
    });
  }
}

window.onload = function () {
  displayReviews();
};

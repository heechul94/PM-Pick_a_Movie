function submitReview() {
  let reviewer = document.querySelector(".reviewer").value;
  let reviewText = document.querySelector(".review-Text").value;
  let revivewPassword = document.querySelector(".revivew-Password").value;
  let newReview = { reviewer: reviewer, text: reviewText };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (!reviewer.trim() || !reviewText.trim()||!revivewPassword.trim()) {
    alert("작성자와 리뷰, 비밀번호를 모두 입력하세요!");
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

function removeReviewOnly(index) {
  let reviews = JSON.parse(localStorage.getItem(`${reviewId}`)) || [];
  let review = reviews[index];
  let passwordEntered = prompt("리뷰 삭제를위한 비밀번호가 필요합니다!");
  if (passwordEntered == review.password) {
      reviews.splice(index, 1);
      localStorage.setItem(`${reviewId}`, JSON.stringify(reviews));
      displayReviews();
  } else {
      alert("비밀번호가 맞지 않습니다!");
  }
}


function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let reviewList = document.querySelector(".review-List");

  reviewList.innerHTML = "";

  if (reviews.length > 0) {
    reviews.forEach(function (review) {
      let reviewWriter = `<div class ="review-Writer">${review.reviewer}</div>`;
      let reviewContent = `<div class ="review-Content">${review.text}</div>`;
      let deleteButton = `<button onclick="removeReviewOnly(${index})">리뷰 삭제</button>`;
      let reviewFull = `<div class="review-Full">${reviewWriter + reviewContent+deleteButton}</div>`;
      reviewList.innerHTML += reviewFull;
    });
  }
}

window.onload = function () {
  displayReviews();
};

function submitReview() {
  let reviewer = document.querySelector(".reviewer").value;
  let reviewText = document.querySelector(".reviewText").value;

  let newReview = { reviewer: reviewer, text: reviewText };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (!reviewer || !reviewText) {
    alert("작성자와 리뷰를 모두 입력하세요!");
    return;
  }

  reviews.push(newReview);

  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReviews();
}

function removeReview() {
  localStorage.removeItem("reviews");

  displayReviews();
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let reviewList = document.querySelector(".reviewList");

  reviewList.innerHTML = "";
  if (reviews.length > 0) {
    reviews.forEach(function (review) {
      reviewList.innerHTML += "작성자: &ensp;" + review.reviewer + "<p>" + "리뷰:   &ensp;" + review.text + "<br><br>";
    });
  }
}

window.onload = function () {
  displayReviews();
};

function submitReview() {
  let reviewer = document.querySelector(".reviewer").value;
  let reviewText = document.querySelector(".reviewText").value;
  let revivewPassword = document.querySelector(".revivewPassword").value;
  let newReview = { reviewer: reviewer, text: reviewText };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  if (!reviewer.trim() || !reviewText.trim()) {
    alert("작성자와 리뷰를 모두 입력하세요!");
    return;
  } else {
    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    localStorage.setItem("revivewPassword", JSON.stringify(revivewPassword));

    document.querySelector(".reviewer").value = "";
    document.querySelector(".reviewText").value = "";
    document.querySelector(".revivewPassword").value = "";
  }

  displayReviews();
}

function removeReview() {
  localStorage.removeItem("reviews");
  localStorage.removeItem("revivewPassword");

  displayReviews();
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let reviewList = document.querySelector(".reviewList");

  reviewList.innerHTML = "";

  if (reviews.length > 0) {
    reviews.forEach(function (review) {
      let reviewWriter = review.reviewer + "<p>";
      let reviewContent = review.text + "</p>";
      let reviewFull = reviewWriter + reviewContent;
      reviewList.innerHTML += reviewFull;
    });
  }
}

window.onload = function () {
  displayReviews();
};

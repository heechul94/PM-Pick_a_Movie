function submitReview() {
  let reviewer = document.querySelector(".reviewer").value;
  let reviewText = document.querySelector(".reviewText").value;
  let reviewList = document.querySelector(".reviewList");

  reviewList.innerHTML += "작성자: &ensp;" + reviewer + "<p>" + "리뷰:   &ensp;" + reviewText;
}

function removeReview() {}

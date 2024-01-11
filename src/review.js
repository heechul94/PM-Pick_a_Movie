function submitReview() {
  let reviewer = document.querySelector(".reviewer").value;
  let reviewText = document.querySelector(".reviewText").value;
  let reviewList = document.querySelector(".reviewList");

  // 새 리뷰 객체 생성
  let newReview = { reviewer: reviewer, text: reviewText };

  // LocalStorage에서 기존 리뷰 불러오기
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // 새 리뷰를 배열에 추가
  reviews.push(newReview);

  // 리뷰 배열을 LocalStorage에 저장
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // 화면에 리뷰 표시
  displayReviews();
}

// 리뷰 삭제 함수
function removeReview() {
  // LocalStorage에서 모든 리뷰 삭제
  localStorage.removeItem("reviews");

  // 화면에서 리뷰 목록 업데이트
  displayReviews();
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let reviewList = document.querySelector(".reviewList");

  reviewList.innerHTML = "";
  reviews.forEach(function (review) {
    reviewList.innerHTML += "작성자: &ensp;" + review.reviewer + "<p>" + "리뷰:   &ensp;" + review.text + "<br><br>";
  });
}

window.onload = function () {
  displayReviews();
};

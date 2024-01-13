const reviewer = document.querySelector(".reviewer-input");
const reviewText = document.querySelector(".review-text");
const reviewPassword = document.querySelector(".review-password");
const reviewList = document.querySelector(".review-list");
const submitBtn = document.querySelector(".review-submit-btn");

const reviewId = location.href.split("?")[1];
// reviews => submitReview() 와 removeReviewOnly() 에서 중복 사용돼 바깥으로 빼줘서 각 함수마다 다시 선언 안해도 되게 수정했습니다.
const reviews = JSON.parse(localStorage.getItem(`${reviewId}`)) || [];

function submitReview() {
  submitBtn.addEventListener("submit", (event) => event.preventDefault());
  let newReview = { reviewer: reviewer.value, text: reviewText.value, password: reviewPassword.value };
  // const reviews = JSON.parse(localStorage.getItem(`${reviewId}`)) || [];

  if (!reviewer.value.trim() || !reviewText.value.trim() || !reviewPassword.value.trim()) {
    alert("작성자와 리뷰, 비밀번호를 모두 입력하세요!");
    return;
  } else {
    reviews.push(newReview);
    localStorage.setItem(`${reviewId}`, JSON.stringify(reviews));
    reviewer.value = null;
    reviewText.value = null;
    reviewPassword.value = null;
  }

  displayReviews();
}

function removeReviewOnly(index) {
  // let reviews = JSON.parse(localStorage.getItem(`${reviewId}`)) || [];
  let review = reviews[index];
  let passwordEntered = prompt("리뷰삭제를 원한다면 비밀번호를 입력하세요!");
  // prompt에서 그냥 취소만 눌렀을때  alert "비밀번호가 맞지 않습니다!" 안뜨게 하는 조건
  if (!passwordEntered) {
    return;
  } else if (passwordEntered === review.password) {
    reviews.splice(index, 1);
    localStorage.setItem(`${reviewId}`, JSON.stringify(reviews));
    displayReviews();
  } else if (passwordEntered !== review.password) {
    alert("비밀번호가 맞지 않습니다!");
    return;
  }
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem(`${reviewId}`)) || [];

  reviewList.innerHTML = "";

  if (reviews.length > 0) {
    reviews.forEach(function (review, index) {
      // let reviewWriter = `<span class ="review-user">${review.reviewer}</span>`;
      // let reviewContent = `<div class ="review-content">${review.text}</div>`;
      // let deleteButton = `<button class ="review-delete-btn" onclick="removeReviewOnly(${index})"><img src="../assets/trash.png"></img></button>`;
      // let reviewCard = `<div class="review-card">${reviewWriter + reviewContent+deleteButton}</div>`;
      // 삭제 버튼을 리뷰 카드 상단에 넣기 위해 아래 방식으로 수정하게 되었습니다.
      let reviewCard = `<div class="review-card">
                          <div class="review-header">
                            <span class ="review-user">${review.reviewer}</span>
                            <button class ="review-delete-btn" onclick="removeReviewOnly(${index})"><img src="../assets/trash.png"></img></button>
                          </div>
                          <div class ="review-content">${review.text}</div>
                        </div>`;
      reviewList.innerHTML += reviewCard;
    });
  }
}

window.onload = function () {
  displayReviews();
};

console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");


document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('content-form');
  const commentInput = commentForm.querySelector('input[type="text"]');
  const addButton = document.getElementById('comment-add');
  const cancelButton = document.getElementById('comment-cancel');
  const commentList = document.querySelector('.comment-list');

  addButton.addEventListener('click', function() {
    const commentText = commentInput.value.trim();
    
    if (commentText) {
      const newComment = document.createElement('li');
      newComment.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img
              src="./images/comment-author-icon.png"
              alt="사용자 프로필 이미지"
              class="comment-icon"
            />
            <span>방문자</span>
          </div>
          <div class="comment-content">
            ${commentText}
          </div>
        </div>
      `;
      commentList.insertBefore(newComment, commentList.firstChild);
      alert("댓글이 등록되었습니다");
      commentInput.value = '';
    }
  });

  cancelButton.addEventListener('click', function() {
    commentInput.value = '';
  });

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
});

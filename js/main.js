// Hamburger toggle
const hamburgerMenu = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerMenu?.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  hamburgerMenu.classList.toggle("open");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load theme from local storage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
});

const commentForm = document.getElementById('comment-form');
const nameInput = document.getElementById('user-name');
const commentInput = document.getElementById('user-comment');
const commentsDisplay = document.getElementById('comments-display');

let comments = [];

commentForm.addEventListener('submit', function (e) {
  e.preventDefault(); // ✅ Prevent page reload

  const name = nameInput.value.trim();
  const text = commentInput.value.trim();

  if (!name || !text) return;

  const newComment = {
    name,
    text,
    date: new Date(),
    likes: 0
  };

  comments.unshift(newComment);

  // Only keep the latest 3 comments
  if (comments.length > 3) {
    comments = comments.slice(0, 3);
  }

  // Clear form
  nameInput.value = '';
  commentInput.value = '';

  renderComments();
});

function renderComments() {
  commentsDisplay.innerHTML = '';

  comments.forEach((comment, index) => {
    const commentBox = document.createElement('div');
    commentBox.classList.add('comment-box');

    const timestamp = comment.date.toLocaleString(); // Format date/time

    commentBox.innerHTML = `
      <strong>${comment.name}</strong>
      <p class="comment-time">${timestamp}</p>
      <p>${comment.text}</p>
      <button class="like-btn" data-index="${index}">
        ❤️ Like <span>${comment.likes}</span>
      </button>
    `;

    commentsDisplay.appendChild(commentBox);
  });

  // Attach like button listeners
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const i = this.getAttribute('data-index');
      comments[i].likes++;
      renderComments(); // Re-render to update count
    });
  });
}

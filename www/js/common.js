$(document).ready(() => {
  const pathname = window.location.pathname;
  const currentPath = pathname.toString().split('www/')[1];
  if (currentPath !== 'index.html') {
    $('#left-nav').append(
      '<button class="btn text-white" onclick="back()"> < </button>'
    );
  }
});

/* ---------------------------- Common Javacript functions ----------------------------------- */

function navigateToHome() {
  window.location.href = 'home.html';
}

function onPressCard(location) {
  window.location.href = `${location}.html`;
}

function back() {
  window.history.back();
}

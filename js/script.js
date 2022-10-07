// Get the button by id
let scrollUpBtn = document.getElementById("scroll-up-btn");

// When user scrolls down 20px from the top of page, then show scroll up button
window.onscroll = function () {
  scrollUp();
};

// Display the scroll up button when scroll is down 20px from the top of page
function scrollUp() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

// When user clicks on button, then scroll to the top of page
scrollUpBtn.addEventListener("click", backToTop);

// Function to scroll up to the top of page
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Change the text of search button to Loading... when user has clicked
(function changeSearchBtnText() {
  const search_btn = document.querySelector("#search_btn");
  search_btn.addEventListener("click", () => {
    search_btn.innerText = "Loading...";
  });
  setInterval(() => {
	search_btn.innerText = "Search";
  }, "2500")
})();

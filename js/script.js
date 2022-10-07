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

(function searchArticles() {
  const settings = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "223c608d4dmsh848549f5afe454fp1ec308jsn857286b35c64",
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };

  // Search Filters
  document.querySelector("#search_btn").addEventListener("click", () => {
    const query = document.querySelector("#query");
    const sort_by = document.querySelector("#sort_by");
    const page_size = document.querySelector("#page_size");
    request(query, sort_by, page_size);
  });

  // Search Results
  request = (query, sort_by, page_size) => {
    let url = `https://newscatcher.p.rapidapi.com/v1/search?q=${query.value}&lang=sq&sort_by=${sort_by.value}&page_size=${page_size.value}&media=True`;
    fetch(url, settings)
      .then((response) => response.json())
      .then((response) => {
        const response_data = response.articles
          .map((articles) => {
            return `
            <div class="col-lg-4 col-md-6">
              <div class="card border mb-4">
                <a href="${articles.link}" class="text-dark" target="_blank">
                  <img src="${articles.media}" alt="News Image" class="img-fluid rounded-top search-article-media">
                </a>
                <div class="card-body">
                  <a href="${articles.link}" class="text-dark" target="_blank">
                    <h5 class="card-title search-article-title">${articles.title}</h5>
                  </a>
                  <p class="card-text search-article-summary">${articles.summary}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted search-article-topic">Lajme</small>
                  <small class="text-muted search-article-date">${articles.published_date}</small>
                </div>
              </div>
            </div>`;
          })
          .join("");
        document
          .querySelector(".search-articles")
          .insertAdjacentHTML("afterbegin", response_data);
      })
    
    .catch((error) =>
      console.error("Something went wrong, please try again later.", error)
    );
  };
})();

// Change the text of search button to Loading... when user has clicked
(function changeSearchBtnText() {
  const search_btn = document.querySelector("#search_btn");
  search_btn.addEventListener("click", () => {
    search_btn.innerText = "Po ngarkohet...";
  });
  setInterval(() => {
	search_btn.innerText = "Kërko";
  }, "2500")
})();

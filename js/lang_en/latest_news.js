(function latestNews() {
  const settings = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "223c608d4dmsh848549f5afe454fp1ec308jsn857286b35c64",
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };

  // Banner Article
  fetch('https://newscatcher.p.rapidapi.com/v1/search_free?q=Global&lang=en&ranked_only=True&page=1&page_size=1&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <a href="${articles.link}" class="text-dark" target="_blank">
            <img src="${articles.media}" alt="News Image" class="img-fluid rounded banner-article-media" />
          </a>
          <div class="banner-content">
            <div class="badge badge-success fs-12 font-weight-bold mb-3">${articles.topic}</div>
            <a href="${articles.link}" target="_blank">
              <h3 class="mb-0 banner-article-title">${articles.title}</h3>
            </a>
          </div>`;
        })
        .join("");
      document
        .querySelector(".banner-article")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Latest News
    fetch('https://newscatcher.p.rapidapi.com/v1/search_free?q=News&lang=en&ranked_only=True&page=1&page_size=3&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-12">
            <div class="border-bottom pb-4 pt-4">
              <div class="row">
                <div class="col-sm-4">
                  <div class="rotate-img">
                    <a href="${articles.link}" class="text-dark" target="_blank">
                      <img src="${articles.media}" alt="News Image" class="img-fluid rounded latest-article-media" />
                    </a>
                  </div>
                </div>
                <div class="col-sm-8">
                  <a href="${articles.link}" target="_blank">
                    <h5 class="font-weight-600 mb-1 latest-article-title">${articles.title}</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".latest-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Flash News
    fetch('https://newscatcher.p.rapidapi.com/v1/search_free?q=Politic&lang=en&page=1&page_size=3&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-4 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <a href="${articles.link}" class="text-dark" target="_blank">
                  <img src="${articles.media}" alt="News Image" class="img-fluid rounded flash-article-media" />
                </a>
              </div>
              <div class="badge-positioned">
                <span class="badge badge-success font-weight-bold">${articles.topic}</span>
              </div>
            </div>
          </div>
          <div class="col-sm-8 grid-margin">
            <a href="${articles.link}" class="text-dark" target="_blank">
              <h3 class="mb-2 font-weight-600 flash-article-title">${articles.title}</h3>
            </a>
            <div class="fs-13 mb-5">
              <span class="mr-2 flash-article-date">${articles.published_date}</span>
            </div>
            <p class="mb-0 flash-article-summary">${articles.summary}</p>
          </div>`;
        })
        .join("");
      document
        .querySelector(".flash-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })
    
    .catch((error) =>
      console.error("Something went wrong, please try again later.", error)
    );
})();

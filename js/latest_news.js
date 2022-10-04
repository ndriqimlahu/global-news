(function latestNews() {
  const settings = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "223c608d4dmsh848549f5afe454fp1ec308jsn857286b35c64",
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };

  // Banner Article
  fetch('https://newscatcher.p.rapidapi.com/v1/search?q=trending&lang=en&sort_by=rank&page=1&page_size=1&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <img
            src="${articles.media}"
            alt="Banner Image"
            class="img-fluid rounded banner-article-media" />
          <div class="banner-content">
            <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
            <a href="${articles.link}" target="_blank">
              <h3 class="mb-0 banner-article-title">${articles.title}</h3>
            </a>
            <div class="fs-12">
              <br><span class="mr-2">${articles.published_date}</span>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".banner-article")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Latest News
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=flash&lang=en&sort_by=date&page=1&page_size=3&media=True', settings)
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
                    <img
                      src="${articles.media}"
                      alt="Latest News Image"
                      class="img-fluid latest-article-media" />
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
    
    .catch((error) =>
      console.error("Something went wrong, please try again later.", error)
    );
})();

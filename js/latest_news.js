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

    // Flash News
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=politics&lang=en&sort_by=date&page=1&page_size=3&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-4 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="Flash News Image"
                  class="img-fluid flash-article-media" />
              </div>
              <div class="badge-positioned">
                <span class="badge badge-danger font-weight-bold">${articles.topic}</span>
              </div>
            </div>
          </div>
          <div class="col-sm-8 grid-margin">
            <a href="${articles.link}" class="text-dark" target="_blank">
              <h3 class="mb-2 font-weight-600 flash-article-title">${articles.title}</h3>
            </a>
            <div class="fs-13 mb-2">
              <span class="mr-2">${articles.author} | ${articles.published_date}</span>
            </div>
            <p class="mb-0 flash-article-summary">${articles.summary}</p>
          </div>`;
        })
        .join("");
      document
        .querySelector(".flash-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // News Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=news&lang=en&sort_by=relevancy&topic=news&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".news-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // World Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=world&lang=en&sort_by=relevancy&topic=world&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".world-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Politics Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=politic&lang=en&sort_by=relevancy&topic=politics&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".politics-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Finance Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=finance&lang=en&sort_by=relevancy&topic=finance&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".finance-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Economics Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=economics&lang=en&sort_by=relevancy&topic=economics&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".economics-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Business Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=business&lang=en&sort_by=relevancy&topic=business&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".business-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Sports Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=sports&lang=en&sort_by=relevancy&topic=sports&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".sports-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    // Beauty Articles
    fetch('https://newscatcher.p.rapidapi.com/v1/search?q=beauty&lang=en&sort_by=relevancy&topic=beauty&page=1&page_size=2&media=True', settings)
    .then((response) => response.json())
    .then((response) => {
      const response_data = response.articles
        .map((articles) => {
          return `
          <div class="col-sm-6 grid-margin">
            <div class="position-relative">
              <div class="rotate-img">
                <img
                  src="${articles.media}"
                  alt="News Image"
                  class="img-fluid rounded topic-article-media" />
              </div>
              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">${articles.topic}</div>
                <a href="${articles.link}" target="_blank">
                  <h3 class="mb-0 topic-article-title">${articles.title}</h3>
                </a>
                <div class="fs-12">
                  <br><span class="mr-2">${articles.published_date}</span>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
      document
        .querySelector(".beauty-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })
    
    .catch((error) =>
      console.error("Something went wrong, please try again later.", error)
    );
})();

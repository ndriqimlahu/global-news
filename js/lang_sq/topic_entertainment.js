(function topicEntertainment() {
  const settings = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "223c608d4dmsh848549f5afe454fp1ec308jsn857286b35c64",
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };

  // Entertainment Articles
  fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=entertainment&lang=sq&country=XK&media=True", settings)
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
                <span class="badge badge-success font-weight-bold">Argëtim</span>
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
        .querySelector(".entertainment-articles")
        .insertAdjacentHTML("afterbegin", response_data);
    })

    .catch((error) =>
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Diçka shkoi keq, ju lutem provoni sërish më vonë!',
        confirmButtonColor: '#3e8177'
      }, error)
    );
})();

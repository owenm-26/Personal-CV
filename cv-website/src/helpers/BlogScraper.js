const puppeteer = require("puppeteer");

const blogScraper = async (url, elements, titleElement) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(
    (allElementsSelector, titleSelector) => {
      const articles = document.querySelectorAll(allElementsSelector);

      return Array.from(articles)
        .slice(0, 3)
        .map((article) => {
          const title = article.querySelector(titleSelector).innerText;
          const url = article.querySelector("a").href;
          return { title, url };
        });
    },
    elements,
    titleElement
  );
  console.log(allArticles);
};
blogScraper("https://www.joshwcomeau.com/", "article", "h3");

// scrapeProfile('owen-mariani');

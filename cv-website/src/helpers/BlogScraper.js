const puppeteer = require("puppeteer");

const blogScraper = async (url, elementsXPath, titleXPath) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(
    async (elementsXPath, titleXPath) => {
      const articles = await document.evaluate(
        elementsXPath,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );

      const results = [];
      for (let i = 0; i < Math.min(3, articles.snapshotLength); i++) {
        const article = articles.snapshotItem(i);

        const titleElement = document.evaluate(
          titleXPath,
          article,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;

        const anchorElement = document.evaluate(
          ".//a",
          article,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;

        const title = titleElement ? titleElement.textContent : null;
        const url = anchorElement ? anchorElement.href : null;

        results.push({ title, url });
      }

      return results;
    },
    elementsXPath,
    titleXPath
  );

  console.log(allArticles);
  await browser.close();
};

blogScraper("https://www.joshwcomeau.com/", "//article", ".//h3");

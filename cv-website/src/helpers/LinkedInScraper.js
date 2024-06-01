const puppeteer = require('puppeteer')
const dotenv = require('dotenv')
dotenv.config();

const username = process.env.LINKEDIN_USER;
const pass = process.env.LINKEDIN_PASS;

async function scrapeProfile(profile, elements, titleElement) {
  if (!username || !pass) {
    console.error(
      "Need to fix .env with username and password. See .env.example"
    );
  }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //login first
  await page.goto("https://www.linkedin.com/login", {
    waitUntil: "networkidle2",
  });
  await page.type("#username", username);
  await page.type("#password", pass);
  await page.click('button[type="submit"]');

  console.log(`logged in with ${username} and ${pass}`);

  await page.goto(`https://www.linkedin.com/in/${profile}`);
  console.log("on profile page");

  //get experiences
  const allExperiences = await page.evaluate(
    (allElementsSelector, titleSelector) => {
      const experiences = document.querySelectorAll(allElementsSelector);

      return Array.from(experiences)
        .slice(0, 3)
        .map((experience) => {
          const title = experience.querySelector(titleSelector).innerText;
          const url = experience.querySelector("a").href;
          return { title, url };
        });
    },
    elements,
    titleElement
  );
  console.log(allExperiences);

  browser.close();
};


scrapeProfile("owen-mariani", "", "");
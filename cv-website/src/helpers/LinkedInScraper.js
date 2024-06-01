const puppeteer = require('puppeteer')
const dotenv = require('dotenv')
dotenv.config()

const username = process.env.LINKEDIN_USER
const pass = process.env.LINKEDIN_PASS

async function scrapeProfile(profile){
    if(!username || !pass){
        console.error('Need to fix .env with username and password. See .env.example')
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //login first
    await page.goto('https://www.linkedin.com/login', { waitUntil: 'networkidle2' });
    await page.type('#username', username);  
    await page.type('#password', pass);           
    await page.click('button[type="submit"]');

    console.log(`logged in with ${username} and ${pass}`)

    // Wait for navigation after login
    // await page.waitForNavigation({ waitUntil: 'networkidle2' });

    
    await page.goto(`https://www.linkedin.com/in/${profile}`)
    console.log('on profile page')
    

    browser.close();
}

const blogScraper = async(url, elements, titleElement) =>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const allArticles = await page.evaluate((allElementsSelector, titleSelector) => {
        const articles = document.querySelectorAll(allElementsSelector)

        return Array.from(articles).slice(0,3).map((article) =>{
            const title=article.querySelector(titleSelector).innerText;
            const url = article.querySelector('a').href
            return {title, url}
        });}, elements, titleElement)
        console.log(allArticles)
}
blogScraper('https://www.joshwcomeau.com/', 'article', 'h3')

// scrapeProfile('owen-mariani');
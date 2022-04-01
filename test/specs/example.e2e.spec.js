const mainPage = require('../pageobjects/main.page.js');
const docsPage = require('../pageobjects/docs.page.js');
const apiPage = require('../pageobjects/api.page.js');
const helpPage = require('../pageobjects/help.page.js');
const versionsPage = require('../pageobjects/versions.page.js');

describe('webdriver.io page', () => {
    it('API -> Search -- Task 1', async () => {
        await browser.url('https://webdriver.io');
        const api = await $('a.navbar__item.navbar__link[href="/docs/api"]');
        await api.click();
        console.log(`Current url: ${await browser.getUrl()}`);
        
        const header = await $('header h1');
        console.log(`API header: ${await header.getText()}`);
        
        const jsonWireProtocol = await $('//a[text()="JSONWire protocol"]');
        console.log(`JSONWire protocol href: ${await jsonWireProtocol.getAttribute('href')}`);

        const search = await $('span.DocSearch-Button-Placeholder');
        await search.click();
        const inputSearch = await $('input.DocSearch-Input');
        await inputSearch.setValue('test is ');
        await inputSearch.addValue('DONE!');
        await browser.pause(5000);
    });

    it('API -> Docs -- Task 2', async () => {
        await browser.url('https://webdriver.io/docs/api/');

        const jsonApiProtocol = await $('//*[text()="JSONWire protocol"]');
        const urlJsonApiProtocol = await jsonApiProtocol.getAttribute('href');
        await browser.newWindow(urlJsonApiProtocol);
        await browser.switchWindow(urlJsonApiProtocol);

        const seleniumHqWiki = await $('//a[contains(@href, "/SeleniumHQ/selenium/wiki")]');
        console.log(`seleniumHqWiki isDisplayed? - ${await seleniumHqWiki.isDisplayed()}`);

        await browser.switchWindow('https://webdriver.io/docs/api/');

        let header = await $('header h1');
        await browser.waitUntil(
            async () => (await header.getText()) === 'Introduction', 
            5000, 
            'No text "Introduction"');
        
        await header.saveScreenshot('test/resources/header.png');

        const twitterUrl = await $('[href="https://twitter.com/webdriverio"]');
        console.log(`Twitter url isDisplayed? - ${await twitterUrl.isDisplayed()}`);
        console.log(`Twitter url isDisplayedInViewport? - ${await twitterUrl.isDisplayedInViewport()}`);

        await twitterUrl.scrollIntoView();
        console.log(`Twitter url isDisplayed? - ${await twitterUrl.isDisplayed()}`);
        console.log(`Twitter url isDisplayedInViewport? - ${await twitterUrl.isDisplayedInViewport()}`);

        const blog = await $('[href="/blog"]');
        console.log(`Blog isFocused? - ${await blog.isFocused()}`);

        await blog.click();
        console.log(`Blog isFocused? - ${await blog.isFocused()}`);
    });

    it('Test suite -- Task 5 / Test case 1', async () => {
        await browser.url('https://github.com/');

        const searchInputField = await $('//form[@class="js-site-search-form"]//input[contains(@class, "form-control")]');
        await searchInputField.click();
        
        await searchInputField.setValue('login');

        await browser.keys('Enter');
    });

    it('Test suite -- Task 5 / Test case 2', async () => {
        await browser.url('https://github.com/');

        const userEmail = await $('#user_email');
        await userEmail.click();

        await userEmail.clearValue();

        await userEmail.setValue('yura.lyma@gmail.com');

        const signUpForGithub = await $('//form[contains(@class, "js-signup-form")]//button');
        await signUpForGithub.click();
    });

    it('Test suite -- Task 5 / Test case 3', async () => {
        await browser.url('https://github.com/');
        
        const docs = await $('//a[@class="Link--secondary" and contains(text(), "Docs")]');
        await docs.scrollIntoView();

        await docs.click();

        const english = await $('//div[@class="mr-2"]//following-sibling::details[contains(@class, "details-reset")]');
        await english.click();

        const spanish = await $('//div[@class="mr-2"]//following-sibling::details[contains(@class, "details-reset")]//span[contains(text(), "Spanish")]//ancestor::li');
        await spanish.click();
    });

    it('Test suite -- Task 5 / Test case 4', async () => {
        await browser.url('https://github.com/');
        
        const product = await $('//summary[contains(text(), "Product")]');
        await product.moveTo();

        const actions = await $('//div[contains(@class, "dropdown-menu")]//a[contains(text(), "Actions")]');
        await actions.moveTo();

        await actions.click();

        const getStartedWithActions = await $('//a[contains(text(), "Get started with Actions")]');
        await getStartedWithActions.click();
    });

    it('Test suite -- Task 5 / Test case 5', async () => {
        await browser.url('https://github.com/');
        
        const twitter = await $('//footer//span[contains(text(), "GitHub on Twitter")]//parent::a');
        await twitter.scrollIntoView();

        await twitter.click();
    });

    it('PageObjects -- Task 8-9', async () => {
        await browser.url('https://webdriver.io/');
        
        await mainPage.clickDocsLink();

        await docsPage.clickAPILink();

        await apiPage.clickContributeLink();

        await apiPage.clickHelpLink();

        console.log(`Is "Need Help?" text displayed? - ${await helpPage.isNeedHelpTextDisplayed()}`);

        await helpPage.clickVersionLink();

        await versionsPage.clickV5DocumentationLink();

        await browser.pause(2000);
    });
});



const assert = require('assert');

describe('addValue method Test', async () => {
    it('addValue test', async () => {
        await browser.url('https://webdriver.io/');
        let searchButton = await $('.DocSearch-Button');
        await searchButton.click();
        let inputSearch = await $('.DocSearch-Input');
        await inputSearch.addValue('test');
        await inputSearch.addValue(123);

        value = await inputSearch.getValue();
        assert(value === 'test123');
    });
});
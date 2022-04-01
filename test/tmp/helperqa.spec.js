const helperQA = require('../pageobjects/helperqa.page');
const testToken = 'k_Wkiy9B4E5uBGzuwHVZNlKCeKPWiSD9607KoRhkiw7d';
let timestamp = Date.now();
let email = `qa+${timestamp}@mailsac.com`;

describe('api request from wdio ', () => {
    it('check Email', async () => {
        const message = await helperQA.checkMesages("api+request+from+wdio@mailsac.com");
        console.log(`message: ${message}`);
    });
});
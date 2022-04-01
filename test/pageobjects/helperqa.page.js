const axios = require('axios').default;

class HelperQAPage {
    testToken = 'k_Wkiy9B4E5uBGzuwHVZNlKCeKPWiSD9607KoRhkiw7d'

    async configAxios() {
        return axios.create({
        baseURL: "https://mailsac.com/api/",
        headers: { 
            "Host": "mailsac.com",
            "Mailsac-Key": `${this.testToken}`,
            },
        });
    }

    catchErrors(error) {
        console.dir(error);
        if (typeof error.response !== 'undefined') {
            console.log("---------------API REQUEST ERROR------------------");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log("---------------API REQUEST ERROR------------------");
        }
        throw error;
    }

    async checkMesages(email) { // your get request
        const client = await this.configAxios(); //calls your config with headers
        return client.get( // sets request method
        `addresses/${email}/messages`, //endpoint
        ).then(response => {
        console.log(response.data);
        return response.data;
        }).catch(this.apiFailureCallback); //calls preconfigured catch error method
    }
}

module.exports = new HelperQAPage();
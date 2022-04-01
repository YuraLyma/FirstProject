class  Random {
    chrs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    mas = ['gmail.com', 'bigmir.net', 'yahoo.com'];
    yesOrNo = ['y', 'n'];

    getRndText(min, max) {
        let randomText = '';
        let length = Math.floor(Math.random() * max) + min;

        for(let i = 0; i < length; i++) {
            randomText += this.chrs[Math.floor(Math.random() * this.chrs.length)];
        }
        
        return randomText;
    }

    getRndDomainName() {
        return this.mas[Math.floor(Math.random() * this.mas.length)];
    }

    getRndEmail(minEmailName, maxEmailName) {
        return this.getRndText(minEmailName, maxEmailName) + '@' + this.getRndDomainName();
    }

    getRndYesOrNo() {
        return this.yesOrNo[Math.floor(Math.random() * this.yesOrNo.length)];
    }
}

module.exports = new Random();
class Responses {
    constructor() {
        this.congratulations = 'Congratulations!';
        this.fashion = 'Fashion? I love fashion!';
        this.transRights = 'Trans rights!';
        this.gayRights = 'Gay rights!';
        this.yas = 'yas!';
        this.cynthia = "Cynthia she's a really cool dancer. Cynthia boogie to the groove now.";
    }

    get(content) {
        let responses = [];
        content = content.toLowerCase();
        if (content.search(/\b(g+z+)+\b/) !== -1 || content.search(/\bc+o+n+g+r+a+[b-z]+/) !== -1 || content.search(/\bg+r+a+t+[s,z]+\b/) !== -1) {
            responses.push(this.congratulations);
        }
        if (content.includes('fashion')) {
            responses.push(this.fashion);
        }
        if (content.includes('trans rights')) {
            responses.push(this.transRights);
        }
        if (content.includes('gay rights')) {
            responses.push(this.gayRights);
        }
        if (content.search(/\by+a+s+\b/g) !== -1) {
            responses.push(this.yas);
        }
        if (content.includes('cynthia')) {
            responses.push(this.cynthia);
        }
        return responses;
    }
}

module.exports = Responses
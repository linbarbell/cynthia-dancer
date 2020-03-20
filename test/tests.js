const assert = require('chai').assert;
const Responses = require('../responses.js');
const responses = new Responses();

describe('congratulations', function() {
    it('should congrats on gz', function() {
        let cynResponses = responses.get('GZ');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on gzz', function() {
        let cynResponses = responses.get('gzz');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on ggz', function() {
        let cynResponses = responses.get('ggz');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on gzgz', function() {
        let cynResponses = responses.get('gzgz');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on ggzgzz', function() {
        let cynResponses = responses.get('ggzgzz');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should not congrats on zigzag', function() {
        let cynResponses = responses.get('zigzag');
        assert.strictEqual(cynResponses.length, 0);
    });

    it('should congrats on congratulations', function() {
        let cynResponses = responses.get('congratulations');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on congraaaaaaaats', function() {
        let cynResponses = responses.get('congraaaaaaaats');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on congrabulations', function() {
        let cynResponses = responses.get('congrabulations');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should not congrats on congra', function() {
        let cynResponses = responses.get('congra');
        assert.strictEqual(cynResponses.length, 0);
    });
    it('should not congrats on congraa', function() {
        let cynResponses = responses.get('congraa');
        assert.strictEqual(cynResponses.length, 0);
    });

    it('should congrats on grats', function() {
        let cynResponses = responses.get('grats');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on gratz', function() {
        let cynResponses = responses.get('gratz');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on gratzz', function() {
        let cynResponses = responses.get('gratzz');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });
    it('should congrats on gratss', function() {
        let cynResponses = responses.get('gratss');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    });

    it('should not congrats multiple times', function() {
        let cynResponses = responses.get('gzgz congratulations grats gzzzzzzz!');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.congratulations);
    })
});

describe('fashion', function() {
    it('should love fashion on fashion', function() {
        let cynResponses = responses.get('fashion');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.fashion);
    });
    it('should love fashion on fashionista', function() {
        let cynResponses = responses.get('fashionista');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.fashion);
    });
});

describe('gay rights', function() {
    it('should support gay rights', function() {
        let cynResponses = responses.get('gay rights');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.gayRights);
    });
});

describe('trans rights', function() {
    it('should support trans rights', function() {
        let cynResponses = responses.get('trans rights');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.transRights);
    });
});

describe('yas!', function() {
    it('should yas on yas', function() {
        let cynResponses = responses.get('yas');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });
    it('should yas on yas omg', function() {
        let cynResponses = responses.get('yas omg');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });
    it('should yas on omg yas', function() {
        let cynResponses = responses.get('omg yas');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });
    it('should yas on omg yas girl', function() {
        let cynResponses = responses.get('omg yas girl');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });
    it('should yas on yassssss', function() {
        let cynResponses = responses.get('yassssss');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });
    it('should yas on yaaaas', function() {
        let cynResponses = responses.get('yaaaas');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });
    it('should yas on yyyas', function() {
        let cynResponses = responses.get('yyyas');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });
    it('should yas on yyyaaaaasssssss!', function() {
        let cynResponses = responses.get('yyyaaaaasssssss!');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.yas);
    });

    it('should not yas on papayas', function () {
        let cynResponses = responses.get('papayas');
        assert.strictEqual(cynResponses.length, 0);
    });
    it('should not yas on yasmine', function () {
        let cynResponses = responses.get('yasmine');
        assert.strictEqual(cynResponses.length, 0);
    });
});

describe('cynthia', function() {
    it('should boogie to the groove on cynthia', function() {
        let cynResponses = responses.get('cynthia');
        assert.strictEqual(cynResponses.length, 1);
        assert.strictEqual(cynResponses[0], responses.cynthia);
    });
});

describe('other', function() {
    it('should not respond for severe neurotoxicity', function() {
        let cynResponses = responses.get('severe neurotoxicity');
        assert.strictEqual(cynResponses.length, 0);
    });
    it('should not respond for a hi', function() {
        let cynResponses = responses.get('hi');
        assert.strictEqual(cynResponses.length, 0);
    });
    it('should respond with 3 things that match', function() {
        let cynResponses = responses.get('yas cynthia says gay rights!');
        assert.strictEqual(cynResponses.length, 3);
        assert.strictEqual(cynResponses[0], responses.gayRights);
        assert.strictEqual(cynResponses[1], responses.yas);
        assert.strictEqual(cynResponses[2], responses.cynthia);
    });
    it('should respond with all her responses', function() {
        let cynResponses = responses.get('gz yas cynthia says gratss fashion gay rights and trans rights!');
        assert.strictEqual(cynResponses.length, 6);
        assert.strictEqual(cynResponses[0], responses.congratulations);
        assert.strictEqual(cynResponses[1], responses.fashion);
        assert.strictEqual(cynResponses[2], responses.transRights);
        assert.strictEqual(cynResponses[3], responses.gayRights);
        assert.strictEqual(cynResponses[4], responses.yas);
        assert.strictEqual(cynResponses[5], responses.cynthia);
    });
});
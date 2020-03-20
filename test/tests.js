const assert = require('chai').assert;
const Responses = require('../responses.js');
const responses = new Responses();

describe('gz', function() {
    it('should congrats on gz', function() {
        let cynResponses = responses.get('GZ');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on gzz', function() {
        let cynResponses = responses.get('gzz');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on ggz', function() {
        let cynResponses = responses.get('ggz');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on gzgz', function() {
        let cynResponses = responses.get('gzgz');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on ggzgzz', function() {
        let cynResponses = responses.get('ggzgzz');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should not congrats on zigzag', function() {
        let cynResponses = responses.get('zigzag');
        assert.equal(0, cynResponses.length);
    });

    it('should congrats on congratulations', function() {
        let cynResponses = responses.get('congratulations');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on congraaaaaaaats', function() {
        let cynResponses = responses.get('congraaaaaaaats');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on congrabulations', function() {
        let cynResponses = responses.get('congrabulations');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should not congrats on congra', function() {
        let cynResponses = responses.get('congra');
        assert.equal(0, cynResponses.length);
    });
    it('should not congrats on congraa', function() {
        let cynResponses = responses.get('congraa');
        assert.equal(0, cynResponses.length);
    });

    it('should congrats on grats', function() {
        let cynResponses = responses.get('grats');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on gratz', function() {
        let cynResponses = responses.get('gratz');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on gratzz', function() {
        let cynResponses = responses.get('gratzz');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });
    it('should congrats on gratss', function() {
        let cynResponses = responses.get('gratss');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    });

    it('should not congrats multiple times', function() {
        let cynResponses = responses.get('gzgz congratulations grats gzzzzzzz!');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    })
});
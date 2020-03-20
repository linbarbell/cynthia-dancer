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

    it('should not congrats multiple times', function() {
        let cynResponses = responses.get('gzgz congratulations grats gzzzzzzz!');
        assert.equal(1, cynResponses.length);
        assert.equal(responses.congratulations, cynResponses[0]);
    })
});
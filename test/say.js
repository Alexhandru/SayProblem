const {expect, assert} = require("chai");

const {say} = require("../src/say");

describe("Say problem tests", function(){
    it("should say 'zero'", function(){
        expect(say(0)).to.equal("zero");
;    })
});
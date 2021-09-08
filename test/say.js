const {expect, assert} = require("chai");

const {say} = require("../src/say");

describe("Say problem tests", function(){
    describe("Numbers between 0 - 19", function(){
        it("should say 'zero'", function(){
            expect(say(0)).to.equal("zero");
    ;    })
        it("should say 'one'", function(){
            expect(say(1)).to.equal("one");
        })
    });
});
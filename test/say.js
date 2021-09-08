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
    describe("Numbers between 20 - 99", function(){
        it("should say 'twenty'", function(){
            expect(say(20)).to.equal("twenty");
        });
        it("should say 'thirty'", function(){
            expect(say(30)).to.equal("thirty");
        });
        it("should say 'twenty-one'", function(){
            expect(say(21)).to.equal("twenty-one");
        });
        it("should say 'forty-five'", function(){
            expect(say(45)).to.equal("forty-five");
        });
    });
    describe("Numbers between 100 - 999", function(){
        it("should say 'one hundred'", function(){
            expect(say(100)).to.equal("one hundred");
        });
        it("should say 'two hundred'", function(){
            expect(say(200)).to.equal("two hundred");
        });
    });
});
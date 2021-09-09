const {expect, assert} = require("chai");

const {say} = require("../src/say");

describe("Say problem tests", function(){
    describe("Numbers between 0 - 19", function(){
        it("should say 'zero'", function(){
            expect(say(0)).to.equal("zero");
        });
        it("should say 'one'", function(){
            expect(say(1)).to.equal("one");
        });
        it("should say 'ten'", function(){
            expect(say(10)).to.equal("ten");
        });
        it("should say 'eleven'", function(){
            expect(say(11)).to.equal("eleven");
        });
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
        it("should say 'one hundred and one'", function(){
            expect(say(101)).to.equal("one hundred and one");
        });
        it("should say 'nine hundred and three", function(){
            expect(say(903)).to.equal("nine hundred and three");
        });
        it("should say 'six hundred seventy-eight", function(){
            expect(say(678)).to.equal("six hundred seventy-eight");
        });
        it("should say 'nine hundred fifty-three", function(){
            expect(say(953)).to.equal("nine hundred fifty-three");
        })
    });
    describe("Numbers between 1000 - 999999", function(){
        it("should say 'one thousand'", function(){
            expect(say(1000)).to.equal("one thousand");
        });
        it("should say 'four thousand'", function(){
            expect(say(4000)).to.equal("four thousand");
        });
        it("should say 'ten thousand", function(){
            expect(say(10000)).to.equal("ten thousand");
        });
        it("should say 'twenty-two thousand", function(){
            expect(say(22000)).to.equal("twenty-two thousand");
        });
        it("should say 'two hundred thousand and nineteen", function(){
            expect(say(200019)).to.equal("two hundred thousand and nineteen");
        });
        it("should say 'nine hundred ninety-nine thousand nine hundred ninety-nine", function(){
            expect(say(999999)).to.equal("nine hundred ninety-nine thousand nine hundred ninety-nine");
        });
    });
    describe("Numbers between 1000000 - 999999999", function(){
        it("should say 'one million'", function(){
            expect(say(1000000)).to.equal("one million");
        });
        it("should say 'nineteen million and twenty'", function(){
            expect(say(19000020)).to.equal("nineteen million and twenty");
        });
        it("should say 'one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine", function(){
            expect(say(123456789)).to.equal("one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine");
        });
    });
    describe("Numbers between 1000000000 - 999999999999", function(){
        it("should say 'one billion'", function(){
            expect(say(1000000000)).to.equal("one billion");
        });
        it("should say 'one billion and one'", function(){
            expect(say(1000000001)).to.equal("one billion and one");
        });
        it("should say 'two hundred forty-six billion one hundred thirty-five million nine hundred eighty-seven thousand one hundred eleven", function(){
            expect(say(246135987111)).to.equal("two hundred forty-six billion one hundred thirty-five million nine hundred eighty-seven thousand one hundred eleven");
        });
    });
    describe("Numbers between 1000000000000 - 999999999999999", function(){
        it("should say 'one trillion'", function(){
            expect(say(1000000000000)).to.equal("one trillion");
        });
        it("should say 'five hundred and five trillion four hundred and four billion three hundred and three million two hundred and two thousand one hundred and one", function(){
            expect(say(505404303202101)).to.equal("five hundred and five trillion four hundred and four billion three hundred and three million two hundred and two thousand one hundred and one");
        });
    });
});
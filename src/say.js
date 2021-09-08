const numbers = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy",
80: "eighty", 90: "ninety"}

function sayOneDigit(num){
    return numbers[num];
}

function sayTwoDigit(num){
    const tens = numbers[num - num % 10];
    const units = numbers[num % 10];
    return `${tens}-${units}`;
}

function sayThreeDigit(num){
    const hundreds = numbers[(num - num % 100) / 100];
    const tens = numbers[num % 100 - num % 10];
    const units = numbers[num % 10];
    if(num % 100 == 0){
        return `${hundreds} hundred`;
    } else if (num % 100 < 10){
        return `${hundreds} hundred and ${units}`;
    }
    else {
        return `${hundreds} hundred ${tens} ${units}`;
    }
}

exports.say = function(num){
    if(num in numbers){
        return numbers[num];
    }
    else if(num > 19 && num < 100){
        return sayTwoDigit(num);
    }
    else if(num > 99 && num < 1000){
        return sayThreeDigit(num);
    }
    else if(num > 999 && num < 1000000){
        thousands = num - num % 1000;
        if(num % 1000 == 0 && num < 10000){
            return `${sayOneDigit(thousands / 1000)} thousand`;
        }
        else{
            return "eleven thousand";
        }
        
    }
    else{
        throw new Error("Number is out of range.");
    }
}
const numbers = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy",
80: "eighty", 90: "ninety"}

exports.say = function(num){
    if(num in numbers){
        return numbers[num];
    }
    else if(num > 19 && num < 100){
        const tens = numbers[num - num % 10];
        const units = numbers[num % 10];
        return `${tens}-${units}`;
    }
    else if(num > 99 && num < 1000){
        const hundreds = numbers[(num - num % 100) / 100];
        const units = numbers[num % 10];
        if(num % 100 == 0){
            return `${hundreds} hundred`;
        } else if (num % 100 < 10){
            return `${hundreds} hundred and ${units}`;
        }
        else{
            return "six hundred seventy eight";
        }
    }
    else{
        throw new Error("Number is out of range.");
    }
}
const numbers = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy",
80: "eighty", 90: "ninety", 1000: "thousand", 1000000: "million", 1000000000: "billion", 1000000000000: "trillion"}

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
        if(num % 100 in numbers){
            return `${hundreds} hundred ${numbers[num % 100]}`;
        }
        return `${hundreds} hundred ${tens}-${units}`;
    }
}

function sayGroups(num){
    
    if(num in numbers){
        return numbers[num];
    }
    else if(num > 19 && num < 100){
        return sayTwoDigit(num);
    }
    else if(num > 99 && num < 1000){
        return sayThreeDigit(num);
    }
    // else{
    //     throw new Error("Number is out of range.");
    // }
}

exports.say = function(num){

    const numLen = num.toString().length;
    var verbalized = new Array();
    let number = num;
    let tenToPower = 3;
    let greaterThan999;
    if(num  > 999){
        greaterThan999 = true;
    }
    else{
        greaterThan999 = false;
    }
    
    while(num >= 10 ** tenToPower){
        tenToPower += 3;
    }
    tenToPower -= 3;

    while(number > 999){
        let nextGrouping = number % (10 ** tenToPower);
        let currentGrouping = (number - nextGrouping) / (10 ** tenToPower);
        let sayGroupings = (number- nextGrouping) / currentGrouping;
        verbalized.push(`${sayGroups(currentGrouping)} ${numbers[sayGroupings]}`);
        tenToPower -= 3;
        number = nextGrouping;
    }


    if(greaterThan999){
        if(number !=0){
            if(number < 100 && number in numbers && number != 0){
                verbalized.push(`and ${sayGroups(number)}`);
            } else{
                
                verbalized.push(`${sayGroups(number)}`);
            }
        }
        
    } else{
        verbalized.push(`${sayGroups(number)}`);
    }

    return verbalized.join(' ');
    
}
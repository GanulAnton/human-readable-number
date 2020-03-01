module.exports = function toReadable (number) {
    var unitsArr = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tenArr =['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if(number >= 0 && number <= 19){
        return unitsArr[number];
    }else if(number/100 >= 1){
        var firstNumber = Math.floor(number/100); 
        if(number - 100*firstNumber > 19){
            var secondNumber = Math.floor((number - 100*firstNumber)/10); 
            var thirdNumber = number - 100*firstNumber - 10*secondNumber;   
        }else{
            var secondNumber = number - 100*firstNumber;
            var thirdNumber = 0;
        }
        if(secondNumber == 0 && thirdNumber == 0){
            var number = unitsArr[firstNumber] + ' hundred';
        }else if(number - 100*firstNumber < 20){
            var number = unitsArr[firstNumber] + ' hundred ' + unitsArr[secondNumber];
        }else if(thirdNumber == 0){
            var number = unitsArr[firstNumber] + ' hundred ' +  tenArr[secondNumber-2];
        } else if(secondNumber == 0){
            var number = unitsArr[firstNumber] + ' hundred ' + unitsArr[thirdNumber];
        }
        else{
            var number = unitsArr[firstNumber] + ' hundred ' +  tenArr[secondNumber-2] + ' ' + unitsArr[thirdNumber];
        }
    }else if(number/10 >= 1){
        var secondNumber = Math.floor(number /10);
        var thirdNumber = number - 10*secondNumber;
        if(thirdNumber == 0){
            var number =tenArr[secondNumber-2];
        }else{
            var number =tenArr[secondNumber-2] + ' ' + unitsArr[thirdNumber];
        }

    }
    return number;
}
function Add(numbers){

    let result = 0;
    let negativeNumber = [];

    if (numbers === "") return 0;

    const numbersToAdd = numbers    
    .split(/[^0-9-]+/)    
    .map(Number)

    for(const number of numbersToAdd) {
        if( number >= 0) {
            result = result + number;
        }else {
            negativeNumber.push(number);
        }
        }

    if( negativeNumber.length == 1) {
        throw new Error("negatives not allowed | " + negativeNumber[0]);
    }else if (negativeNumber.length > 1){
        let stringNumbers = "";
        for(const negative of negativeNumber){
            stringNumbers = stringNumbers + " " + negative;
        }
        throw new Error("negatives not allowed |" + stringNumbers);
    }
    else{
        return result;
    }
}

module.exports = Add;
function Add(numbers){

    let result = 0;

    if (numbers === "") return 0;

    const numbersToAdd = numbers    
    .split(/[^0-9-]+/)    
    .map(Number)

    for(const number of numbersToAdd) {
        console.log(number);
        if( number >= 0) {
            result = result + number;
        }else{
            throw new Error(
                "negatives not allowed | " + number
            );
        }
    }

    return result;
}

module.exports = Add;
function Add(numbers){

    if (numbers === "") return 0;
    return numbers    
    .split(/,|\r?\n/)    
    .map(Number)    
    .reduce((nx, n) => nx + n, 0);
}

module.exports = Add;
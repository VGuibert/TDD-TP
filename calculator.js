function Add(numbers){

    if (numbers === "") return 0;
    return numbers    
    .split(/[^0-9]+/)    
    .map(Number)    
    .reduce((nx, n) => nx + n, 0);
}

module.exports = Add;
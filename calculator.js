function Add(numbers1,numbers2){
    const sum =  numbers1 + numbers2;

    if( numbers1 == '' || numbers2 == ''){
        return 0;
    }else {
        return sum;
    }
}

module.exports = Add;
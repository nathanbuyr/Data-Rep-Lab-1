const ages = [25, 31, 42, 77];

//using .map, this function creates a new array from the old array, adding the multiplied values in.
let d = ages.map((num) => {
    if(num < 70){
        return num * 2;
    }
    else{
        return num;
    }

})

console.log(d);
const ages = [25, 31, 42, 77];

let d = ages.map((num) => {
    if(num < 70){
        return num * 2;
    }
    else{
        return num;
    }

})

console.log(d);
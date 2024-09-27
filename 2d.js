const ages = [25, 31, 42, 77];
const newArr = ages.map(d);

function d (num) {
    if(num < 70){
        return num * 2;
    }
    else{
        return num;
    }

}

console.log(newArr);
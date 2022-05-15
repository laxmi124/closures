

function toggle(){
    let arr = arguments;
    // console.log(arr)

    let index = 0;

    return function(){
        if (index >= arr.length) index = 0
        return arr[index++]
    }
}

let a = toggle(1,2,3);
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
let a = [1, 2, 3, 4, ];
let a2 = a.map((value)=>{
    return value*2;
})
// console.log(a, a2)

// Javascript Filter
let b = [1, 2, 3, 4, 5, 64, 34, 12, 9];
let a3 = b.filter((value)=>{
    return value>6;
})
// console.log(b, a3)

// Javascript Reduce
let c = [1, 2, 3, 4];
let a4= c.reduce((val1, val2)=>{
    return val1 + val2;
})
console.log(a4)
// 3,3,4
// 6,4
// 10
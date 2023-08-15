// Spread Operator and destructuring 
arr = [1, 2, 4, 6, 32] 
function avg(a, b, c){
    return a+b+c/3
}
// let a = avg(...arr)
let a= [4,4, ...arr,67]
// let a= [...arr];
// console.log(a)
// spread Operator means app arr ko khul skty hai.

let obj1 = {
    name:"ali",
    class: "10",
    favlag: "Java",
}
let obj2= {}
obj2.name = obj1.name;
obj2.class = obj1.class;
obj2.favlag = "JavaScript";
console.log(obj2)


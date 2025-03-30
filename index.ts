function sum(a :number,b: number) {
    return a + b;
}
let sumResult = sum(13, 10);
console.log(sumResult); // Output: 15
function greet(name:string):string{
    return name + "Yashwanth Sure"
}
greet("Hello")
function evenOrOdd(num:number):string{
    if(num%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(evenOrOdd(10)); // Output: Even
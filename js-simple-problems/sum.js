/* const number = [44, 25, 32, 71, 36, 48, 65];

let sum =  0 ;
for (let i = 0; i < number.length; i++) {
    const element = number[i];
  
    sum = sum + element
    
    
   
    
} */

function totalArry(number){
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element 
    }
    return sum
}
console.log(totalArry([50, 20]))
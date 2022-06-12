


//  const odd = arr.filter( number =>{
//      return number % 2 !==0
//  })

// console.log(odd)
 

// const odds=[]

// arr.forEach(num =>{
//     if(num %2 !==0){
//     odds.push(num)
//     }
// })

// console.log(odds)


 function odd(nums){
        
        bejor=[];
        jor=[];

    for (let i = 0; i < nums.length; i++) {
       if(nums[i] %2 !==0){
        bejor.push(nums[i])
       }
       else{
           jor.push(nums[i])
       }
        
    }



 }

 
const arr = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14] 
console.log(odd(arr))
console.log(bejor);
console.log(jor)
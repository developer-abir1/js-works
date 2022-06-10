function largersElemnet(number ){
let largers = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
         if(element > largers){
            largers = element
         }
    }
 return largers
}

// const age = [44, 32, 48, 69, 64,75, 20];
// const oldes  = largersElemnet(age)
//   console.log(oldes)


function lowestNumber(number ){
    let lowest = number[0]
    for (let i = 0; i < number.length; i++) {

        const element = number[i]; 
        if(element < lowest){
            lowest = element
        }
        
    }
    return lowest

}

const age = [44, 32, 48, 69, 64,75, 20];

const lowest = lowestNumber(age) 
const lowest2 = lowestNumber([-25 ,-36, -15, -68, -54])
console.log('this is lowest2' , lowest2)
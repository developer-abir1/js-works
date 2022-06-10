// const myStr="hello how are you kmn ase?";

// for(const element of myStr){
    
// }

// function reversString(text){

//     let rever ="";
//     for(const letter of text){
//       rever=   letter - rever 
//     }
//     return rever
// }

// console.log(reversString(myStr))

function reverseString(str) {
    return str.split("").reverse().join(" ");
}
console.log(reverseString("hello"))

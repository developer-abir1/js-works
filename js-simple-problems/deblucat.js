

const arr = ["abul", "kabul " , "habul " , "dabul" , "abul"  , "kabul", "kabul", "kabul", "kabul", "kabul" , "hassn" , "abir" , "abir"];
function removeItem(names){

    const unice= []
    for(const element of names){
       if(unice.indexOf(element) == -1  ){
           unice.push(element)
       }
     
    }
    return unice
    
}

const result = removeItem(arr) 
console.log(result)
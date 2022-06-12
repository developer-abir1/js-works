
const factroialNumber= 1

function factroial(i){

    if(i==1){
        return 1
    }
    return i * factroial(--i)
  
}
console.log(factroial(5))
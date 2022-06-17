function sum( ){
  const argu = arguments;
  let total = 0;
  for(const num of argu){
   total =    total + num
   
  }
return total

}

console.log(sum(24 ,80, 67, 27,700))
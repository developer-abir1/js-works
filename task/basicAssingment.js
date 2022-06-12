                function anaToVori(vori){

                    const ana = vori /16
                return ana
                
                }


            // console.log(anaToVori(20))

            function pandaCost(singar , somoca , jilpe){

                const singarPrice = 7;
                const somocaPrice = 10;
                const jilapPrice = 15;

                const sinarItem=   singarPrice * singar;
                const somocaItem = somocaPrice *somoca;
                const jilapItem = jilapPrice *jilpe; 

            const total = sinarItem + somocaItem + jilapItem 
            return total

            }
        // console.log(pandaCost(2 ,0 , 2))


            // function picnicBuget(buget){
   
            //     const personNumbre = 100;
  
            //     const 


            //     if(personNumbre < buget){

                   

            //     }


                
            // }
            // console.log(picnicBuget(98))

const friendArr = ["abirhassn" , "kobir hassn ", "my dada" , "azavai", "ka" , "boysakhi" , "kobir hassan" , "abir" , "ka" , "abir"]

function oddFrien(arry){

    const oddName=[]

     for (const element of arry) {
        //  console.log(element)
    //  if(element.length %2 !==1){
    //   console.log(element)
   if(oddName.indexOf(element) == -1){
     oddName.push(element)
   }
        
     }
     
return oddName

}

const result = oddFrien(friendArr)
console.log(result)

const myStr = "abbir khan";
function reversItem(text){

    let revers = ""

    for(const letter of text){
        revers = letter + revers
    }
return revers
}
console.log(reversItem(myStr))
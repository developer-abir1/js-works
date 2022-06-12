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

const friendArr = ["abir hassn" , "kobir hassn ", "my dada" , "aza vai"]

function oddFrien( ){

     for (let i = 0; i < friendArr.length; i+=2) {
        const element = friendArr[i];
        console.log(element.length)
        
     }

}

oddFrien()
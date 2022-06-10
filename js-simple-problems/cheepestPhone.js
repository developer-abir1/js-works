const phones = [
    {
        name:"Motorla Gx",
        price:75000,
        camera:20,
        store:64
    },
    {
        name:"Sony Xron pL",
        price:90000,
        camera:10,
        store:64
    },
    {
        name:"I Phone",
        price:68700,
        camera:38,
        store:35
    },
    {
        name:"Xiomi Note 9 Pro",
        price:97456,
        camera:6366,
        store:64
    },
    {
        name:"Itel",
        price:355444,
        camera:10,
        store:64
    },
    {
        name:"sumsangs glaxy",
        price:2500,
        camera:22,
        store:64
    },
]

function cheepestPhone(){

   
    let cheepPhone = phones[0]

    for(const element of phones){
        if(element.price > cheepPhone.price && element.store > cheepPhone.store){
            cheepPhone = element
        }
      
    }
    return cheepPhone
}
// console.log(cheepestPhone())


function reversStrin(text){

    
    let revers = ""
   for(const element of text){
    revers = element + " "+ revers
   }
return revers
   
}


const item = "JavaScript";

const result = reversStrin(item);
console.log(result)
const products =[
    "dell hardcore i985 200GB laptop",
    "iphoen 1TB camera flashlight phone ",
    'Yellow Laptop whit black',
    "LG Lanove type of my Have phone and Laptop"
]

const searching = "Laptop";
const outPut  = [];
// for(const product of products){
//     if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase())  != -1){
//         outPut.push(product)
//     }
// } 

for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        outPut.push(product)
    }
}

console.log(outPut)
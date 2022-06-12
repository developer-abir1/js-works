const products =[
    {name: "sumsang glaxay" , price:175000},
    {name: "Iphne " , price:20146},
    {name: "Xiomi F20" , price:39771},
    {name: "Howay phone" , price:24771},
    {name: "Itel phone" , price:2100},
    {name: "Apple Wacth" , price:410544},
    {name: "Smart  Wacth" , price:410544},
]

function searchProducts(products , searchText){

    const result  = [];
    for(const product of products){
  
        if(product.name.includes(searchText)){
            result.push(product)
        }
    }
    return result
}

const find = searchProducts(products , 'Itel');
console.log(find)
const products =[
    {name: "sumsang glaxay" , price:6000},
    {name: "Iphne " , price:3000},
    {name: "Xiomi F20" , price:20000},
    {name: "Howay phone" , price:70000},
    {name: "Itel phone" , price:2100},
    {name: "Apple Wacth" , price:2700},
    {name: "Smart  Wacth" , price:4000},
]

for(const product of products ){
    if(product.price < 5000){
        break
    }
    console.log(product)
} 
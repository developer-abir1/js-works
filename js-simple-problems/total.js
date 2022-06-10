const cart = [
    {name:"Logest Sart" , price:17500 , quantity:5},
    {name:"Pant" , price:700 , quantity:2},
    {name:"Watch" , price:400 , quantity:6},
    {name:"Iphone" , price:5500, quantity:8},
]
 
     let cartTotal=0;
    for(const product of cart){
        
       const productTotal =  product.price * product.quantity;

       
       cartTotal = cartTotal + productTotal

        
    } 
    console.log(cartTotal)
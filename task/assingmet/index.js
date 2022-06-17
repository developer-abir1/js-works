console.log("hello world");
const mainAmount  = document.getElementById('incomeAmmount') ;
const foodAmmmount  = document.getElementById('foodAmmmount') ;
const rentAmmont  = document.getElementById('rentAmmont') ;
const otherAmmoutn  = document.getElementById('otherAmmoutn') ;

const otherBuy =[
    foodAmmmount,
    rentAmmont,
    otherAmmoutn
]


const handleCalculate =()=>{
    
    if(foodAmmmount === Number && rentAmmont === Number && otherAmmoutn  === Number ){
        
for(const others of otherBuy){
    const 
    console.log(others.value)
}
    }
    else{
        alert("plase enter number ")
    }
    
    console.log(mainAmount.value)
}
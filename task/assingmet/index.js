console.log("hello world");
const mainAmount  = document.getElementById('incomeAmmount') ;
const foodAmmmount  = document.getElementById('foodAmmmount') ;
const rentAmmont  = document.getElementById('rentAmmont') ;
const otherAmmoutn  = document.getElementById('otherAmmoutn') ;
const totalExpenses = document.getElementById('totalExpenses');
const blance = document.getElementById('blance');
const saveAmmont = document.getElementById('saveAmmount');
const saveingAmmount = document.getElementById('savingAmmon');
const runningBalance = document.getElementById('runnigBalance');


const otherBuy =[
    foodAmmmount,
    rentAmmont,
    otherAmmoutn
] 
const handleCalculate =()=>{ 

           let TotlaotherValue = 0;
            for(const others of otherBuy){
             
                const othersNumber = others.value 
                const othersValue = parseFloat(othersNumber)
                TotlaotherValue = othersValue + TotlaotherValue;

               others.value = "" 
            }
            const mainAmountNumber  = parseFloat(mainAmount.value)
         
    
        const slaryAmmout = mainAmountNumber -   TotlaotherValue;
        const totalExpensesNumber=  totalExpenses.innerText = TotlaotherValue;
        const blanceAmount = blance.innerText = slaryAmmout
        return totalExpensesNumber ,blanceAmount

        }    
        // handle Save Ammount 
        const handleSaveAmmount =() =>{

            const saveAmmountNumber = parseInt(saveAmmont.value);
            const mainAmmount = parseInt(mainAmount.value);
            const saveAmmounts = saveAmmountNumber * mainAmmount ;
            const totalAmounts = saveAmmounts / 100;
            const saveingAmmouns = saveingAmmount.innerText = totalAmounts; 
const runningBalanceAmmount = mainAmmount -  saveingAmmouns;
        const   totalRunningBalance  =   runningBalance.innerText = runningBalanceAmmount
            return saveingAmmouns , totalRunningBalance


        }
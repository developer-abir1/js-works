console.log("Hello world")

                function getPin (){
                    const pin = Math.round(Math.random() * 10000)
                    const pinStr = pin + "";
                    if(pinStr.length == 4){
                        return pin

                    }
                    else {
                        
                        return getPin()
                    }

                }


            function generatePin(){
                const pin = getPin()
                document.getElementById('display-pin').value = pin 
            }

                document.getElementById("key-pad").addEventListener("click" , function(e) {
                
                const number = e.target.innerText

                const calc =  document.getElementById("calc-input") ;
                if(isNaN(number)){
                if(number == "C"){
                    calc.value = ""
                }
                }else{
                
                const previesCalc = calc.value ;
                const newCalc= previesCalc + number
                calc.value = newCalc
               
                }
               
                
                })
                document.getElementById("pinMached").style.display = "none";
                document.getElementById("pinNotMatch").style.display = "none";
                document.getElementById("pleaseTry").style.display ="none"
                const veryfyPin = () =>{
                 const pin = document.getElementById("display-pin").value;
                 const typePin = document.getElementById("calc-input").value;
                 const notifySuccess =  document.getElementById("pinMached")
                 const notifyFild =  document.getElementById("pinNotMatch")
                 const typeNotify = document.getElementById("pleaseTry") 
                 if(typePin.length == 4){
                  typeNotify.style.display ="none"
                 }else{
                    typeNotify.style.display ="block"
                 }
               
                if( pin === typePin){
                   notifySuccess.style.display = "block";
                   notifyFild.style.display = "none"
                }
                else{
                   notifyFild.style.display = "block"
                   notifySuccess.style.display = "none";
                }


                }

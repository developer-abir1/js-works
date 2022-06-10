 

    const fibo = [0, 1]
    for (let i = 2; i <=20; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
        
    } 

     
    function fibonacci (num){
        if(typeof num !== 'number'){
            return "plese valid number"
        }
        if(num < 2) {
            return "plase geterthen 1 number "
        }

        const fibo = [0,1]
        for (let i = 2; i <=num; i++) {
            
            fibo[i ] = fibo[i -1] + fibo[i -2]
            
        }
        return fibo
    }

    const fiboNumber = fibonacci("0")
    console.log(fiboNumber)

    const numnber  = Math.round(12.96)
    console.log(numnber)
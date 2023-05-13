let botaoEnviar = document.querySelector(".button-submit");

botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();

    let day = document.querySelector("#day").value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let inputs = document.querySelectorAll('.date-birth input[required]');

    // removendo error dos inputs com focus
    inputs.forEach(input =>{
        input.addEventListener('focus', () =>{
            input.classList.remove('error')

        })

        
    })
    // mensagem de erro
    if(day.value === '' || month.value === '' || year === ''){

        event.preventDefault();
        inputs.forEach(input => {

            if(input.value === ''){
                input.classList.add('error')
            }
        });

    }
    else{
        
        
        inputs.forEach(input => {
                if( day > 31 || day < 1 || month > 12 || month < 1 ){
                    preventDefault()
                    input.classList.add('error')
                }
            })
        
        // Pega o ano, mes e dia atual
        const currentDate= new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
    

        let myAge =  currentYear - year;
        let myMonth = currentMonth >= month?currentMonth - month : 12 - (month - currentMonth);

        if(currentMonth < month){
            myAge--;
        }

        //  dias
        let days = (currentDay - day); 
        console.log('dias ' + days);
        let numberPositivo = Math.abs(days)
        console.log('dias positivos ' + numberPositivo);


        let myDays; 

        if (days < 0 ){
            myMonth--;
            myDays = 31 - numberPositivo;
        }
        else{
            myDays = 31 - numberPositivo;
        }
        // Mostra na tela o resultado 
        
            let showYear = document.querySelector('.result-birth .years');
            showYear.innerHTML = myAge
            let showMonth = document.querySelector('.result-birth .months')
            showMonth.innerHTML = myMonth;
            let showDays = document.querySelector('.result-birth .days');
            showDays.innerHTML = myDays;

            
    }


    

    


  


})
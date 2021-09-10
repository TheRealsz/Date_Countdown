function submit(){
    if(document.getElementById('inputDate').value == ""){
        alert("Coloque uma data")
        return
    } else{
        const title = document.getElementById("inputTitle").value;
        const data = new Date(document.getElementById("inputDate").value).getTime()
        const titleUser = document.getElementsByClassName("titleUser")[0]
        const dataUser = new Date(document.getElementById("inputDate").value).toLocaleString('pt-BR', {weekday: "long", day: "numeric", year: "numeric", month: "long", hour: "numeric", minute: "numeric", second: "numeric",})
        const button = document.getElementsByClassName("btn btn-outline-dark")[0]

        button.disabled = true

        if (title !== "") {
            titleUser.innerHTML = title
            titleUser.style.padding = "10px"
            
            document.getElementsByClassName("dateUser")[0].innerHTML = dataUser
            
            const func = setInterval(function() {
                
                const dateNow = new Date().getTime()
                const timeSubtr = data - dateNow
                const days = Math.floor(timeSubtr / (1000 * 60 * 60 * 24))
                const hours = Math.floor((timeSubtr % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeSubtr % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeSubtr % (1000 * 60)) / 1000);
                
        
                document.getElementsByClassName("countdown")[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "


                if (timeSubtr < 0) {
                    clearInterval(func);
                    document.getElementsByClassName("countdown")[0].innerHTML = "EXPIRED";  
                }
        

                
            },1000)
        } else {
            document.getElementsByClassName("dateUser")[0].innerHTML = dataUser

            const func = setInterval(function() {
                
                const dateNow = new Date().getTime()
                const timeSubtr = data - dateNow
                const days = Math.floor(timeSubtr / (1000 * 60 * 60 * 24))
                const hours = Math.floor((timeSubtr % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeSubtr % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeSubtr % (1000 * 60)) / 1000);
                
        
                document.getElementsByClassName("countdown")[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "


                if (timeSubtr < 0) {
                    clearInterval(func);
                    document.getElementsByClassName("countdown")[0].innerHTML = "EXPIRED";  
                }
        
            },1000)

        }    
        //Adicionar outro botao fazendo com que apague a data escolhida e deixe que a pessoa escolha outra data, habilitando o submit novamente
    }        
}


//Ajustar para que o usuario coloque quantas datas ele quiser
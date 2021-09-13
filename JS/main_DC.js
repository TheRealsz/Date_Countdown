let func;
let func2

function submit(){
    if(document.getElementById('inputDate').value == ""){
        alert("Coloque uma data")
        return
    } else{
        const title = document.getElementById("inputTitle").value;
        const data = new Date(document.getElementById("inputDate").value).getTime()
        const titleUser = document.getElementsByClassName("titleUser")[0]
        const dataUser = new Date(document.getElementById("inputDate").value).toLocaleString('pt-BR', {weekday: "long", day: "numeric", year: "numeric", month: "long", hour: "numeric", minute: "numeric", second: "numeric",})
        const button = document.getElementsByClassName("submit-button")[0]

        button.disabled = true

        if (title !== "") {
            titleUser.innerHTML = title
            titleUser.style.padding = "10px"
            
            document.getElementsByClassName("dateUser")[0].innerHTML = dataUser
            
             func = setInterval(function() {
                
                const dateNow = new Date().getTime()
                const timeSubtr = data - dateNow
                const days = Math.floor(timeSubtr / (1000 * 60 * 60 * 24))
                const hours = Math.floor((timeSubtr % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeSubtr % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeSubtr % (1000 * 60)) / 1000);
                
        
                document.getElementsByClassName("countdown")[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "


                if (timeSubtr < 0) {
                    clearInterval(func);
                    document.getElementsByClassName("countdown")[0].innerHTML = "Expirou!";  
                }
        

                
            },1000)
        } else {
            document.getElementsByClassName("dateUser")[0].innerHTML = dataUser

             func2 = setInterval(function() {
                
                const dateNow = new Date().getTime()
                const timeSubtr = data - dateNow
                const days = Math.floor(timeSubtr / (1000 * 60 * 60 * 24))
                const hours = Math.floor((timeSubtr % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeSubtr % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeSubtr % (1000 * 60)) / 1000);
                
        
                document.getElementsByClassName("countdown")[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "


                if (timeSubtr < 0) {
                    clearInterval(func2);
                    document.getElementsByClassName("countdown")[0].innerHTML = "Expirou!";  
                }
        
            },1000)
             
        }    
        const divButtonCleanSubmit = document.getElementsByClassName("button-test")[0];
        divButtonCleanSubmit.style.display = "flex";
        document.getElementById('inputTitle').value = ""  
        document.getElementById('inputDate').value = ""  
        
    }        
}

function cleanSubmit() {
    const titleUser = document.getElementsByClassName("titleUser")[0]
    titleUser.innerHTML = ""
    titleUser.style.padding = "0px"
    document.getElementsByClassName("dateUser")[0].innerHTML = ""
    clearInterval(func)
    clearInterval(func2)
    document.getElementsByClassName("countdown")[0].innerHTML = "";
    const button = document.getElementsByClassName("submit-button")[0]
    button.disabled = false  
    const divButtonCleanSubmit = document.getElementsByClassName("button-test")[0];
    divButtonCleanSubmit.style.display = "none"
}
// const divButtonCleanSubmit = document.getElementsByClassName("clean-submit")[0]
//Ajustar para que o usuario coloque quantas datas ele quiser
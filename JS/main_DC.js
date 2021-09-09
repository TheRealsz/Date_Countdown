function submit(){
    const title = document.getElementById("inputTitle").value;
    const data = new Date(document.getElementById("inputDate").value).getTime()
    const titleUser = document.getElementsByClassName("titleUser")[0]
    const dataUser = new Date(document.getElementById("inputDate").value).toLocaleString('pt-BR', {weekday: "long", day: "numeric", year: "numeric", month: "long", hour: "numeric", minute: "numeric", second: "numeric",})

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
  
        
        // document.getElementsByClassName("titleUser")[0].innerHTML = title;
        // document.getElementsByClassName("dateUser")[0].innerHTML = data; //terminar mais pra frente
        
        // console.log(dateNow)
        // console.log(timeNow)
        
    },1000)

}
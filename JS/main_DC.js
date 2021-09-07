function submit(){
    const title = document.getElementById("inputTitle").value;
    const data = new Date(document.getElementById("inputDate").value).getTime()
    const hours = document.getElementById("inputHours").value
    const dateNow = new Date().getTime()
    
    const func = setInterval(function() {
        
        const timeSubtr = data - dateNow
        const days = timeSubtr / (1000 * 60 * 60 * 24)
        const daysFormat = days.toFixed(0)
        document.getElementsByClassName("day")[0].innerHTML = daysFormat + "d"
  
        
        // document.getElementsByClassName("titleUser")[0].innerHTML = title;
        // document.getElementsByClassName("dateUser")[0].innerHTML = data; //terminar mais pra frente
        
        // console.log(dateNow)
        // console.log(timeNow)
        
    },1000)

}
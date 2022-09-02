let divs=document.querySelectorAll(".co");
divs.forEach(x=>{
    x.addEventListener("click",function(){
    let nam=x.className
    let tdat=document.getElementById("txt")
    tdat.innerHTML=nam.substring(3)
    tdat.style.backgroundColor=nam.substring(3)
    tdat.style.color="white"
    })

})
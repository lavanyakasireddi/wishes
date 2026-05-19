let btn1=document.getElementById("btn1")
let div1=document.getElementById("loginmodel")
let btn2=document.querySelector("span")
// console.log(btn1,div1)
div1.style.right="-350px"
div1.style.transition="2s ease"
btn1.addEventListener("click",()=>{
    // div1.style.display="none"
    if(div1.style.right=="-350px"){
        div1.style.right="0px"
        document.body.style.backgroundColor="black"
       div1.style.color="black"
    }
    else{
        div1.style.right="-350px"
        document.body.style.backgroundColor="white"
       
    }
    div1.style.right="0px"
})
btn2.addEventListener("click",()=>{
    div1.style.right="-350px"
})
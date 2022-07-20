
let hamburger = document.querySelector(".hamburger");
let body =  document.querySelector("body");
let container = document.querySelector(".container");

/*toggle이란 active라는 클래스명이 있다면 제거 없다면 생성*/
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");

})

window.onresize = function(event){
    let innerWidth = window.innerWidth;
    if(innerWidth>="700")
    {
        if(body.classList.contains("active")){
            body.classList.remove("active");
        }
    }
    else{
        body.classList.add("active");
        body.style.width=innerWidth;
    }
}



let num = document.getElementsByClassName("num");
let sec = document.querySelector(".sec");
let inp = document.querySelector(".inp");
let timer = document.querySelector(".timer");
let resDiv = document.querySelector(".resDiv");
let next = document.querySelector(".next");
let resP = document.querySelector(".resP");
let startGame = document.querySelector(".startGame");
let footer = document.querySelector(".footer");
let footerBtn = document.querySelector(".showFooter")

num[0].innerHTML = Math.floor(Math.random() * 91);
num[1].innerHTML = Math.floor(Math.random() * 61);

let res = +num[0].innerHTML + +num[1].innerHTML;
let time = 30;
let score = 0;
let div = document.createElement("div");
div.innerHTML = "next";
div.classList.add("next2");
let x =false;

function clacRes(){
    document.body.onkeyup=function(){
        if(inp.value == res){
            // clearInterval(1);
            inp.style.color="blue";
            resDiv.style.top="50px";
            score++;
            time +=  5;
            resP.innerHTML = score;
            next.style.display="none";
            resDiv.appendChild(div);
            x=true;
        }
    }
}

function timeDown(){
    setInterval(function(){
        time--;
    },1000)
}

function start(){
    sec.style.filter="none";
    startGame.style.top="-600px";
    inp.focus();
    clacRes();
    timeDown();
}
setInterval(function(){
    timer.innerHTML = time;
    if(time <= 0){
        // clearInterval(1);
        time=60;
        timer.style.opacity="0";
        inp.style.color = "red";
        inp.style.display="none";
        resP.innerHTML = score;
        resDiv.style.top = "50px";
        resP.style.color = "#2c2c2c";
        div.style.display = "none";
        next.style.display = "flex";
        x = true; 
    }
},100)

next.onclick=function(){
    num[0].innerHTML = Math.floor(Math.random() * 91);
    num[1].innerHTML = Math.floor(Math.random() * 61);
    resDiv.style.top="-550px";
    inp.value = " ";
    inp.style.color="#2c2c2c";
    res = +num[0].innerHTML + +num[1].innerHTML;
    time =  30;
    timer.style.opacity="1";
    // timeDown();
    clacRes();
    x = false;
    inp.style.display="block";
    inp.focus();
}
div.onclick=function(){
    num[0].innerHTML = Math.floor(Math.random() * 91);
    num[1].innerHTML = Math.floor(Math.random() * 61);
    resDiv.style.top="-550px";
    inp.value = " ";
    inp.style.color="#2c2c2c";
    res = +num[0].innerHTML + +num[1].innerHTML;
    timer.style.opacity="1";
    // timeDown();
    clacRes();
    x = false;
    inp.style.display="block";
    inp.focus();
}

footerBtn.onclick=function(){
    footer.classList.toggle("ftr");
}

// setInterval(function(){
//     if(x === true){
//         document.body.addEventListener("keyup", (event) => {
//             if(event.key === "Enter"){
//                 div.click();
//             }
//         })
//     }
// },100)
const eyeBtn = document.querySelector('.fa-eye');

const initialText = document.querySelector('#acc-balance');

var id=document.getElementsByName("button")[0].id;

console.log(initialText);

eyeBtn.addEventListener("click", ()=> {
    var id=document.getElementsByName("button")[0].id;
    if(id==1)
    {
        document.querySelector("#acc-balance").innerHTML = "0.00";
        document.getElementsByName("button")[0].id=0;
        console.log("clicked");
    } else {
        document.querySelector("#acc-balance").innerHTML = "******";
        document.getElementsByName("button")[0].id=1;
        console.log("toggled");
    }
})


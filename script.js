var x = document.querySelector(".bulb");
var m = document.querySelector("body")
var f = 0;
x.addEventListener("click", function ()
{
    if(f==0)
    {
        m.style.backgroundColor = "white";
        x.style.backgroundColor = "yellow";
        x.style.borderColor = "gold";
        f = 1;
    }
    else {
        m.style.backgroundColor = "black";
        x.style.backgroundColor = "transparent";
        x.style.borderColor = "white";
        f = 0;
    }
})
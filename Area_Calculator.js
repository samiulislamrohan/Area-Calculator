function rectangle()
{
    var h=document.getElementById("height").value;
    
    var w=document.getElementById("width").value;
    if (h===NaN || w===NaN)
        {
            alert("You can't leave any box empty");
        }
    var area=h*w;
    document.getElementById("rarea").value=area;
}
function square()
{
    var l=document.getElementById("length").value;
    var area=l*l;
    document.getElementById("sarea").value=area;
    
}
function triangle()
{
    var h=document.getElementById("h").value;
    var b=document.getElementById("base").value;
    var area=0.5*h*b;
    document.getElementById("tarea").value=area;
    
}

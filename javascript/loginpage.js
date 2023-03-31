function fun()
{
    var emailof="ayyappa@123";
    var passof="1234";
    var mailch=document.getElementById("email").value
    var passch=document.getElementById("pas").value;
    if (emailof != mailch &&  passof==passch)
    {
        document.getElementById("bdy").style.backgroundImage="linear-gradient(90deg,red,rgb(52, 208, 65))"
        document.getElementById("result").innerHTML="Wrong email Address"
        document.getElementById("email").style.border="3px solid red"
        document.getElementById("pas").style.border="3px solid blue"
    }
    else if (emailof == mailch && passof!=passch)
    {
        document.getElementById("email").style.border="3px solid blue"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(90deg,rgb(230, 6, 144),red)"
        document.getElementById("result").innerHTML="Wrong password"
        document.getElementById("pas").style.border="3px solid red"
    }
    else if (emailof != mailch && passof!=passch)
    {
        document.getElementById("bdy").style.backgroundImage="linear-gradient(90deg,red,red)"
        document.getElementById("result").innerHTML="Wrong email and password"
        document.getElementById("pas").style.border="3px solid red"
        document.getElementById("email").style.border="3px solid red"
    }
    else
    {
       document.getElementById("fom").setAttribute("action","./html/gallery.html");
       document.getElementById("sbt").setAttribute("type","submit")
    }
}
function passopen()
{
    document.getElementById("pas").removeAttribute("type")
    document.getElementById("img").setAttribute("src","./assets/logos/eyesopen.jfif")
}
function passclose()
{
    document.getElementById("pas").setAttribute("type","password")
    document.getElementById("img").setAttribute("src","./assets/logos/eyesclose.jfif")
}
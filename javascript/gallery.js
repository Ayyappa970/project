var imagesArray=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg"]
var i=0;
function header()
{
    if (i>=imagesArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]})`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]})`
    }
    i++;
    var time=setTimeout(header,20000)
}
function rightClick()
{
    i++;
    if (i>imagesArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]})`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]})`
    }
}
function leftClick()
{
    i--;
    if (i<0)
    {
        i=imagesArray.length-1;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]})`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]})`
    }
}
var img=document.getElementsByClassName("images")
console.log(img)
for(i=0;i<=img.length-1;i++)
{
    img[i].src=`../assets/images/${i}.jpg`
}
function openImage(img)
{
    console.log(img)
    document.getElementById("bigimage").removeAttribute("style")
    document.getElementById("bimg").setAttribute("src",`../assets/images/${img}.jpg`)
}
function closeImage()
{
    document.getElementById("bigimage").setAttribute("style","display:none")
}
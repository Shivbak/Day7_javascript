var event = document.getElementById("button");
 event.addEventListener('click',myfirst,false);

function myfirst()
{
    var userinput = document.getElementById("input").value;
    
    for(var i =0;i<userinput.length ; i++)
        {
            document.getElementById("demo").innerHTML += userinput.charAt(i);
        }
}
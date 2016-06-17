var event = document.getElementById("button");
    event.addEventListener('click',myfirst,false);

function myfirst()
{
    
    var userinput = document.getElementById("input").value;
    
    var lowcase = userinput.toLowerCase();
    
    var uppercase = userinput.toUpperCase();
    
    var slice = userinput.slice(3);
    
    document.getElementById("demo").innerHTML = userinput + " " + lowcase + " " + uppercase + " " + slice ;
}
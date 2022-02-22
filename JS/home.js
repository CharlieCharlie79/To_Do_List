
var input = document.getElementById('myInput').value;
var showInput = document.createElement('input');
var myUL = document.getElementById("myUL");
var myLI = document.createElement("myLI");
var textNode = document.createTextNode('input'); 

document.querySelector('#plus-icon').onclick = function()
{
    if(document.querySelector('#myInput').value.length == 0)
    {
        alert("Please Enter a Task");
    }
  
    else
    {
       
             /*myLI.appendChild(document.createTextNode(showInput));
             myUL.appendChild(showInput);
             myUL.appendChild(myLI);*/
             myLI.appendChild(textNode);
             myUL.appendChild(myLI);
             console.log("Its working");
        
       
    }
}


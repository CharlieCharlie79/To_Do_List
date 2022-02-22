//This function is able to get the input of the user and put it one the ul creating an li
function addItem()
{
    document.querySelector("#plus-icon").addEventListener('click', function(){
        let input = document.querySelector("#myInput");
        let list = document.querySelector("#myUL");

        let item = document.createElement('li'); // This creates li node
        let itemText = document.createTextNode(input.value); // This creates a text node

        item.appendChild(itemText); 
        list.appendChild(item);

        input.value = ""; 

    })
}




document.querySelector('#plus-icon').onclick = function()
{
    if(document.querySelector('#myInput').value.length == 0)
    {
        alert("Please Enter a Task");
    }
  
    else
    {   
            addItem();
    }
}


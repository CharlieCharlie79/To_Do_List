let input = document.querySelector("#myInput");
let list = document.querySelector("#myUL");



//This function is able to get the input of the user and put it one the ul creating an li
//Adds item
function addItem()
{
    document.querySelector("#plus-icon").addEventListener('click', function(){

        var item = document.createElement('li'); // This creates li node
        // global_item = document.createElement('li'); // This creates li node
        let itemText = document.createTextNode(input.value); // This creates a text node

        item.appendChild(itemText); 
        list.appendChild(item);     

        input.value = ""; 
        
    })
}



// Creates Remove button
function removeButton()
{  
     //Delete button
     //var deleteButton = document.createElement('button');
     //deleteButton.innerText = "Delete";
     //deletes the li
     //var item = document.getElementsByTagName('li');
     //deleteButton.addEventListener('click',  list.removeChild(item));
   
     //add the button
     //list.appendChild(deleteButton);

     //First we select the li
    var items = document.querySelectorAll("#myUL li"), tab = [], index;
    
    for(var i = 0; i < items.length; i++)
    {
        tab.push(items[i].innerHTML);
    }

    for(var i = 0; i < items.length; i++)
    {
        items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log("selector works");
       }

    }

  
}


//Shows the item
document.querySelector('#plus-icon').onclick = function()
{
    if(document.querySelector('#myInput').value.length == 0)
    {
        alert("Please Enter a Task");
    }
  
    else
    {   
        addItem();   
        removeButton(); 
    }
}










var addItemBtn= document.getElementById('add');
var tasklist =document.getElementById('tasks');
var getToDoItem=document.getElementById('to-do-task');
// var getSelectedId= document.getElementById(clicked_id);

var userInputs='';

// document.getElementById('to-do-task').addEventListener('input',function(ev){
    getToDoItem.addEventListener('input',function(ev){
    userInputs=ev.target.value;    
});

// when user clicks ENTER key submission is done
getToDoItem.addEventListener('keyup',function(e) {
        if (e.keyCode ===13){
            myAddFunx();
        }    
});

//delete fxn
function getId(clicked_id) {
    var remove= document.getElementById(clicked_id)
    remove.parentNode.removeChild(remove);
    console.log(remove)
};




/* get the button id and add event-listener
 * of clinking to add item to page
 */
// document.getElementById('add').addEventListener('click', myAddFunx);
addItemBtn.addEventListener('click', myAddFunx);
function myAddFunx()
{
    //prevent empty submissions
    if( userInputs!== undefined && userInputs!== null && userInputs !==""){
        var itemID= (tasklist.childElementCount+1);
        var tag =document.createElement('h3')

        var makeSpan1 =document.createElement('span');
        makeSpan1.innerHTML= '&#9998;';

        var makeSpan2=document.createElement('span');
        makeSpan2.innerHTML= '&#9940;';
        // makeSpan2.onclick="getId(this.id)";
        makeSpan2.onclick= function(){
            // var remove= document.getElementById(itemID)
            var userConfirm='';
            if (userConfirm=confirm("You are about to delete "+ userInputs+" Proceed?")){
                this.parentNode.remove(this);
            }else{
                alert('Delete Cancelled')
            }
            
            
        }
        
        // create node text to be added to the element created
        var text= document.createTextNode(itemID+'. ' + userInputs)
        // append text to the parent node(tag>h3)
        tag.appendChild(text);
        tag.appendChild(makeSpan1);
        tag.appendChild(makeSpan2);
        //assign tag identiy
        tag.className="item";
        tag.id= "item"+(itemID);
    
        makeSpan1.className='edit'
        makeSpan2.className='delete'
        
        // add the newly created element to page
        tasklist.appendChild(tag)    
        console.log(tag);
        console.log(tasklist.childElementCount)
        //reset
        getToDoItem.value='';
        userInputs.value='';     
        
    }else{
        alert('You must Have an Item to Add');
    }   

};



/* the function has error: prevent it from excution when one click anywhere in the page */


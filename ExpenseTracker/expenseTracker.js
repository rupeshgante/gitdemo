var sub=document.getElementById('btn');
sub.addEventListener('click',additems);

function additems(e){
    e.preventDefault();
    const amount=document.getElementById('amount').value;
    const description=document.getElementById('description').value;
    const catageory=document.getElementById('catageory').value;
   const expense={
       amount :amount,
       description : description,
       catageory:catageory,
   }; 
   
   if(localStorage.getItem('expenseof'+expense.description)!==null)
{
    removeFromScreen(expense.description);
}

localStorage.setItem('expenseof'+description,JSON.stringify(expense));
add(expense);
}
var expenselist=document.getElementById('listOfExpenses')

 function add(expense){
    // e.preventDefault();

     var d=JSON.parse(localStorage.getItem('expenseof'+expense.description));
    // console.log(d);
    var li=document.createElement('li');
    li.className='item';
    li.id='li'+expense.description;
    li.appendChild(document.createTextNode(`amount:${d.amount} description:${d.description} catageory:${d.catageory}`));
    var edit=document.createElement('input');
    edit.className='edit';
    edit.id='edit';
    edit.type='button';
    edit.value='EDIT';
   li.appendChild(edit);
   edit.addEventListener('click',()=>{
     var a=document.getElementById('amount');
     var de=document.getElementById('description');
     var c=document.getElementById('catageory');
     a.value=d.amount;
     de.value=d.description;
     c.value=d.catageory;
     localStorage.removeItem('expenseof'+expense.description);
        li.remove();
   })

    var del=document.createElement('input');
    del.className='delete';
    del.id='delete';
    del.type='button';
    del.value='DELETE';
    li.appendChild(del);
    del.addEventListener('click',()=>{
        localStorage.removeItem('expenseof'+expense.description);
        li.remove();
    });
    expenselist.appendChild(li);
}
document.addEventListener('DOMContentLoaded',()=>{
var keys = Object.keys(localStorage);

let stringifiedDetailsOfExpense, detailsOfExpense;
Object.keys(localStorage).forEach((key) => {
if (key.match(/expenseof/g)) {
    stringifiedDetailsOfExpense = localStorage.getItem(key);
  //console.log("stringifiedDetailsOfExpense", stringifiedDetailsOfExpense);
  detailsOfExpense = JSON.parse(stringifiedDetailsOfExpense);
  //console.log("details", detailsOfExpense);

  add(detailsOfExpense);
}
});
});
function removeFromScreen(description)
{
  
var parent=document.getElementById('listOfExpenses');
var child=document.getElementById('li'+description);
parent.removeChild(child);
}
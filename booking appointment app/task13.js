var sub=document.getElementById('submit');
sub.addEventListener('click',additems);

function additems(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    
   const user={
       name : name,
       email : email,
   }; 
   
   if(localStorage.getItem('userdetails'+user.email)!==null)
{
    removeFromScreen(user.email);
}

localStorage.setItem('userdetails'+ email,JSON.stringify(user));
add(user);
}
var userlist=document.getElementById('listOfPeople')

 function add(user){
    // e.preventDefault();

     var d=JSON.parse(localStorage.getItem('userdetails'+user.email));
    // console.log(d);
    var li=document.createElement('li');
    li.className='item';
    li.id='li'+user.email;
    li.appendChild(document.createTextNode(`name:${d.name} email:${d.email}`));
    var edit=document.createElement('input');
    edit.className='edit';
    edit.id='edit';
    
    edit.type='button';
    edit.value='EDIT';
    edit.style.border = "2px solid green";
    li.appendChild(edit);
   edit.addEventListener('click',()=>{
       var x=document.getElementById('edit');
     var n=document.getElementById('name');
     var e=document.getElementById('email');
     n.value=d.name;
     e.value=d.email;
     localStorage.removeItem('userdetails'+user.email);
        li.remove();
   })

    var del=document.createElement('input');
    del.className='delete';
    del.id='delete';
    
    del.type='button';
    del.value='DELETE';
    del.style.border = "2px solid red";
    li.appendChild(del);
    del.addEventListener('click',()=>{
        localStorage.removeItem('userdetails'+user.email);
        li.remove();
    });
    userlist.appendChild(li);
}
document.addEventListener('DOMContentLoaded',()=>{
var keys = Object.keys(localStorage), 
i = keys.length; 
console.log("keys", keys);
let stringifiedDetailsOfPeople, detailsOfPeople;
Object.keys(localStorage).forEach((key) => {
if (key.match(/userdetails/g)) {
  stringifiedDetailsOfPeople = localStorage.getItem(key);
  console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
  detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
  console.log("details", detailsOfPeople);

  add(detailsOfPeople);
}
});
});
function removeFromScreen(email)
{
  
var parent=document.getElementById('listOfPeople');
var child=document.getElementById('li'+email);
parent.removeChild(child);
}
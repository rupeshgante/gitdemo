var form=document.getElementById('my-form');
form.addEventListener('submit',additems);

function additems(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
 const email=document.getElementById('email').value;
const user={
    name : name,
    email : email,
}
localStorage.setItem('userdetails',JSON.stringify(user));

}
var btn=document.getElementById('btnn');
var itemlist=document.getElementById('users');
btn.addEventListener('click',add);
function add(e){
    e.preventDefault();
     var d=JSON.parse(localStorage.getItem('userdetails'));
    console.log(d);
    var li=document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(`name:${d.name} email:${d.email}`));
    itemlist.appendChild(li);
    
}
var form=document.getElementById('my-form');
form.addEventListener('submit',additems);
function additems(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
localStorage.setItem('username',name);
localStorage.setItem('email',email);
}


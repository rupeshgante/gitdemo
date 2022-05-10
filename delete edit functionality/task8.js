var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

form.addEventListener('submit',addItem);
function addItem(e){
e.preventDefault();
var val=document.getElementById('item').value;
var li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(val));
var delbtn=document.createElement('button');
delbtn.className = 'btn btn-danger btn-sm float-right delete';
delbtn.appendChild(document.createTextNode('x'));
li.appendChild(delbtn);
//edit btn
var editbtn=document.createElement('button');
editbtn.className = 'btn-edit btn-sm float-right';
editbtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editbtn);

itemlist.appendChild(li);
}
itemlist.addEventListener('click',removeitem);
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
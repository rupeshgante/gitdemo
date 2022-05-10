var itemlist=document.querySelector('#items');
//Parent Element
console.log(itemlist.parentElement)
//LastElementChild
console.log(itemlist.lastElementChild);
//Lastchild
console.log(itemlist.lastChild)
//First element child
console.log(itemlist.firstElementChild);
//next sibling
console.log(itemlist.nextSibling)
//next element sibling
console.log(itemlist.nextElementSibling)
//previous sibling
console.log(itemlist.previousSibling)
//Previous element sibling
console.log(itemlist.previousElementSibling)

//create element
var newdiv=document.createElement('div')


//set attribute
newdiv.setAttribute('title','hello new div')

//create text node
var newtextnode=document.createTextNode('hello world');

//append child text
newdiv.appendChild(newtextnode)
console.log(newdiv)

//insert in dom
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
container.insertBefore(newdiv,h1)

//var x=document.querySelector('itemlist.firstElementChild')
//itemlist.insertBefore(newdiv,x)
itemlist.innerHTML='<li>hello world</li>'+itemlist.innerHTML
var li=document.getElementsByTagName('li');
console.log(li);
li[0].textContent='Hello';
li[2].style.fontWeight='bold';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='blue';
}
var item=document.querySelectorAll('.list-group-item');
item[1].style.color='Green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}
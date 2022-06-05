var submit=document.getElementById('btn');
submit.addEventListener('click',addExpense);
function addExpense(e){
    e.preventDefault();
    const expense={
        amount:document.getElementById('amount').value,
        description:document.getElementById('description').value,
        catageory:document.getElementById('catageory').value,
    }
    axios.post('https://crudcrud.com/api/d325e23ae2ae4555b8ab370787d5fef5/ExpenseData',expense)
          .then((res)=>{
              add(res.data);
          })
          .catch(err=>console.log(err));
         document.getElementById('amount').value='';
          document.getElementById('description').value='';
          document.getElementById("catageory").value='';
}
document.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/d325e23ae2ae4555b8ab370787d5fef5/ExpenseData')
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            add(res.data[i]);
        }
    })
    .catch(err=>console.log(err));
})

function add(data){
    var listOfExpenses=document.getElementById('listOfExpenses');
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(`Amount : ${data.amount}  ||Description : ${data.description}  ||Catageory : ${data.catageory}`));
    var edit=document.createElement('input');
    edit.id='edit';
    edit.value='EDIT';
    edit.type='button';
    edit.style.border="2px solid green";
    li.appendChild(edit);
    edit.addEventListener('click',()=>{
        var a=document.getElementById('amount');
        var d=document.getElementById('description');
        var c=document.getElementById("catageory");
        a.value=data.amount;
        d.value=data.description;
        c.value=data.catageory;
        axios.delete(`https://crudcrud.com/api/d325e23ae2ae4555b8ab370787d5fef5/ExpenseData/${data._id}`)
             .then(li.remove())
             .catch(err=>console.log(err));
    })
    var del=document.createElement('input');
    del.id='delete';
    del.value='DELETE';
    del.type='button';
    del.style.border="2px solid red";
    li.appendChild(del)
    del.addEventListener('click',()=>{
        axios.delete(`https://crudcrud.com/api/d325e23ae2ae4555b8ab370787d5fef5/ExpenseData/${data._id}`)
             .then(li.remove())
             .catch(err=>console.log(err));
    })
    listOfExpenses.appendChild(li);
}
try{
    var submit=document.getElementById('btn');
submit.addEventListener('click',addExpense);
async function addExpense(e){
    e.preventDefault();
    const expense={
        amount:document.getElementById('amount').value,
        description:document.getElementById('description').value,
        catageory:document.getElementById('catageory').value,
    }
    var res=await axios.post('https://crudcrud.com/api/f7a3df4f0bef4671866ffb2c06286286/ExpenseData',expense);
          
              add(res.data);
         document.getElementById('amount').value='';
          document.getElementById('description').value='';
          document.getElementById("catageory").value='';
}
document.addEventListener('DOMContentLoaded',async ()=>{
    var res= await axios.get('https://crudcrud.com/api/f7a3df4f0bef4671866ffb2c06286286/ExpenseData');
        for(var i=0;i<res.data.length;i++){
            add(res.data[i]);
        }

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
    edit.addEventListener('click',async ()=>{
        var a=document.getElementById('amount');
        var d=document.getElementById('description');
        var c=document.getElementById("catageory");
        a.value=data.amount;
        d.value=data.description;
        c.value=data.catageory;
        await axios.delete(`https://crudcrud.com/api/f7a3df4f0bef4671866ffb2c06286286/ExpenseData/${data._id}`)
             li.remove();
             
    })
    var del=document.createElement('input');
    del.id='delete';
    del.value='DELETE';
    del.type='button';
    del.style.border="2px solid red";
    li.appendChild(del)
    del.addEventListener('click',async()=>{
        await axios.delete(`https://crudcrud.com/api/f7a3df4f0bef4671866ffb2c06286286/ExpenseData/${data._id}`)
             li.remove();
})
    listOfExpenses.appendChild(li);
    }
}
catch(err){
    console.log(err);
}
const posts=[
    {title:'Post 1',body:'This is Post1'},
    {title:'Post 2',body:'This is Post2'},
];
const user={
    username:'rupesh',
    lastUpated:new Date().getTime(),
};
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;

    },1000);
}
function createPost(post){
    
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    posts.push(post);
// console.log('after',posts);
    const error=false;
    if(!error){
        resolve();
    }
    else{
        reject('Error: Something went wrong');
    }

},1000);
    });
    
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
if(posts.length>0){
    resolve()
}
else{
    reject('Error:Array is Empty now');
}
        },2000);
    });
    
}
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          user.lastUpated=new Date().getTime();
resolve(user.lastUpated);

        },2000)
    });
}
promise2=updateLastUserActivityTime();
function userupdate(){
    Promise.all([promise1,promise2]).then(()=>
    {
        console.log(posts,user.lastUpated);
        deletePost().then(()=>console.log(posts))
    })
    .catch(err=>console.log(err));
}

//  createPost({title:'post 3',body:'this is post 3'});
// .then(getPosts)
// .catch(err=>console.log(err));
//  deletePost()
// .then(getPosts)
// .catch(eerr=>console.log(eerr));
// deletePost()
// .then(getPosts)
// .catch(eerr=>console.log(eerr));
// deletePost()
// .then(getPosts)
// .catch(eerr=>console.log(eerr));
// deletePost()
// .then(getPosts)
// .catch(eerr=>console.log(eerr));
//  createPost({title:'Post 3',body:'this is post 3'})
// .then(()=>{
//     getPosts()
// deletePost().then(getPosts)
// })
// .catch(err=>console.log(err));



// const promise1=Promise.resolve('Hello world');
// const promise2=100;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Good Bye');
// });
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
// Promise.all([promise1,promise2,promise3,promise4]).then(values=>
//     console.log(values));


const promise1=createPost({title:'post 3',body:'this is post 3'});
userupdate();